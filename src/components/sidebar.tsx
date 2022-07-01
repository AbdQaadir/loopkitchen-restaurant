import {
  Avatar,
  Badge,
  Text,
  Box,
  Flex,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

function Sidebar({
  user,
  currentView,
  handleChangeView,
}: {
  user: string;
  currentView: string;
  handleChangeView: (view: string) => void;
}) {
  return (
    <Box
      w="100%"
      h="100%"
      borderRight="1px solid"
      borderColor="gray.200"
      py={4}
    >
      <Flex h="10%" w="100%" py={4} px={3}>
        <Avatar icon={<FaUserCircle fontSize="1.5rem" />} />
        <Box ml="3">
          <Text fontWeight="bold">{user}</Text>

          <Text fontSize="sm">
            <Badge ml="0" colorScheme="green">
              Admin
            </Badge>
          </Text>
        </Box>
      </Flex>
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
