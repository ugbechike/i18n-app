import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import React from "react";
import { useRouter } from "next/router";
import cssjanus from "cssjanus";
// import stylisPluginRtl from "stylis-plugin-rtl";

const stylisPluginRtl = (element) => {
  const types: string[] = ["rule", "decl"];
  console.log('----->>>', element);

  if (types.includes(element.type)) {
    return (element.value = cssjanus.transform(element.value));
  }
};

const options: any = {
  rtl: { key: "key-frame", stylisPlugins: [stylisPluginRtl] },
  ltr: { key: "key-frames" },
};
export type LangDirectionType = "rtl" | "ltr";

type RtlProviderProps = {
  children: any;
};

export function RtlProvider(props: RtlProviderProps) {
  const router = useRouter();
  const { children } = props;
  const direction: LangDirectionType = router.locale == "ar" ? "rtl" : "ltr";

  return (
    <CacheProvider value={createCache(options[direction])}>
      {children}
    </CacheProvider>
  );
}
