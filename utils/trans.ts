import { createIntl, createIntlCache, IntlCache } from "react-intl";

const cache: IntlCache = createIntlCache();
const intlProv = {};
const content = {};

function getMessages(lang: string) {
  if (!content[lang]) {
    if (typeof window !== "undefined") {
      //@ts-ignore
      content[lang] = window.__NEXT_DATA__?.props.pageProps.content;
    }
  }

  return content[lang];
}

function getIntlProvider(lang: string) {
  if (!intlProv[lang]) {
    intlProv[lang] = createIntl(
      {
        locale: lang,
        messages: getMessages(lang),
        onError: () => {},
      },
      cache // optional
    );
  }
  return intlProv[lang];
}

export const trans = (id: string, values?: any) => {
  let locale: string;
  if (typeof window !== "undefined") {
    //@ts-ignore
    locale = window.__NEXT_DATA__?.locale;
  }
  const intl = getIntlProvider(locale);

  return intl.formatMessage({ id }, values);
};
