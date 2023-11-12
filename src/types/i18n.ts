type FlattenKeys<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends string
    ? `${Prefix & string}${Prefix extends '' ? '' : '.'}${K & string}`
    : FlattenKeys<
        T[K],
        `${Prefix & string}${Prefix extends '' ? '' : '.'}${K & string}`
      >;
}[keyof T];

export type I18nTexts = {
  global: {
    privacyPolicy: string;
  };
  landingPage: {
    title: string;
    subtitle: string;
    actionButton: string;
    accessPrivacyPolicy: string;
  };
};

export type I18nTextsKeys = FlattenKeys<I18nTexts>;
