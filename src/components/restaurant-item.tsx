import { AspectRatio, Box, Button, Flex, Heading } from "@chakra-ui/react";
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
      borderRadius={2}
      w="50%"
      maxW="600px"
      h="350px"
      bg="gray.100"
      border="1px solid"
      borderColor="gray.700"
      padding={3}
    >
      <Heading fontSize="1.125rem" my={2}>
        {restaurant}
      </Heading>
      <AspectRatio maxW="560px" h="70%" ratio={1}>
        <iframe
          title="naruto"
          src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B%22ds2.name2%22:%22${restaurant}%22%7D`}
        ></iframe>
      </AspectRatio>
      <Flex gap={3} mt={3}>
        <Button
          colorScheme={isBookmarked ? "blackAlpha" : "messenger"}
          onClick={() => handleBookmark(restaurant)}
        >
          {!isBookmarked ? "Bookmark" : "Unbookmark"}
        </Button>
        <Button colorScheme="red" onClick={() => handleRemove(restaurant)}>
          Remove
        </Button>
      </Flex>
    </Box>
  );
}

export default RestaurantItem;
