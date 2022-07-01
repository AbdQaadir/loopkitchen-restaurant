import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import React from "react";
import RestaurantItem from "../components/restaurant-item";
import { TRestaurant } from "./dashboard";

type TProps = {
  handleRemove: (value: string) => void;
  handleBookmark: (value: string) => void;
  bookmarkedRestaurants: TRestaurant[];
};
const Bookmarked = ({
  bookmarkedRestaurants,
  handleRemove,
  handleBookmark,
}: TProps) => {
  return (
    <Box w="100%" h="100%" px={2}>
      <Box pt={10} px={4} mb={3}>
        <Heading fontSize="1.25rem">Bookmarked Restaurants</Heading>
      </Box>
      {bookmarkedRestaurants?.length > 0 ? (
        <Flex
          h="90%"
          w="100%"
          flexWrap="wrap"
          gap={4}
          overflowY="scroll"
          px={4}
        >
          {bookmarkedRestaurants?.map((restaurant) => (
            <RestaurantItem
              isBookmarked
              restaurant={restaurant.value}
              handleBookmark={handleBookmark}
              handleRemove={handleRemove}
            />
          ))}
        </Flex>
      ) : (
        <Flex justifyContent="center" w="100%" h="100%" py="10rem">
          <Box textAlign="center">
            <WarningIcon w={12} h={12} my={2} color="red.500" />
            <Text>No Restaurant Bookmarked yet.</Text>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Bookmarked;
