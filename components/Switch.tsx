import { styled } from "../stitches.config";
import * as Switch from "@radix-ui/react-switch";

const StyledSwitch = styled(Switch.Root, {
  width: "$8",
  borderRadius: "$full",
  borderColor: "$slate3",
  borderStyle: "solid",
  borderWidth: "1px",
  background: "$slate4",
  display: "inline-flex",
  overflow: "visible",
  justifyContent: "flex-start",
  padding: 2,
  "&[data-state='checked']": {
    backgroundColor: "$blue9",
    justifyContent: "flex-end",
  },
});

const StyledThumb = styled(Switch.Thumb, {
  height: "$6",
  width: "$6",
  backgroundColor: "$slate1",
  borderRadius: "$full",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
});

export default () => (
  <StyledSwitch>
    <StyledThumb />
  </StyledSwitch>
);
