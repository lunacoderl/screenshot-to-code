// Default to false if set to anything other than "true" or unset
export const IS_RUNNING_ON_CLOUD =
  import.meta.env.VITE_IS_DEPLOYED === "true" || false;

const isLocalhost =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

// Production Render backend defaults
const DEFAULT_PROD_HTTP = "https://screenshot-to-code-7a6e.onrender.com";
const DEFAULT_PROD_WS = "wss://screenshot-to-code-7a6e.onrender.com";

const LOCAL_HTTP = "http://127.0.0.1:7001";
const LOCAL_WS = "ws://127.0.0.1:7001";

// Resolve URLs:
// 1. Vite environment variables if explicitly set
// 2. If running on localhost, use local backend (7001)
// 3. When deployed (e.g. on Vercel), default to the Render backend URL
export const HTTP_BACKEND_URL =
  import.meta.env.VITE_HTTP_BACKEND_URL ||
  (isLocalhost ? LOCAL_HTTP : DEFAULT_PROD_HTTP);

export const WS_BACKEND_URL =
  import.meta.env.VITE_WS_BACKEND_URL ||
  (isLocalhost ? LOCAL_WS : DEFAULT_PROD_WS);

export const PICO_BACKEND_FORM_SECRET =
  import.meta.env.VITE_PICO_BACKEND_FORM_SECRET || null;
