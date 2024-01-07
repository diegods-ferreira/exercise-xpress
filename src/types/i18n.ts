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
    measuringUnits: {
      weight: {
        kilogram: Record<'symbol' | 'singular' | 'plural', string>;
      };
      distance: {
        meters: Record<'symbol' | 'singular' | 'plural', string>;
      };
    };
  };
  landingPage: {
    title: string;
    subtitle: string;
    actionButton: string;
    accessPrivacyPolicy: string;
  };
  settingsPage: {
    title: string;
    measuringUnitsGroup: {
      title: string;
      weight: string;
      distance: string;
    };
    generalGroup: {
      title: string;
      darkTheme: string;
    };
  };
};

export type I18nTextsKeys = FlattenKeys<I18nTexts>;
