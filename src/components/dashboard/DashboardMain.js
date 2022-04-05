import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { H2, H3, H4, H6 } from "../common/typography/Header";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import StickyHeadTable from "../common/table/StickyHeadTable";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CardActionArea } from "@mui/material";
import { fontSize, padding, textAlign } from "@mui/system";
import BasicTable from "../common/table/StickyHeadTable";
import MultipleSelect from "../common/select/MultipleSelect";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
const DashboardMain = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const useStyles = makeStyles((theme) => ({
    textFieldRoot: {
      margin: 0,
      backgroundColor: "#ffffff",
      padding: 16,
    },
    changeDate: {
      margin: "0",
      padding: "0",
    },
    overlay1: {
      backgroundImage: `url("https://test.niovar.ca/bundles/LpaCdt/dist/img/overlay.jpg")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "140px",
      backgroundPosition: "center",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      padding: "25px 15px 30px 15px",
      textAlign: "center",
    },
    select: {
      marginBottom: "11px",
    },
    button: {
      textAlign: "center",

      "&>button": {
        backgroundColor: "#f4f4f4",
        marginBottom: "11px",
        color: "#444",
        borderRadius: "3px",
        boxShadow: "none",
        padding: "6px 12px",
        fontSize: "14px",
        fontWeight: "400",
        border: "1px solid transparent",
        textAlign: "center",
        "&>svg": {
          // fontSize:"5px",
          marginRight: "5px",
        },
      },
    },
    forwardDate: {
      display: "flex",
      justifyContent: "center",
    },
    card: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    icon: {
      position: "absolute",
      top: 10,
      right: "20px",
      zIndex: "0",
    },
    more: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "cneter",
      backgroundColor: "rgba(0, 0, 0, 0.15)",
      color: "#fff",
      padding: "3px 0",
      fontSize: "15px",
      "&>span": {
        marginRight: "5px",
      },
    },
    cardGroup: {
      marginTop: 4,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <section>
        <H2>Répartition des horaires</H2>
      </section>

      <section>
        <Box className={classes.textFieldRoot}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <H6>Lister les employés par</H6>
            <Button>+</Button>
          </Box>
          <section>
            <Box className={classes.changeDate}>
              <Box className={classes.overlay1}>
                <Box className={classes.select}>
                  <MultipleSelect />
                </Box>

                <Box className={classes.button}>
                  <Button variant="outlined">
                    <CalendarMonthIcon />
                    Current Week
                  </Button>
                </Box>

                <Box className={classes.forwardDate}>
                  <ArrowCircleLeftIcon
                    style={{
                      color: "#dde6d9",
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#fff",
                      margin: "0 8px 0 8px",
                    }}
                  >
                    10-04-2022 / 16-04-2022
                  </span>
                  <ArrowCircleRightIcon
                    style={{
                      color: "#dde6d9",
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <StickyHeadTable />
              </Box>
            </Box>
          </section>
          <Grid container spacing={1} className={classes.cardGroup}>
            <Grid item lg={3} md={6} xs={12}>
              <Card
                sx={{
                  backgroundColor: "#f39c12",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              >
                <CardActionArea sx={{ padding: "20px" }}>
                  <CardMedia height="140" alt="green iguana" />

                  <H3>$801</H3>
                  <H6>Estimate</H6>
                  <H6>Gross Salary to be paid</H6>
                  <Box className={classes.icon}>
                    <AccessTimeIcon
                      sx={{ fontSize: "70px", color: "rgba(0, 0, 0, 0.15)" }}
                    />
                  </Box>
                </CardActionArea>
                <Box className={classes.more}>
                  <span>Read more</span>
                  <AddCircleIcon />
                </Box>
              </Card>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Card
                sx={{
                  backgroundColor: "#00a65a",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              >
                <CardActionArea sx={{ padding: "20px" }}>
                  <CardMedia height="140" alt="green iguana" />

                  <H3>$0</H3>
                  <H6>Estimate</H6>
                  <H6>Net salary payable</H6>
                  <Box className={classes.icon}>
                    <AccessTimeIcon
                      sx={{ fontSize: "70px", color: "rgba(0, 0, 0, 0.15)" }}
                    />
                  </Box>
                </CardActionArea>
                <Box className={classes.more}>
                  <span>Read more</span>
                  <AddCircleIcon />
                </Box>
              </Card>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Card
                sx={{
                  backgroundColor: "#dd4b39",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              >
                <CardActionArea sx={{ padding: "20px" }}>
                  <CardMedia height="140" alt="green iguana" />

                  <H3>2</H3>
                  <H6>Active</H6>
                  <H6>Employee</H6>
                  <Box className={classes.icon}>
                    <AccessTimeIcon
                      sx={{ fontSize: "70px", color: "rgba(0, 0, 0, 0.15)" }}
                    />
                  </Box>
                </CardActionArea>
                <Box className={classes.more}>
                  <span>Read more</span>
                  <AddCircleIcon />
                </Box>
              </Card>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Card
                sx={{
                  backgroundColor: "#605ca8 ",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              >
                <CardActionArea sx={{ padding: "20px" }}>
                  <CardMedia height="140" alt="green iguana" />

                  <H3>141</H3>
                  <H6>Employees</H6>
                  <H6>Without Hours</H6>
                  <Box className={classes.icon}>
                    <AccessTimeIcon
                      sx={{ fontSize: "70px", color: "rgba(0, 0, 0, 0.15)" }}
                    />
                  </Box>
                </CardActionArea>
                <Box className={classes.more}>
                  <span>Read more</span>
                  <AddCircleIcon />
                </Box>
              </Card>
            </Grid>
          </Grid>
          <Box style={{textAlign:"center",marginTop:26}}>
         <Button variant="contained">Print <LocalPrintshopRoundedIcon/></Button>
         <Button variant="contained" style={{backgroundColor:"#00c0ef",marginLeft:5}}>Downlod All Timetable</Button>
          </Box>
        </Box>
      </section>
    </div>
  );
};

export default DashboardMain;
