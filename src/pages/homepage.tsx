import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [restaurant, setRestaurant] = useState("");

  const { status, data, error } = useFetch("restaurants");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRestaurant(e.target.value);

  const handleSubmit = () => {
    console.log("object");
  };

  console.log({ status, data, error });
  return (
    <Box w="100%" h="100%">
      <Box w="80%" maxW="580px">
        <FormControl mt={4}>
          {/* <FormLabel htmlFor="restaurant">Password</FormLabel> */}
          <InputGroup>
            <Input
              id="restaurant"
              type="password"
              name="restaurant"
              placeholder="Search Restaurant name"
              value={restaurant}
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button
                colorScheme="orange"
                isLoading={loading}
                // isDisabled={!isFormValid}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        {/* <FormControl my={3} isInvalid={!!error}>
          {error ? <FormErrorMessage>{error}</FormErrorMessage> : <></>}
        </FormControl> */}
      </Box>
    </Box>
  );
};

export default Homepage;
