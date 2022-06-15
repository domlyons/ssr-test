import App from "./app";
import { hydrateRoot } from "react-dom/client";

hydrateRoot(document.querySelector("#newRoot"), <App />);
