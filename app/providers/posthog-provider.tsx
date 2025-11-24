'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
            api_host: "/ingest", // Use the proxy set up in next.config.ts
            ui_host: "https://us.posthog.com",
            capture_pageview: false, // We handle this manually in PostHogPageView
            capture_exceptions: true,
            debug: process.env.NODE_ENV === "development",
        })
    }, [])

    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
