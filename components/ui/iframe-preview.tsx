"use client";

import { createPortal } from "react-dom";
import { useState, useRef, useEffect } from "react";

// Renders content in an iframe to trigger real CSS media queries
export default function IframePreview({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState<number>(0);

  const sync = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument;
    if (!doc) return;

    if (doc.getElementById("preview-mount")) return;

    // Copy all Next.js / Tailwind stylesheets into the iframe
    const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
    styles.forEach((style) => {
      doc.head.appendChild(style.cloneNode(true));
    });

    // Copy dark mode classes
    doc.documentElement.className = document.documentElement.className;
    doc.body.className = document.body.className;

    // Setup mount node
    const mount = doc.createElement("div");
    mount.id = "preview-mount";
    doc.body.appendChild(mount);
    doc.body.style.margin = "0";
    doc.body.style.padding = "0";
    doc.documentElement.style.overflow = "hidden"; // Hide internal iframe scrollbar

    setMountNode(mount);
  };

  useEffect(() => {
    sync();
    // Keep dark mode synced automatically
    const observer = new MutationObserver(() => {
      if (iframeRef.current?.contentDocument) {
        iframeRef.current.contentDocument.documentElement.className =
          document.documentElement.className;
        iframeRef.current.contentDocument.body.className =
          document.body.className;
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;

    const iframeDocument = iframe.contentDocument;

    const handleIframePointer = (e: MouseEvent | PointerEvent) => {
      // Create a perfect synchronous clone of the iframe's event directly onto the main window!
      const clonedEvent = new PointerEvent(e.type, {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: true,
        cancelable: true,
        view: window,
        pointerId: 1,
      });
      window.dispatchEvent(clonedEvent);
      document.dispatchEvent(clonedEvent);
    };

    const attachListeners = () => {
      const targetWindow = iframe.contentWindow;
      if (!targetWindow) return;
      ["pointermove", "pointerdown", "pointerup", "pointerleave"].forEach(
        (type) => {
          // Use capture phase to intercept before R3F canvases stop propagation inside the iframe!
          targetWindow.addEventListener(
            type,
            handleIframePointer as EventListener,
            true
          );
        }
      );
    };

    if (iframeDocument && iframeDocument.readyState === "complete") {
      attachListeners();
    } else {
      iframe.addEventListener("load", attachListeners);
    }

    return () => {
      iframe.removeEventListener("load", attachListeners);
      if (iframe.contentWindow) {
        ["pointermove", "pointerdown", "pointerup", "pointerleave"].forEach(
          (type) => {
            iframe.contentWindow?.removeEventListener(
              type,
              handleIframePointer as EventListener,
              true
            );
          }
        );
      }
    };
  }, [mountNode]);

  useEffect(() => {
    if (!mountNode) return;
    const calculateHeight = () => {
      // Use scrollHeight which accounts for the actual content size, or the first child
      const height = Math.max(
        mountNode.scrollHeight,
        mountNode.firstElementChild?.scrollHeight || 0
      );
      setIframeHeight(height);
    };

    // Calculate immediately
    calculateHeight();

    // Re-calculate on resize
    const resizeObserver = new ResizeObserver(calculateHeight);
    resizeObserver.observe(mountNode);
    if (mountNode.firstElementChild) {
      resizeObserver.observe(mountNode.firstElementChild);
    }

    // Periodically recalculate just in case things load late (like Three.js canvas)
    const interval = setInterval(calculateHeight, 500);

    return () => {
      resizeObserver.disconnect();
      clearInterval(interval);
    };
  }, [mountNode]);

  return (
    <iframe
      ref={iframeRef}
      onLoad={sync}
      style={{ height: iframeHeight }}
      className="w-full border-none bg-transparent transition-all duration-300"
      title="Component Preview"
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
}
