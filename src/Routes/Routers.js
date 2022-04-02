import React, { useEffect, useState } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SIdeNavMenuMain from "../components/navbar/SIdeNavMenuMain";

const Routers = () => {
  return (
    <div>
      <Suspense fallback={"Loading"}>
        <SIdeNavMenuMain />
        <Router>
          <Routes>
            {/* public routes */}
            <Route exact path="" element={"dashboard"} />
            {/* keet that last--- error 404 */}
            <Route path="*" exact element={"notfound"} status={404} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default Routers;
