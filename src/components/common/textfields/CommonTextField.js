import { InputAdornment, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  textFieldRoot: {
    width: "100%",
    "&>div": {
      borderRadius: 16,
    },
  },
}));
const CommonTextField = ({
  startIcon,
  endIcon,
  multiline = false,
  disabled = false,
  className,
  ...other
}) => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        className={classes.textFieldRoot}
        multiline={multiline}
        disabled={disabled}
        inputProps={{
          "aria-label": "naked",
        }}
        variant="outlined"
        startadornment={
          startIcon && (
            <InputAdornment className={classes.scoutibleIcon} position="start">
              {startIcon}
            </InputAdornment>
          )
        }
        endadornment={
          endIcon && (
            <InputAdornment className={classes.scoutibleEndIcon} position="end">
              {endIcon}
            </InputAdornment>
          )
        }
        {...other}
      />
    </div>
  );
};

export default CommonTextField;
