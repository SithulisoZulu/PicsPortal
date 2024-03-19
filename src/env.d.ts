interface ImportMetaEnv {
    readonly SANITY_SECRET_KEY: string;
    readonly PEXELS_API_KEY   : string
    readonly CONNECTION_STRING: string;
    readonly ENVIRONMENT      : string;
    readonly JWT_SECRET       : string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
/// <reference types="astro/client" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

