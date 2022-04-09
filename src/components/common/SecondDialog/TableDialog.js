import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputAdornment from "@mui/material/InputAdornment";
import { MultipleSelectEmploye } from "../select/MultipleSelect";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  date:{
    "&>div":{
      "&>div":{
        width:135,
        "&>div":{
          height:50
        }
      }
    }
  }
}))


function TableDialog() {
  const classes = useStyles();
  const [noOfRows, setNoOfRows] = useState(1);
 const handleAddRow =()=>{
  setNoOfRows(noOfRows + 1)
 }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#9b54f3",
          borderRadius: "5px",
          padding: "0px 7px 0px 7px",
          height: "40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FreeBreakfastIcon style={{ color: "white" }} />
          <h4 style={{ color: "white", marginLeft: "5px", fontWeight: 0 }}>
            Pauses
          </h4>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "white",
              border: "none",
              marginRight: "5px",
              fontWeight: "bold",
            }}
            onClick={handleAddRow}
          >
            +
          </button>
        </div>
      </div>

      <div className="bheading">
        <div style={{ width: "10%" }}>#</div>
        <div style={{ width: "30%" }}>Durée</div>
        <div style={{ width: "30%" }}>Début</div>
        <div style={{ width: "20%" }}>Options</div>
      </div>

      {[...Array(noOfRows)].map((elementInArray, index)  => {

        return(
  <div className="first">
          <div onClick={() => setNoOfRows(noOfRows - 1)} style={{ width: "10%" }}>
            <img src={`${process.env.PUBLIC_URL}/image/cancel.png`} alt="" style={{ marginTop: "10px" }}   />
          </div>
          <div style={{ width: "30%" }}>
            
<div className={classes.date}>
                      <MultipleSelectEmploye/>
                      </div>


          </div>

          <div style={{ width: "30%" }}>

            
<div className={classes.date}>
                      <MultipleSelectEmploye/>
                      </div>
          
          </div>

          <div style={{ width: "20%" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox style={{ padding: 0 }} size="small" />}
                label="Label"
              />
              <FormControlLabel
                control={<Checkbox style={{ padding: 0 }} size="small" />}
                label="Disabled"
              />
            </FormGroup>
          </div>
        </div>
        )
      
      })}
    </div>
  );
}

export default TableDialog;
