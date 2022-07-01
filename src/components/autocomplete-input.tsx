import { Box } from "@chakra-ui/react";
import React from "react";
import Autocomplete from "react-autocomplete";

type TItem = { label: string; value: string };

type TProps = {
  options: TItem[];
  value: string;
  handleChange: (value: string) => void;
};

function AutocompleteInput({
  value,
  handleChange,

  options = [] as TItem[],
}: TProps) {
  return (
    <Autocomplete
      inputProps={{
        style: {
          width: "100%",
          minWidth: "0px",
          outline: "2px solid transparent",
          outlineOffset: "2px",
          position: "relative",
          fontSize: "var(--chakra-fontSizes-md)",
          paddingInlineStart: "var(--chakra-space-4)",
          paddingInlineEnd: "var(--chakra-space-10)",
          height: "var(--chakra-sizes-10)",
          borderRadius: "var(--chakra-radii-md)",
          border: "1px solid",
          borderTopColor: "currentcolor",
          borderRightColor: "currentcolor",
          borderBottomColor: "currentcolor",
          borderLeftColor: "currentcolor",
          borderColor: "inherit",
          background: "inherit",
        },
      }}
      wrapperStyle={{ width: "100%", zIndex: 9999 }}
      getItemValue={(item: TItem) => item.label}
      items={options}
      shouldItemRender={(item, value) =>
        item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
      }
      renderItem={(item: TItem, isHighlighted: boolean) => (
        <Box
          padding={2}
          color={isHighlighted ? "white" : "black"}
          key={item?.value}
          bg={isHighlighted ? "gray.500" : "white"}
        >
          {item.label}
        </Box>
      )}
      value={value}
      onChange={(e: React.ChangeEvent<any>) => handleChange(e.target.value)}
      onSelect={(val: string) => handleChange(val)}
    />
  );
}

export default AutocompleteInput;
