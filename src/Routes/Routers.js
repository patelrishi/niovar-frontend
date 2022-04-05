import { Box } from "@mui/material";
import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SIdeNavMenuMain from "../components/navbar/SIdeNavMenuMain";

const DashboardContainer = lazy(() =>
  import("../containers/DashboardContainer")
);
const Routers = () => {
  return (
    <Suspense fallback={"Loading"}>
      <Box sx={{ display: "flex" }}>
        <SIdeNavMenuMain />
        <Box component="main" sx={{ flexGrow: 1, overflow: "hidden" }}>
          <Router>
            <Routes>
              {/* public routes */}
              <Route exact path="" element={<DashboardContainer />} />
              {/* keet that last--- error 404 */}
              <Route path="*" exact element={"notfound"} status={404} />
            </Routes>
          </Router>
        </Box>
      </Box>
    </Suspense>
  );
};

export default Routers;
