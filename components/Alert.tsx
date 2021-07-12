import { styled } from "stitches.config";

export default styled("p", {
  padding: "16px",
  backgroundColor: "gainsboro",
  borderRadius: "8px",
  fontWeight: "bold",
  width: "fit-content",
  textAlign: "center",
  variants: {
    style: {
      danger: {
        backgroundColor: "tomato",
        color: "white",
      },
    },
  },
});
