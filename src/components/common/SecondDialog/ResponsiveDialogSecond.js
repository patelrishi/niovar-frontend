import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import MobileDatePicker from "@mui/lab/MobileDatePicker";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import { styled } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { makeStyles } from "@mui/styles";
import { DialogTitle, Grid } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import EventIcon from "@mui/icons-material/Event";
import NotesIcon from "@mui/icons-material/Notes";
import SegmentIcon from "@mui/icons-material/Segment";
import HomeIcon from "@mui/icons-material/Home";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from '@mui/icons-material/Close';
import TableDialog from "./TableDialog";
import { Dateselect, MultipleSelectEmploye } from "../select/MultipleSelect";
const blue = {
  500: "#007FFF",
};

const grey = {
  400: "#BFC7CF",
  500: "#AAB4BE",
  600: "#6F7E8C",
};

const Root = styled("span")(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${theme.palette.mode === "dark" ? grey[600] : grey[400]};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 22px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `
);

const useStyles = makeStyles((theme) => ({
  root: {
    "&>div>div": {
      // background:"red"
      minWidth: "60% !important",
      maxWidth: "60%",
    },
  },

  popupRoot: {
    overflow: "hidden",
    "&>div>div>div": {
      // width: "100%",
      marginBottom: 8,
     
    },
  },
  textArea: {
    "&>div": {
      width: "100%",
      // marginTop: 10,
    },
    "&>label": {
      display: "flex",
      alignItems: "center",

      "&>svg": {
        marginRight: 5,
      },
    },
    "&>textarea": {
      width: "99% !important",
    },
  },
  datepicker: {
    marginTop: 8,
    "&>div>div": {
      width: "80%",
      marginTop: 8,
      marginBottom: "25px",
      
    },
  },
  timePicker: {
    "&>div": {
      width: "100%",
      borderRadius: 16,
      background: "#f5f5f5",
      "&>label": {
        display: "none",
      },
      "&>div": {
        "&>fieldset": {
          display: "none",
        },
      },
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginTop: 15,
   
    "&>svg": {
      marginRight: 5,
    },
  },
  date:{
    "&>div":{
      "&>div":{
        width:235,
      }
    }
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ResponsiveDialogSecond() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };
  const [personName, setPersonName] = React.useState([]);

  const handleChangedrop = (event) => {
    const { value } = event;
    setPersonName(value);
  };
  const [valued, setValued] = React.useState("0:00");

  const onChange = (event) => {
    setValued(event.target.value);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        <HomeIcon />
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className={classes.root}
      >
        <DialogContent className={classes.popupRoot}>
          <Grid container spacing={4}>

            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width: "100%",borderBottom:"1px solid  #cbcbcb" }}>
            <DialogTitle >
              {" "}
              Créer un congé pour marc leclerc du département Entretien
              d'édifice public-Entretien ménager
            </DialogTitle>
<CloseIcon onClick={handleClose} style={{cursor:"pointer"}}/>
            </div>
         
            <Grid item sm={6}>
              <Grid container spacing={2} className={classes.datepicker}>
                <Grid item sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      className={classes.icon}
                      style={{ fontWeight: "bold",
                      color: "black"}}
                    
                    >
                      <CalendarTodayIcon />
                      Date du début
                    </FormLabel>
                    <MobileDatePicker
                      // label="Date mobile"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField className="dateTXT" {...params} />}
                    />

                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      className={classes.icon}
                      style={{ fontWeight: "bold",
                      color: "black"}}
                    >
                      <QueryBuilderIcon />
                      Heure de début
                    </FormLabel>
                    
                    <div className={classes.date}>
                    <MultipleSelectEmploye/>
                      </div>

                    {/* <TextField
                      id="outlined-number"
                      type="text"
                      className="durationTXT"
                      onChange={onChange}
                      value={valued}
                      size="small"
                      style={{ borderRadius: "30px" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <div className="arrow">
                              <ArrowDropUpIcon style={{ height: "20px" }} />
                              <ArrowDropDownIcon style={{ height: "20px" }} />
                            </div>
                          </InputAdornment>
                        ),
                      }}
                    /> */}
                    
                   
                  </LocalizationProvider>
                </Grid>
                <Grid item sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      className={classes.icon}
                      style={{ fontWeight: "bold",
                      color: "black"}}
                    >
                      <CalendarTodayIcon />
                      Date du début
                    </FormLabel>
                    <MobileDatePicker
                      // label="Date mobile"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={handleChange}
                      style={{ fontWeight: "bold",
                      color: "black"}}
                      renderInput={(params) => <TextField className="dateTXT" {...params} />}
                    />

                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      className={classes.icon}
                      style={{ fontWeight: "bold",
                      color: "black"}}
                    >
                      <QueryBuilderIcon />
                      Heure de début
                    </FormLabel>


                    
                    <div className={classes.date}>
                      <MultipleSelectEmploye/>
                      </div>

                    {/* <TextField
                      id="outlined-number"
                      type="text"
                      className="durationTXT"
                      onChange={onChange}
                      value={valued}
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <div className="arrow">
                              <ArrowDropUpIcon style={{ height: "20px" }} />
                              <ArrowDropDownIcon style={{ height: "20px" }} />
                            </div>
                          </InputAdornment>
                        ),
                      }}
                    /> */}
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <div className={classes.textArea}>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  className={classes.icon}
                  style={{ fontWeight: "bold",
                  color: "black"}}
                >
                  <EventIcon />
                  Renouveler ce congé ( optionnel ):
                </FormLabel>
                <TextField
                  id="outlined-basic"
                  className="optional"
                />

                <InputLabel
                  id="demo-multiple-name-label"
                  className={classes.icon}
                  style={{ fontWeight: "bold",
                  color: "black"}}
                  
                >
                  {" "}
                  <NotesIcon />
                  Taches
                </InputLabel>

                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChangedrop}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                  className="select"
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div className={classes.textArea}>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  className={classes.icon}
                  style={{ fontWeight: "bold",
                  color: "black"}}
                >
                  <SegmentIcon />
                  Détails
                </FormLabel>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={8}
                  style={{ width: 200 }}
                />
              </div>

             
            
            </Grid>
            <Grid item sm={6}>
              
              <TableDialog />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions style={{borderTop:"1px solid gray",margin: "0px 24px 12px 24px"}}>
          <Button variant="text" onClick={handleClose}  style={{backgroundColor:"#c7c7c7",color:"white"}} >Fermer</Button>
          
           <Button autoFocus onClick={handleClose} variant="outlined" style={{backgroundColor:"#423f88",color:"white"}}>
           Enregistrer
           </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}
