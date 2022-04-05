import { makeStyles } from "@mui/styles";
import React from "react";
import DashboardMain from "../components/dashboard/DashboardMain";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 75,
    // maxWidth:"1220px"
  },
}));

const DashboardContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DashboardMain />
    </div>
  );
};

export default DashboardContainer;
