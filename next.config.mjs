import { withSentryConfig } from '@sentry/nextjs';
import * as Sentry from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        tracesSampleRate: 1.0, // Adjust for performance monitoring
        environment: process.env.NODE_ENV,
    });
} else {
    console.warn('Sentry DSN is not defined. Sentry will not be enabled.');
}

const sentryWebpackPluginOptions = {
    // Sentry Webpack Plugin Options: https://github.com/getsentry/sentry-webpack-plugin#options
    org: "nishanth-cm",
    project: "javascript-nextjs",
    silent: !process.env.CI, // Only print logs in CI

    // Optional Enhancements
    widenClientFileUpload: true, // More detailed source maps
    transpileClientSDK: true,    // IE11 compatibility
    hideSourceMaps: true,        // Hides maps in the bundle
    disableLogger: true,         // Tree-shake Sentry logs
    tunnelRoute: "/monitoring",  // Tunnel requests to circumvent ad blockers
    automaticVercelMonitors: true, // Instrument Vercel Cron Jobs

    // React Component Annotation
    reactComponentAnnotation: {
        enabled: true,
    },
};

// Use withSentryConfig only once
export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);