import { I18nTexts } from '@/types';

declare module 'i18next' {
  interface CustomTypeOptions {
    nsSeparator: '.';
    resources: I18nTexts;
  }
}
