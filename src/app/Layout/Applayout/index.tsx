import { Box } from "@mui/material";
import React from "react";
import Header from "src/widgets/Header";

const Applayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box height="calc(100% - 64px)">{children}</Box>
    </>
  );
};

export default Applayout;
