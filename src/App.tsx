import { useState } from "react";
import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { CookiesProvider } from "react-cookie";

import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState("");
  const handleLogin = (username: string) => {
    setIsSignedIn(true);
    setUser(username);
  };
  const handleLogout = () => {
    setIsSignedIn(false);
    setUser("");
  };

  const theme = extendTheme({
    fonts: {
      heading: `'Montserrat', sans-serif`,
      body: `'Montserrat', sans-serif`,
    },
  });

  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <Box w="100%" h="100vh">
          {isSignedIn ? (
            <Dashboard user={user} handleLogout={handleLogout} />
          ) : (
            <Signin handleLogin={handleLogin} />
          )}
        </Box>
      </ChakraProvider>
    </CookiesProvider>
  );
}

export default App;
