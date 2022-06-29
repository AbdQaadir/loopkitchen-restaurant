import { Box, List, ListItem } from "@chakra-ui/react";
import React from "react";

function Sidebar({
  handleChangeView,
}: {
  handleChangeView: (view: string) => void;
}) {
  return (
    <Box w="full" h="full" borderRight="1px solid" borderColor="gray.100" p={4}>
      <List>
        <ListItem
          onClick={() => handleChangeView("homepage")}
          my={3}
          fontSize="1em"
          cursor="pointer"
        >
          Homepage
        </ListItem>
        <ListItem
          onClick={() => handleChangeView("bookmarked")}
          my={3}
          fontSize="1em"
          cursor="pointer"
        >
          Bookmarked
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
