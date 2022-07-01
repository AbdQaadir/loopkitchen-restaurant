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

const INITIAL_VALUES = {
  username: "",
  password: "",
};
type TSignin = {
  handleLogin: (username: string) => void;
};
const Signin = ({ handleLogin }: TSignin) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(INITIAL_VALUES);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const isFormValid =
    Object.values(formValues).filter((item) => item).length > 1;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setError(null);
    setLoading(true);

    fetch(
      "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view",
      {
        headers: {
          Authorization: "Bearer keyfXgn8PL6pB3x32",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const isAccountFound = data?.records?.find(
          (record: any) =>
            record.fields.username === formValues["username"] &&
            record.fields.password === formValues["password"]
        );

        isAccountFound
          ? handleLogin(formValues["username"])
          : setError("Incorrect login credentials!");
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <Flex justifyContent="center" alignItems="center" w="100%" h="100%">
      <Box
        w="80%"
        maxW="450px"
        minH="300px"
        py={6}
        px={4}
        border="1px solid"
        borderColor="gray.200"
        borderRadius={3}
      >
        <Heading fontSize="1.25rem" my={2}>
          Login{" "}
        </Heading>
        <FormControl mt={4}>
          <FormLabel htmlFor="username">Username / Email address</FormLabel>
          <Input
            id="username"
            type="text"
            name="username"
            placeholder="username"
            value={formValues["username"]}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input
              id="password"
              type={isPasswordShown ? "text" : "password"}
              name="password"
              placeholder="password"
              value={formValues["password"]}
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => setIsPasswordShown((prev) => !prev)}
              >
                {isPasswordShown ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl my={3} isInvalid={!!error}>
          {error ? <FormErrorMessage>{error}</FormErrorMessage> : <></>}
        </FormControl>

        <Button
          colorScheme="orange"
          isLoading={loading}
          isDisabled={!isFormValid}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Flex>
  );
};

export default Signin;
