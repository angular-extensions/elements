export declare interface TrustedTypePolicy {
  createScriptURL(url: string): string;
}

export declare interface TrustedTypePolicyFactory {
  createPolicy(
    policyName: string,
    policyOptions: {
      createScriptURL?: (url: string) => string;
    }
  ): TrustedTypePolicy;
}

let policy: TrustedTypePolicy | null | undefined;

export function getPolicy(): TrustedTypePolicy | null {
  if (policy === undefined) {
    policy = null;
    if (typeof window !== 'undefined') {
      const ttWindow = window as unknown as {
        trustedTypes?: TrustedTypePolicyFactory;
      };
      if (ttWindow.trustedTypes !== undefined) {
        policy = ttWindow.trustedTypes.createPolicy(
          'angular-extensions#elements',
          {
            createScriptURL: (url: string) => url,
          }
        );
      }
    }
  }
  return policy;
}
