"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import React, { useState, useRef, useEffect, createContext, useContext } from "react";
import {
    Mic,
    ArrowUp,
    Sparkles,
    ChevronDown,
    X,
    Plus,
    Check,
    Globe,
    Video,
    Image as ImageIcon,
    Layout,
    BookOpen,
    Paperclip,
    File,
    Square,
    LucideIcon
} from "lucide-react";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

type IconComponent = React.ComponentType<{ className?: string }>;

interface AIInputContextType {
    activeDropdown: 'plus' | 'tools' | 'model' | null;
    setActiveDropdown: (dropdown: 'plus' | 'tools' | 'model' | null) => void;
}

interface Model {
    id: string;
    name: string;
    label: string;
    icon: LucideIcon;
}

interface MenuItem {
    id: string;
    icon: LucideIcon;
    label: string;
}

interface ToolItem {
    icon: LucideIcon;
    label: string;
}

interface Attachment {
    preview: string;
    type: 'image' | 'file' | 'video';
}

interface Message {
    role: 'user' | 'ai';
    content: string;
    attachments?: Attachment[];
}

interface UploadedFile {
    id: string;
    file: File;
    preview: string;
    type: 'image' | 'file' | 'video';
}

// =============================================================================
// CONSTANTS & DEFAULTS
// =============================================================================

const DEFAULT_MODELS: Model[] = [
    { id: "gpt4o", name: "GPT-4o", label: "GPT-4o", icon: Sparkles },
    { id: "gpt4", name: "GPT-4", label: "GPT-4", icon: Sparkles },
    { id: "claude", name: "Claude 3.5", label: "Claude 3.5", icon: Sparkles },
    { id: "claude-opus", name: "Claude 4.5 Opus", label: "Claude 4.5 Opus", icon: Sparkles },
];

const DEFAULT_PLUS_MENU: MenuItem[] = [
    { id: "files", icon: Paperclip, label: "Upload photos & files" },
    { id: "videos", icon: Video, label: "Upload Videos" },
];

const DEFAULT_TOOLS: ToolItem[] = [
    { icon: Globe, label: "Deep Research" },
    { icon: Video, label: "Create videos" },
    { icon: ImageIcon, label: "Create images" },
    { icon: Layout, label: "Canvas" },
    { icon: BookOpen, label: "Guided Learning" },
];

// =============================================================================
// CONTEXT
// =============================================================================

const AIInputContext = createContext<AIInputContextType | undefined>(undefined);

export const useAIInput = () => {
    const context = useContext(AIInputContext);
    if (!context) {
        throw new Error("useAIInput must be used within an AIInput component");
    }
    return context;
};

// =============================================================================
// DROPDOWN COMPONENT
// =============================================================================

interface DropdownItem {
    icon?: IconComponent;
    label: string;
    onClick?: () => void;
}

interface AIInputDropdownProps<T> {
    isOpen: boolean;
    onClose: () => void;
    items: T[];
    renderItem?: (item: T, index: number) => React.ReactNode;
    className?: string;
}

export function AIInputDropdown<T extends DropdownItem>({
    isOpen,
    onClose,
    items,
    renderItem,
    className
}: AIInputDropdownProps<T>) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40 bg-transparent"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                        className={cn(
                            "absolute bottom-full left-0 mb-2 bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden z-50 p-1.5",
                            className
                        )}
                    >
                        <div className="flex flex-col gap-0.5">
                            {items.map((item, index) => (
                                renderItem ? (
                                    <div key={index} onClick={onClose}>
                                        {renderItem(item, index)}
                                    </div>
                                ) : (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            item.onClick?.();
                                            onClose();
                                        }}
                                        className="flex items-center gap-2 px-2 py-2.5 w-full text-left text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 rounded-2xl transition-colors group"
                                    >
                                        {item.icon && (
                                            <item.icon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors" />
                                        )}
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </button>
                                )
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
AIInputDropdown.displayName = "AIInputDropdown";

// =============================================================================
// PILL BUTTON COMPONENT
// =============================================================================

interface AIInputPillButtonProps {
    children: React.ReactNode;
    isActive?: boolean;
    showChevron?: boolean;
    chevronRotated?: boolean;
    showClose?: boolean;
    onClose?: () => void;
    onClick?: () => void;
    layoutId?: string;
    className?: string;
    icon?: IconComponent;
}

export function AIInputPillButton({
    children,
    isActive = false,
    showChevron = false,
    chevronRotated = false,
    showClose = false,
    onClose,
    onClick,
    layoutId,
    className,
    icon: Icon,
}: AIInputPillButtonProps) {
    const baseStyles = "flex items-center gap-2 px-3 py-2 rounded-full transition-colors border cursor-pointer";
    const activeStyles = "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-black/10 dark:border-white/10";
    const inactiveStyles = "bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border-black/5 dark:border-white/5";

    const pillContent = (
        <>
            {Icon && <Icon className="w-4 h-4 text-zinc-500" />}
            {children}
            {showChevron && (
                <ChevronDown
                    className={cn(
                        "w-4 h-4 text-zinc-400 transition-transform",
                        chevronRotated && "rotate-180"
                    )}
                />
            )}
        </>
    );

    if (showClose) {
        return (
            <motion.div
                layoutId={layoutId}
                layout
                transition={{ duration: 0.3 }}
                className={cn(baseStyles, isActive ? activeStyles : inactiveStyles, className)}
            >
                <button onClick={onClick} className="flex items-center gap-2 cursor-pointer">
                    {pillContent}
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose?.();
                    }}
                    className="ml-1 p-0.5 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 flex items-center justify-center transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-600 cursor-pointer"
                >
                    <X className="w-3 h-3" />
                </button>
            </motion.div>
        );
    }

    return (
        <motion.button
            layoutId={layoutId}
            layout
            onClick={onClick}
            transition={{ duration: 0.3 }}
            className={cn(baseStyles, isActive ? activeStyles : inactiveStyles, className)}
        >
            {pillContent}
        </motion.button>
    );
}
AIInputPillButton.displayName = "AIInputPillButton";

// =============================================================================
// MESSAGES AREA COMPONENT
// =============================================================================

interface AIInputMessagesProps {
    messages: Message[];
    hasSubmitted: boolean;
    messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export function AIInputMessages({ messages, hasSubmitted, messagesEndRef }: AIInputMessagesProps) {
    return (
        <motion.div
            layout
            className={cn(
                "w-full max-w-2xl mx-auto flex flex-col gap-6 overflow-y-auto px-4 hide-scrollbar",
                hasSubmitted ? "flex-1 pt-10" : "hidden"
            )}
        >
            {hasSubmitted && (
                <>
                    {messages.map((msg, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            key={idx}
                            className={cn(
                                "flex flex-col gap-2 max-w-[85%]",
                                msg.role === 'user' ? "ml-auto items-end" : "items-start"
                            )}
                        >
                            {msg.attachments && msg.attachments.length > 0 && (
                                <div className="flex flex-wrap gap-2 justify-end">
                                    {msg.attachments.map((attachment, attachIdx) => (
                                        <div key={attachIdx} className="relative">
                                            {attachment.type === 'image' ? (
                                                <div className="relative w-20 h-20 rounded-[12px] overflow-hidden border border-black/5 dark:border-white/10">
                                                    <Image
                                                        src={attachment.preview}
                                                        alt="Attachment"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ) : attachment.type === 'video' ? (
                                                <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-700 border border-black/5 dark:border-white/10">
                                                    <video src={attachment.preview} className="w-full h-full object-cover" />
                                                </div>
                                            ) : (
                                                <div className="w-20 h-20 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-black/5 dark:border-white/10 flex items-center justify-center">
                                                    <File className="w-8 h-8 text-zinc-500" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {msg.content && (
                                <div
                                    className={cn(
                                        "p-2 rounded-[12px]",
                                        msg.role === 'user'
                                            ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                                            : "text-zinc-900 dark:text-zinc-100"
                                    )}
                                >
                                    {msg.role === 'ai' && (
                                        <div className="flex items-center gap-2 mb-2 text-xs font-medium text-neutral-500">
                                            <Sparkles className="w-3 h-3" />
                                            AI Response
                                        </div>
                                    )}
                                    {msg.content}
                                </div>
                            )}
                        </motion.div>
                    ))}
                    <div className="h-24 flex-shrink-0" />
                    <div ref={messagesEndRef} />
                </>
            )}
        </motion.div>
    );
}
AIInputMessages.displayName = "AIInputMessages";

// =============================================================================
// FILE PREVIEW COMPONENT
// =============================================================================

interface AIInputFilePreviewProps {
    files: UploadedFile[];
    onRemove: (id: string) => void;
}

export function AIInputFilePreview({ files, onRemove }: AIInputFilePreviewProps) {
    return (
        <AnimatePresence>
            {files.length > 0 && (
                <motion.div
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto', transition: { ease: "easeInOut" } }}
                    exit={{ opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeInOut" } }}
                    className="overflow-hidden"
                >
                    <div className="px-4 pt-4 pb-2 flex flex-wrap gap-2">
                        {files.map((file) => (
                            <motion.div
                                key={file.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                layout
                                className="relative group/file"
                            >
                                {file.type === 'image' ? (
                                    <div className="relative w-16 h-16 rounded-[12px] overflow-hidden border border-black/5 dark:border-white/10">
                                        <Image src={file.preview} alt={file.file.name} fill className="object-cover" />
                                    </div>
                                ) : file.type === 'video' ? (
                                    <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                        <video src={file.preview} className="w-full h-full object-cover" />
                                    </div>
                                ) : (
                                    <div className="w-16 h-16 rounded-lg border border-black/5 dark:border-white/10 bg-zinc-100 dark:bg-zinc-800 flex flex-col items-center justify-center gap-1 p-1">
                                        <File className="w-5 h-5 text-zinc-500" />
                                        <span className="text-[8px] text-zinc-500 truncate w-full text-center">
                                            {file.file.name.split('.').pop()?.toUpperCase()}
                                        </span>
                                    </div>
                                )}
                                <button
                                    onClick={() => onRemove(file.id)}
                                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full dark:bg-zinc-800 bg-zinc-100 text-zinc-500 dark:text-zinc-400 flex items-center justify-center border border-black/5 dark:border-white/10 cursor-pointer"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
AIInputFilePreview.displayName = "AIInputFilePreview";

// =============================================================================
// MAIN AI INPUT COMPONENT
// =============================================================================

interface AIInputProps {
    models?: Model[];
    tools?: ToolItem[];
    plusMenuItems?: MenuItem[];
    onSubmit?: (message: string, attachments: Attachment[]) => void;
    placeholder?: string;
    className?: string;
}

export function AIInput({
    models = DEFAULT_MODELS,
    tools = DEFAULT_TOOLS,
    plusMenuItems = DEFAULT_PLUS_MENU,
    onSubmit,
    placeholder = "Ask anything...",
    className,
}: AIInputProps) {
    const [value, setValue] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
    const [isListening, setIsListening] = useState<boolean>(false);
    const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
    const [selectedModel, setSelectedModel] = useState<Model>(models[0]);
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
    const [activeDropdown, setActiveDropdown] = useState<'plus' | 'tools' | 'model' | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const videoInputRef = useRef<HTMLInputElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const hasText = value.length > 0;

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const newFiles: UploadedFile[] = Array.from(files).map(file => {
            const isImage = file.type.startsWith('image/');
            const isVideo = file.type.startsWith('video/');
            return {
                id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                file,
                preview: isImage || isVideo ? URL.createObjectURL(file) : '',
                type: isVideo ? 'video' : (isImage ? 'image' : 'file')
            };
        });

        setUploadedFiles(prev => [...prev, ...newFiles]);
        e.target.value = '';
    };

    const removeFile = (id: string) => {
        setUploadedFiles(prev => {
            const file = prev.find(f => f.id === id);
            if (file?.preview) URL.revokeObjectURL(file.preview);
            return prev.filter(f => f.id !== id);
        });
    };

    const handlePlusMenuClick = (itemId: string) => {
        setActiveDropdown(null);
        if (itemId === 'files') fileInputRef.current?.click();
        else if (itemId === 'videos') videoInputRef.current?.click();
    };

    const handleSubmit = () => {
        if (!value.trim() && uploadedFiles.length === 0) return;

        setHasSubmitted(true);
        const attachments = uploadedFiles.map(file => ({ preview: file.preview, type: file.type }));

        setMessages(prev => [...prev, { role: 'user', content: value, attachments: attachments.length > 0 ? attachments : undefined }]);

        if (onSubmit) {
            onSubmit(value, attachments);
        }

        setValue("");
        setUploadedFiles([]);

        // Simulate AI reply (remove in production)
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'ai', content: `Your response content here...` }]);
        }, 500);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <AIInputContext.Provider value={{ activeDropdown, setActiveDropdown }}>
            <div className={cn("w-full h-[100dvh] flex flex-col relative overflow-hidden", className)}>
                <AIInputMessages messages={messages} hasSubmitted={hasSubmitted} messagesEndRef={messagesEndRef} />

                <motion.div
                    layout
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className={cn(
                        "w-full px-4 flex flex-col z-20",
                        hasSubmitted ? "pb-8" : "flex-1 justify-center items-center"
                    )}
                >
                    <div className="w-full max-w-2xl mx-auto relative group">
                        <motion.div
                            layoutId="input-container"
                            layout
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="relative bg-white dark:bg-[#09090b] rounded-[32px] border border-black/5 dark:border-white/5"
                        >
                            <input ref={fileInputRef} type="file" multiple accept="image/*,.pdf,.doc,.docx,.txt,.md" className="hidden" onChange={handleFileSelect} />
                            <input ref={videoInputRef} type="file" multiple accept="video/*" className="hidden" onChange={handleFileSelect} />

                            <AIInputFilePreview files={uploadedFiles} onRemove={removeFile} />

                            <div className="p-4 pb-14">
                                <motion.textarea
                                    layout
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    disabled={isListening}
                                    placeholder={isListening ? "Listening..." : placeholder}
                                    className="w-full bg-transparent text-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 resize-none outline-none min-h-[40px] max-h-[200px]"
                                    rows={1}
                                    style={{ minHeight: "44px", height: "auto" }}
                                    onInput={(e) => {
                                        const target = e.target as HTMLTextAreaElement;
                                        target.style.height = 'auto';
                                        target.style.height = `${target.scrollHeight}px`;
                                    }}
                                />
                            </div>

                            {/* Bottom Controls */}
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                                {/* Left Side */}
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === 'plus' ? null : 'plus')}
                                            className={cn(
                                                "p-2.5 rounded-full transition-colors border",
                                                activeDropdown === 'plus'
                                                    ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-black/10 dark:border-white/10"
                                                    : "bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border-black/5 dark:border-white/5"
                                            )}
                                        >
                                            <Plus className={cn("w-5 h-5 transition-transform", activeDropdown === 'plus' && "rotate-45")} />
                                        </button>
                                        <AIInputDropdown
                                            isOpen={activeDropdown === 'plus'}
                                            onClose={() => setActiveDropdown(null)}
                                            items={plusMenuItems}
                                            className="w-56 bottom-full left-0 mb-2"
                                            renderItem={(item) => (
                                                <button
                                                    onClick={() => handlePlusMenuClick(item.id)}
                                                    className="flex items-center gap-2 px-4 py-3 w-full text-left text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 rounded-2xl transition-colors group"
                                                >
                                                    <item.icon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors" />
                                                    <span className="text-sm font-medium">{item.label}</span>
                                                </button>
                                            )}
                                        />
                                    </div>

                                    <div className="relative hidden sm:block">
                                        {selectedTool ? (
                                            <AIInputPillButton
                                                layoutId="tools-pill"
                                                icon={selectedTool.icon}
                                                isActive={activeDropdown === 'tools'}
                                                showChevron
                                                chevronRotated={activeDropdown === 'tools'}
                                                showClose
                                                onClick={() => setActiveDropdown(activeDropdown === 'tools' ? null : 'tools')}
                                                onClose={() => { setSelectedTool(null); setActiveDropdown(null); }}
                                            >
                                                <span className="text-sm font-medium">{selectedTool.label}</span>
                                            </AIInputPillButton>
                                        ) : (
                                            <AIInputPillButton
                                                layoutId="tools-pill"
                                                icon={Sparkles}
                                                isActive={activeDropdown === 'tools'}
                                                showChevron
                                                chevronRotated={activeDropdown === 'tools'}
                                                onClick={() => setActiveDropdown(activeDropdown === 'tools' ? null : 'tools')}
                                            >
                                                <span className="text-sm font-medium">Tools</span>
                                            </AIInputPillButton>
                                        )}

                                        <AIInputDropdown
                                            isOpen={activeDropdown === 'tools'}
                                            onClose={() => setActiveDropdown(null)}
                                            items={tools}
                                            className="w-64 bottom-full left-0 mb-2"
                                            renderItem={(item) => (
                                                <button
                                                    onClick={() => { setSelectedTool(item); setActiveDropdown(null); }}
                                                    className={cn(
                                                        "flex items-center gap-3 px-4 py-3 w-full text-left text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 rounded-2xl transition-colors group",
                                                        selectedTool?.label === item.label && "bg-zinc-100 dark:bg-zinc-800"
                                                    )}
                                                >
                                                    <item.icon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors" />
                                                    <span className="text-sm font-medium">{item.label}</span>
                                                </button>
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* Right Side */}
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <AIInputPillButton
                                            layoutId="model-pill"
                                            icon={selectedModel.icon}
                                            isActive={activeDropdown === 'model'}
                                            showChevron
                                            chevronRotated={activeDropdown === 'model'}
                                            onClick={() => setActiveDropdown(activeDropdown === 'model' ? null : 'model')}
                                        >
                                            <span className="text-sm font-medium">{selectedModel.name}</span>
                                        </AIInputPillButton>

                                        <AIInputDropdown
                                            isOpen={activeDropdown === 'model'}
                                            onClose={() => setActiveDropdown(null)}
                                            items={models}
                                            className="w-48 bottom-full right-0 mb-2 p-1"
                                            renderItem={(model) => (
                                                <button
                                                    onClick={() => { setSelectedModel(model); setActiveDropdown(null); }}
                                                    className={cn(
                                                        "flex items-center gap-3 px-4 py-3 w-full text-left text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 rounded-2xl transition-colors group",
                                                        selectedModel.id === model.id && "bg-zinc-100 dark:bg-zinc-800"
                                                    )}
                                                >
                                                    <model.icon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors" />
                                                    <span className="text-sm font-medium">{model.name}</span>
                                                    {selectedModel.id === model.id && <Check className="w-4 h-4 ml-auto text-zinc-500" />}
                                                </button>
                                            )}
                                        />
                                    </div>

                                    <div className="flex justify-end">
                                        <AnimatePresence mode="wait" initial={false}>
                                            {hasText ? (
                                                <motion.div
                                                    key="active-controls"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <button onClick={() => setValue("")} className="p-2 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors">
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                    <button onClick={handleSubmit} className="p-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-90 transition-opacity">
                                                        <ArrowUp className="w-5 h-5" />
                                                    </button>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="inactive-controls"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <button
                                                        onClick={() => setIsListening(!isListening)}
                                                        className={cn(
                                                            "p-2 transition-all duration-300 relative cursor-pointer",
                                                            isListening
                                                                ? "text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-full"
                                                                : "text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
                                                        )}
                                                    >
                                                        {isListening ? <Square className="w-4 h-4" fill="currentColor" /> : <Mic className="w-4 h-4" />}
                                                        {isListening && <span className="absolute inset-0 rounded-full animate-ping bg-red-500/20" />}
                                                    </button>
                                                    <button disabled className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-300 dark:text-zinc-600">
                                                        <ArrowUp className="w-4 h-4" />
                                                    </button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </AIInputContext.Provider>
    );
}
AIInput.displayName = "AIInput";

export default AIInput;
