import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

export const HIGHLIGHT_JS_PROVIDER = {
  provide: HIGHLIGHT_OPTIONS,
  useValue: {
    coreLibraryLoader: () => import('highlight.js/lib/core'),
    languages: {
      typescript: () => import('highlight.js/lib/languages/typescript'),
      xml: () => import('highlight.js/lib/languages/xml'),
    },
  },
};
