const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {};

const sentryOptions = {
    org: "nishanth-cm",
    project: "javascript-nextjs",
    silent: true, // Suppress logs in build
};

module.exports = withSentryConfig(nextConfig, sentryOptions);
