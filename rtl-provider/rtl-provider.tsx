import { CacheProvider } from "@emotion/react";
import createCache, { Options } from "@emotion/cache";
import React from "react";
import { useRouter } from "next/router";
// import cssjanus from "cssjanus";
import stylisPluginRtl from "stylis-plugin-rtl";

// todo a back-up plugin..
// const stylisPluginRtl = (element) => {
//   const types: string[] = ["rule", "decl"];
//   console.log("----->>>", element);
//
//   if (types.includes(element.type)) {
//     return (element.value = cssjanus.transform(element.value));
//   }
// };

export type LangDirection = "rtl" | "ltr";

type CreateCacheOptions = {
  [K in LangDirection]: Options;
};

const options: CreateCacheOptions = {
  rtl: { key: "key-frame", stylisPlugins: [stylisPluginRtl as any] },
  ltr: { key: "key-frames" },
};

type RtlProviderProps = {
  children: React.ReactNode;
};

export function RtlProvider(props: RtlProviderProps) {
  const { locale } = useRouter();

  const { children } = props;
  const direction = locale == "ar" ? "rtl" : "ltr";

  return (
    <CacheProvider value={createCache(options[direction])}>
      {children}
    </CacheProvider>
  );
}
