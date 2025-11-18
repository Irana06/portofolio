import { createBrowserRouter } from "react-router";
import App from "../App";
import CVComponent from "../pages/curriculum_vitae";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "cv",
    Component: CVComponent,
  },
]);
