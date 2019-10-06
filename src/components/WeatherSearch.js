import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styleMainDiv = {
  display: 'flex',
  flexGrow: 1,
  backgroundColor: "white",
  margin: "30px",
  width: "200px",
  height: "400px",
  borderRadius: "10px",
  flexDirection: "column",
};

const WeatherSearchCard = ({ changeCity, changeCountry, callAPI }) => {
  return (
    <div style={styleMainDiv}>
      <div style={{ flexGrow: 1 }}>
        <TextField label="City Name" onChange={changeCity} margin="dense" />
      </div>
      <div style={{ flexGrow: 1 }}>
        <TextField
          label="Country Code"
          onChange={changeCountry}
          margin="dense"
          style={{ alignItems: 'center', justifyContent: 'center'}}
        />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Button size="small" onClick={callAPI}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default WeatherSearchCard;
