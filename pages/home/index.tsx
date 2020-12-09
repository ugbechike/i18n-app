import React from "react";
import { Box, Text, SimpleGrid, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { trans } from "../../utils/trans";
import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";
import { data } from "../../utils/fake-data";

type CardPropType = {
  children: React.ReactNode;
};

const BaseCard = (props: CardPropType) => {
  const { children } = props;
  return (
    <Box
      borderWidth={1}
      shadow={"base"}
      borderColor={"gray.100"}
      borderTopRightRadius={10}
      borderBottomLeftRadius={10}
      maxW={400}
      paddingY={"10px"}
      paddingX={"10px"}
      my={"10px"}
    >
      {children}
    </Box>
  );
};

const Items = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <Box margin={"auto"} width={"80%"}>
      <Box display="flex" justifyContent={"flex-end"}>
        <Button
          bg={"tomato"}
          display={{ base: "none", md: "flex" }}
          onClick={async () => {
            await router.push("/home", "/home", {
              locale: locale === "en" ? "ar" : "en",
            });
            router.reload();
          }}
        >
          {trans("change_app_language")}
        </Button>
      </Box>

      <SimpleGrid columns={3} spacing={5}>
        {data.map((value: any, index: number) => {
          const {
            image_url,
            title_en,
            title_ar,
            price,
            currency_en,
            currency_ar,
          } = value;
          const currency = locale === "ar" ? currency_ar : currency_en;
          const title = locale === "ar" ? title_ar : title_en;
          return (
            <BaseCard key={index}>
              <img src={image_url} />
              <Text fontSize="xl">{title}</Text>
              <Text fontSize="xl">
                {currency} {price}
              </Text>
            </BaseCard>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default function Home() {
  return (
    <Box
      borderWidth={1}
      padding={10}
      m={"auto"}
      mt={10}
      bg={"gray.50"}
      maxW={"1375px"}
    >
      <Items />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale } = ctx;
  const dir = path.join(process.cwd(), "public", "static");
  const filePath = `${dir}/${locale}.json`;
  const buffer = fs.readFileSync(filePath);
  const content = JSON.parse(buffer.toString());
  return {
    props: {
      content,
    },
  };
};
