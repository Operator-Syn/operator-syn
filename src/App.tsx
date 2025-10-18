import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import NavBar from "./components/navBar/NavBar";
import CookingArea from "./components/CookingArea";
import { navLinks as NavLinks, brandName } from "./data/NavLinks.types";

export default function App() {
  return (
    <Fragment>
      <NavBar brandName={brandName} links={NavLinks} />

      <Routes>
        {NavLinks.map((link) => (
          <Route
            key={link.path}
            path={link.path}
            element={
              <CookingArea>
                {link.component && <link.component />}
              </CookingArea>
            }
          />
        ))}
      </Routes>

    </Fragment>
  );
}
