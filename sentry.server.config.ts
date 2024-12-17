// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
"use client";
import * as Sentry from "@sentry/nextjs";


Sentry.init({
  dsn:  "https://0798e00a0ec1f897fe813ed65d2083dc@o4508480906199040.ingest.us.sentry.io/4508480909410304",
  tracesSampleRate: 1.0, // Adjust this as needed
});

