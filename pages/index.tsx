import React from "react";
import { Box, Text, Container } from "@chakra-ui/react";

type CardPropType = {
  children: React.ReactNode;
};

const BaseCard = (props: CardPropType) => {
  const { children } = props;
  return (
    <Box
      borderWidth={1}
      maxW={400}
      paddingY={"10px"}
      paddingX={"10px"}
      my={"10px"}
    >
      {children}
    </Box>
  );
};

export default function Home() {
  return (
    <Container>
      <BaseCard>
        <img
          src={
            "https://cdn.shopify.com/s/files/1/0476/7986/4988/collections/3b6a545a8f309a6085625bcadcb19712.jpg?v=1599747246"
          }
        />
        <Text fontSize="xl">VANS</Text>
      </BaseCard>
    </Container>
  );
}
