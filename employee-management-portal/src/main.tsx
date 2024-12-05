import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import routeConstants from "./utils/constants.ts";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={routeConstants.ROUTE_HOME} element={<Home />} />
          <Route path={routeConstants.ROUTE_ABOUT} element={<About />} />
          <Route path={routeConstants.ROUTE_CONTACT} element={<Contact />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
