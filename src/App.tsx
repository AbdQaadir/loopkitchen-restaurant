import { useState } from "react";
import "./App.css";
import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import Signin from "./pages/signin";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const handleLogin = () => setIsSignedIn(true);
  return (
    <ChakraProvider>
      <Box w="100%" h="100vh">
        {isSignedIn ? (
          <Text>Logged In</Text>
        ) : (
          <Signin handleLogin={handleLogin} />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
