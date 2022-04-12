import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Avatar, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { H6 } from "../../common/typography/Header";
import ResponsiveDialog from "../dialog/ResponsiveDialog";
import LocalPrintshopRoundedIcon from "@mui/icons-material/LocalPrintshopRounded";
import ResponsiveDialogSecond from "../SecondDialog/ResponsiveDialogSecond";
// import Tabledialog from "../../table/Tabledialog"
// import ResponsiveDialog from "../../table/ResponsiveDialog"
const useStyles = makeStyles((theme) => ({
  tabelroot: {
    "&>div": {
      "&>table": {
        "&>thead": {
          "&>tr": {
            "&>th": {
              background: "#2db4e4",
              border: "1px solid #fff",
              color: "#FFFFFF",
              "&:nth-child(1)": {
                background: "#423f88",
              },
              "&:nth-child(9)": {
                background: "#423f88",
              },
            },
          },
        },
        "&>tbody": {
          "&>tr": {
            " &:nth-child(odd)": {
              background: "#ececec",
            },
            "&:nth-child(even)": {
              background: "#fff",
            },
            "&>td": {
              width: 180,
              "&:nth-child(1)": {
                border: "1px solid #fff",
                background: "#e7e5f7!important",
              },
            },
          },
        },
      },
    },
  },
  userTableProfile: {
    height: 176,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&>h6": {
      textAlign: "center",
    },
    "&>div": {
      height: 60,
      width: 60,
      marginBottom: 8,
    },
  },
  buttonGroup: {
    display: "flex",
    "&>div": {
      "&:nth-child(1)": {
        marginRight: "10px",
        "&>button": {
          backgroundColor: "#f39c12",

          "&:nth-child(1)": {
            backgroundColor: "#f39c12",
          },
        },
      },
      "&:nth-child(2)": {
        "&>button": {
          width: "38px",
          "&:nth-child(1)": {
            backgroundColor: "#dd4b39",
          },
        },
      },
      "&>button": {
        backgroundColor: "#f39c12",
        borderRadius: "3px",
        width: "38px",
      },
    },
  },
}));

const columns = [
  {
    id: "EMPLOYÉS   ( 143 )",
    label: "EMPLOYÉS   ( 143 )",
    minWidth: 50,
    background: "#423f88",
  },
  { id: "SUN 03 APR", label: "SUN 03 APR", minWidth: 100 },
  {
    id: "MON 04 APR",
    label: "MON 04 APR",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "TUE 05 APR",
    label: "TUE 05 APR",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "WED 06 APR",
    label: "WED 06 APR",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "THU 07 APR",
    label: "THU 07 APR",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "FRI 08 APR",
    label: "FRI 08 APR",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "SAT 09 APR",
    label: "SAT 09 APR",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "TOTAL",
    label: "TOTAL",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  console.log(
    name,
    code,
    population,
    size,
    "================================>"
  );
  // const density = population / size;
  return { name, code, population, size };
}

const UserTableProfile = ({ name = "" }) => {
  const classes = useStyles();
  return (
    <div className={classes.userTableProfile}>
      <Avatar />
      <H6>{name}</H6>
    </div>
  );
};

const UserButtonGroup = ({ name = "" }) => {
  const classes = useStyles();
  return (
    <div className={classes.buttonGroup}>
      <ResponsiveDialog />
      <ResponsiveDialogSecond />
    </div>
  );
};

export default function StickyHeadTable() {
  const classes = useStyles();
  const rows = [
    createData(
      <UserTableProfile name="Koré Germaine Groguh.." />,
      <UserButtonGroup />
    ),
    createData(
      <UserTableProfile name="Koré Germaine Groguh.." />,
      <UserButtonGroup />
    ),
    createData(
      <UserTableProfile name="Koré Germaine Groguh.." />,
      <UserButtonGroup />
    ),
    createData(
      <UserTableProfile name="Koré Germaine Groguh.." />,
      <UserButtonGroup />
    ),
    createData(
      <UserTableProfile name="Koré Germaine Groguh.." />,
      <UserButtonGroup />
    ),
    createData(
      <UserTableProfile name="Koré Germaine Groguh.." />,
      <UserButtonGroup />
    ),
    createData(
      <UserTableProfile name="Koré Germaine Groguh.." />,
      <UserButtonGroup />
    ),
    createData(
      <UserTableProfile name="Koré Germaine Groguh.." />,
      <UserButtonGroup />
    ),
    createData(
      <UserTableProfile name="Koré Germaine Groguh.." />,
      <UserButtonGroup />
    ),
    createData(
      <UserTableProfile name="Koré Germaine Groguh.." />,
      <UserButtonGroup />
    ),
  ];
  return (
    <Grid className={classes.tabelroot}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                  align="center"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  <TableCell key={i} align="center">
                    {row.name}
                  </TableCell>
                  <TableCell key={i} align="center">
                    {row.code}
                  </TableCell>
                  <TableCell key={i} align="center">
                    {row.code}
                  </TableCell>
                  <TableCell key={i} align="center">
                    {row.code}
                  </TableCell>
                  <TableCell key={i} align="center">
                    {row.code}
                  </TableCell>
                  <TableCell key={i} align="center">
                    {row.code}
                  </TableCell>
                  <TableCell key={i} align="center">
                    {row.code}
                  </TableCell>
                  <TableCell key={i} align="center">
                    {row.code}
                  </TableCell>
                  <TableCell key={i} align="center">
                    {/* {row.code} */}
                    <Button
                      style={{
                        background: "#00a65a",
                        width: "100%",
                        marginBottom: 8,
                      }}
                      variant="contained"
                    >
                      publié{" "}
                    </Button>
                    <Button
                      style={{ background: "#00a65a", width: "100%" }}
                      variant="contained"
                      startIcon={<LocalPrintshopRoundedIcon />}
                    >
                      PDF
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
