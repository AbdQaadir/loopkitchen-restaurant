import { Box, List, ListItem } from "@chakra-ui/react";
import React from "react";

function Sidebar({
  currentView,
  handleChangeView,
}: {
  currentView: string;
  handleChangeView: (view: string) => void;
}) {
  return (
    <Box
      w="full"
      h="full"
      borderRight="1px solid"
      borderColor="gray.200"
      py={4}
    >
      <List mt={5}>
        <ListItem
          px={3}
          py={3}
          onClick={() => handleChangeView("homepage")}
          mb={2}
          fontSize="1em"
          cursor="pointer"
          bg={currentView === "homepage" ? "gray.100" : "transparent"}
          color={currentView === "homepage" ? "blue.700" : "inherit"}
        >
          Homepage
        </ListItem>
        <ListItem
          px={3}
          py={3}
          onClick={() => handleChangeView("bookmarked")}
          fontSize="1em"
          cursor="pointer"
          bg={currentView === "bookmarked" ? "gray.100" : "transparent"}
          color={currentView === "bookmarked" ? "blue.700" : "inherit"}
        >
          Bookmarked
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
