import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import NoteAltRoundedIcon from "@mui/icons-material/NoteAltRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AddchartRoundedIcon from "@mui/icons-material/AddchartRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const useStyles = makeStyles((theme) => ({
  drawerRoot: {
    "&>div": {
      background: "#423f88",
      "&>ul": {
        "&>div": {
          color: "#ffffff",
          "&>div": {
            "&>svg": {
              color: "#ffffff",
            },
          },
        },
      },
    },
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
              color: "#fff",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} className={classes.drawerRoot}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{ color: "#fff" }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <MailIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
      Work Schedule
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <EmailIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
            Messaging
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ForumRoundedIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
              Chat
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <NoteAltRoundedIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
              Publications
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <GroupsRoundedIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
              Employees
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <PersonRoundedIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
              My Profile
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <AddchartRoundedIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
              Reports
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <SettingsSuggestRoundedIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
            Settings
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <AccountBalanceRoundedIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
              Pay Stub
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <StorageRoundedIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
            Relevé d’emploi
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <StorageRoundedIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
            Tax Form
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <LinkRoundedIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
              Payroll Processing
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <InsertDriveFileRoundedIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
              My Service Offers
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <InsertDriveFileRoundedIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
              My Bills
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <PaymentRoundedIcon />

            <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "5px" }}>
              Payments
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
