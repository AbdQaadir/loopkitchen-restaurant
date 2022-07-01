import {
  Box,
  Button,
  FormControl,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";

import AutocompleteInput from "../components/autocomplete-input";
import RestaurantItem from "../components/restaurant-item";
import useFetch from "../hooks/useFetch";
import { TRestaurant } from "./dashboard";

type TProps = {
  handleBookmark: (value: string) => void;
  handleSelect: (value: string) => void;
  handleRemove: (value: string) => void;
  selectedRestaurants: TRestaurant[];
};
const Homepage = ({
  handleBookmark,
  handleSelect,
  handleRemove,
  selectedRestaurants,
}: TProps) => {
  const [restaurant, setRestaurant] = useState("");

  const { data: restaurants, error, status }: any = useFetch("restaurants");

  const handleChange = (value: string) => setRestaurant(value);

  const handleSubmit = () => {
    console.log("object");
  };

  console.log({ status, restaurants, error });

  const getAutocompleteValue = () => {
    switch (status) {
      case "fetching":
        return "Fetching available restaurants....";
      case "failed":
        return error || "Unable to fetch available restaurants.";
      case "success":
        return restaurant;
      default:
        return restaurant;
    }
  };

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
      <Box h="10%" w="80%" maxW="580px">
        <FormControl mt={4} w="100%">
          <InputGroup>
            <AutocompleteInput
              value={getAutocompleteValue()}
              handleSelect={handleSelect}
              handleChange={handleChange}
              options={availableOptions}
            />
            <InputRightElement width="4.5rem">
              <Button
                colorScheme="orange"
                // isDisabled={!isFormValid}
                onClick={handleSubmit}
              >
                Add
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Box>

      <Box pt={10} h="90%" overflowY="scroll">
        {selectedRestaurants?.map((item: TRestaurant) => (
          <RestaurantItem
            key={item.value}
            restaurant={item.value}
            isBookmarked={false}
            handleBookmark={handleBookmark}
            handleRemove={handleRemove}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Homepage;
