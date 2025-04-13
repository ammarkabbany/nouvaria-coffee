// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    API_ENDPOINT: z.string().url(),
    APPLICATION_ID: z.string(),
    ACCESS_TOKEN: z.string(),
    SQUARE_VERSION: z.string(),
    SQUARE_ENVIRONMENT: z.enum(["PRODUCTION", "SANDBOX"]).optional(), // optional for local dev
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    APPLICATION_ID: process.env.APPLICATION_ID,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    SQUARE_VERSION: process.env.SQUARE_VERSION,
    SQUARE_ENVIRONMENT: process.env.SQUARE_ENVIRONMENT,
  },
});