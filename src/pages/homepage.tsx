import { Box, Button, Flex, FormControl } from "@chakra-ui/react";
import React, { useState } from "react";

import AutocompleteInput from "../components/autocomplete-input";
import RestaurantItem from "../components/restaurant-item";

import { TRestaurant } from "./dashboard";

type TProps = {
  handleBookmark: (value: string) => void;
  handleSelect: (value: string) => void;
  handleRemove: (value: string) => void;
  restaurants: any;
  selectedRestaurants: TRestaurant[];
};
const Homepage = ({
  handleBookmark,
  handleSelect,
  handleRemove,
  restaurants,
  selectedRestaurants,
}: TProps) => {
  const [restaurant, setRestaurant] = useState("");

  const handleChange = (value: string) => setRestaurant(value);

  // const getAutocompleteValue = () => {
  //   switch (status) {
  //     case "fetching":
  //       return "Fetching available restaurants....";
  //     case "failed":
  //       return error || "Unable to fetch available restaurants.";
  //     case "success":
  //       return restaurant;
  //     default:
  //       return restaurant;
  //   }
  // };

  const availableOptions =
    restaurants?.length > 0
      ? restaurants
          ?.filter((item: any) => {
            const isExist = selectedRestaurants.find(
              (res) => res.value === item?.fields["Name"]
            );

            return !isExist;
          })
          ?.map((item: any) => ({
            label: item?.fields["Name"],
            value: item?.id,
          }))
      : [];
  return (
    <Box w="100%" h="100%">
      <Box
        h="10%"
        w="100%"
        pb={4}
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Box w="80%" maxW="580px" px={4}>
          <FormControl mt={4} w="100%">
            <Flex>
              <AutocompleteInput
                value={restaurant}
                // handleSelect={handleSelect}
                handleChange={handleChange}
                options={availableOptions}
              />

              <Button
                colorScheme="messenger"
                type="button"
                width="5.5rem"
                onClick={() => {
                  const isExist = availableOptions.find(
                    (item: any) => item.label === restaurant
                  );

                  isExist && handleSelect(restaurant);

                  // Reset input field value
                  setRestaurant("");
                }}
              >
                Add
              </Button>
            </Flex>
          </FormControl>
        </Box>
      </Box>

      <Flex
        pt={10}
        h="90%"
        w="100%"
        flexWrap="wrap"
        gap={4}
        overflowY="scroll"
        px={4}
      >
        {selectedRestaurants?.map((item: TRestaurant) => (
          <RestaurantItem
            key={item.value}
            restaurant={item.value}
            isBookmarked={false}
            handleBookmark={handleBookmark}
            handleRemove={handleRemove}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Homepage;
