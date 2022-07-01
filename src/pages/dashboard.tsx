import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import Sidebar from "../components/sidebar";
import useFetch from "../hooks/useFetch";
import Bookmarked from "./bookmarked";
import Homepage from "./homepage";

export type TRestaurant = {
  value: string;
  isBookmarked: boolean;
};

type TProps = {
  user: string;
  handleLogout: () => void;
};

type TDashboardContext = {
  handleBookmark: (value: string) => void;
  handleSelect: (value: string) => void;
  handleRemove: (value: string) => void;
  restaurants: any;
};

export const DashboardContext = createContext({} as TDashboardContext);
const Dashboard = ({ user, handleLogout }: TProps) => {
  const [currentView, setCurrentView] = useState("homepage");
  const { data: restaurants }: any = useFetch("restaurants", 5);

  const [selectedRestaurants, setSelectedRestaurants] = useState<TRestaurant[]>(
    JSON.parse(
      localStorage.getItem(`${user.toUpperCase()}_RESTAURANTS`) || "[]"
    )
  );

  const handleChangeView = (view: string) => setCurrentView(view);

  const handleSelect = (value: string) => {
    setSelectedRestaurants((prev) => [...prev, { value, isBookmarked: false }]);
  };

  const handleRemove = (value: string) => {
    setSelectedRestaurants((prev) =>
      prev.filter((item) => item.value !== value)
    );
  };

  const handleBookmark = (value: string) => {
    setSelectedRestaurants((prev) =>
      prev.map((item) =>
        item.value === value
          ? { ...item, isBookmarked: !item.isBookmarked }
          : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem(
      `${user.toUpperCase()}_RESTAURANTS`,
      JSON.stringify(selectedRestaurants)
    );
  }, [user, selectedRestaurants]);
  const renderBasedOnView = () => {
    switch (currentView) {
      case "homepage":
        return <Homepage selectedRestaurants={selectedRestaurants} />;
      case "bookmarked":
        return (
          <Bookmarked
            bookmarkedRestaurants={selectedRestaurants.filter(
              (item) => item.isBookmarked
            )}
          />
        );
    }
  };
  return (
    <Flex w="100%" h="100%">
      <Box flex={1}>
        <Sidebar
          user={user}
          currentView={currentView}
          handleLogout={handleLogout}
          handleChangeView={handleChangeView}
        />
      </Box>
      <Box flex={7} py={4}>
        <DashboardContext.Provider
          value={{
            restaurants,
            handleRemove,
            handleSelect,
            handleBookmark,
          }}
        >
          {renderBasedOnView()}
        </DashboardContext.Provider>
      </Box>
    </Flex>
  );
};

export default Dashboard;
