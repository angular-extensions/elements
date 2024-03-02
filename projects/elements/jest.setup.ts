import 'jest-preset-angular/setup-jest.mjs';

declare const ngDevMode: boolean;

// Globals mocks
(window as any).trustedTypes = {
  createPolicy: (name: string) => ({
    createScript: (script: string) => script,
    createScriptURL: (url: string) => url,
  }),
};
