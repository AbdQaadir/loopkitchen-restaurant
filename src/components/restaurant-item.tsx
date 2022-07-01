import { AspectRatio, Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

type TProps = {
  restaurant: string;
  isBookmarked: boolean;
  handleBookmark: (value: string) => void;
  handleRemove: (value: string) => void;
};
function RestaurantItem({
  isBookmarked,
  restaurant,
  handleBookmark,
  handleRemove,
}: TProps) {
  return (
    <Box
      w="80%"
      maxW="600px"
      h="350px"
      bg="gray.300"
      border="1px solid"
      borderColor="gray.700"
      padding={3}
    >
      <AspectRatio maxW="560px" h="80%" ratio={1}>
        <iframe
          title="naruto"
          src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B%22ds2.name2%22:%22${restaurant}%22%7D`}
        ></iframe>
      </AspectRatio>
      <Flex gap={3} mt={3}>
        <Button onClick={() => handleBookmark(restaurant)}>
          {!isBookmarked ? "Bookmark" : "Unbookmark"}
        </Button>
        <Button onClick={() => handleRemove(restaurant)}>Remove</Button>
      </Flex>
    </Box>
  );
}

export default RestaurantItem;
