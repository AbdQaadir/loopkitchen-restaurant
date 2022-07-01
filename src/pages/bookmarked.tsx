import { Box, Flex, Text } from "@chakra-ui/react";
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
    <Flex w="100%" h="100%" px={4}>
      {bookmarkedRestaurants?.length > 0 ? (
        bookmarkedRestaurants?.map((restaurant) => (
          <RestaurantItem
            isBookmarked
            restaurant={restaurant.value}
            handleBookmark={handleBookmark}
            handleRemove={handleRemove}
          />
        ))
      ) : (
        <Flex justifyContent="center" w="100%" h="100%" py="10rem">
          <Box textAlign="center">
            <WarningIcon w={12} h={12} my={2} color="red.500" />
            <Text>No Restaurant Bookmarked yet.</Text>
          </Box>
        </Flex>
      )}
    </Flex>
  );
};

export default Bookmarked;
