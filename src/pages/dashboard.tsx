import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Bookmarked from "./bookmarked";
import Homepage from "./homepage";

const Dashboard = () => {
  const [currentView, setCurrentView] = useState("homepage");

  const handleChangeView = (view: string) => setCurrentView(view);
  const renderBasedOnView = () => {
    switch (currentView) {
      case "homepage":
        return <Homepage />;
      case "bookmarked":
        return <Bookmarked />;
    }
  };
  return (
    <Flex w="100%" h="100%">
      <Box flex={1}>
        <Sidebar handleChangeView={handleChangeView} />
      </Box>
      <Box flex={7} p={4}>
        {renderBasedOnView()}
      </Box>
    </Flex>
  );
};

export default Dashboard;
