// Globals mocks
(window as any).trustedTypes = {
  createPolicy: () => ({
    createScript: (script: string) => script,
    createScriptURL: (url: string) => url,
  }),
};
