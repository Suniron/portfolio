import { styled } from "stitches.config";

export interface IStep {
  beginDate: string;
  endDate?: string;
  compagny: string;
  activity: string;
  missions: string[];
}

export const StepElement = styled("li", {
  display: "block",
  padding: "$3",
  margin: "$2",
  borderRadius: "12px",
  backgroundColor: "gainsboro",
  width: "fit-content",
  boxShadow: "0px 3px 10px grey",
});

export const StepInfo = styled("p", {
  variants: {
    style: {
      title: { fontWeight: "bold", fontSize: 22 },
      subtitle: { fontSize: 20 },
      little: { fontSize: 14 },
      info: { fontStyle: "italic" },
    },
  },
});

export const StepsList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "$2",
});
