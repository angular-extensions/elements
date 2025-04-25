import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone/index.mjs';

setupZoneTestEnv();

declare const ngDevMode: boolean;

// Globals mocks
(window as any).trustedTypes = {
  createPolicy: (name: string) => ({
    createScript: (script: string) => script,
    createScriptURL: (url: string) => url,
  }),
};
