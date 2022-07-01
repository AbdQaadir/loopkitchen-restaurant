import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../components/sidebar";
import Bookmarked from "./bookmarked";
import Homepage from "./homepage";

export type TRestaurant = {
  value: string;
  isBookmarked: boolean;
};

type TProps = {
  user: string;
};
const Dashboard = ({ user }: TProps) => {
  const [currentView, setCurrentView] = useState("homepage");

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
        return (
          <Homepage
            handleRemove={handleRemove}
            handleSelect={handleSelect}
            handleBookmark={handleBookmark}
            selectedRestaurants={selectedRestaurants.filter(
              (item) => !item.isBookmarked
            )}
          />
        );
      case "bookmarked":
        return (
          <Bookmarked
            handleRemove={handleRemove}
            handleBookmark={handleBookmark}
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
          currentView={currentView}
          handleChangeView={handleChangeView}
        />
      </Box>
      <Box flex={7} py={4}>
        {renderBasedOnView()}
      </Box>
    </Flex>
  );
};

export default Dashboard;
