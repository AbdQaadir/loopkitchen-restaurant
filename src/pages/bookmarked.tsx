import { Flex } from "@chakra-ui/react";
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
    <Flex w="100%" h="100%">
      {bookmarkedRestaurants?.map((restaurant) => (
        <RestaurantItem
          isBookmarked
          restaurant={restaurant.value}
          handleBookmark={handleBookmark}
          handleRemove={handleRemove}
        />
      ))}
    </Flex>
  );
};

export default Bookmarked;
