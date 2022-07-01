import { useState } from "react";
import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState("");
  const handleLogin = (username: string) => {
    setIsSignedIn(true);
    setUser(username);
  };
  return (
    <ChakraProvider>
      <Box w="100%" h="100vh">
        {isSignedIn ? (
          <Dashboard user={user} />
        ) : (
          <Signin handleLogin={handleLogin} />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
