import { Box, Button, Card, DialogTitle, TextField } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./Login.module.css";

export default function Login(props) {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const onChangeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const onClickHandler=()=>{
    props.history.push({ pathname: "/weather" });
  }
  return (
    <Box className={classes.Login} px={2}>
      <Card>
        <Box bgcolor="#fff" p={4}>
          <DialogTitle>
            <h2>LOG IN TO YOUR ACCOUNT</h2>
          </DialogTitle>
          <TextField
            label="Email"
            placeholder="Email"
            fullWidth
            name="email"
            onChange={(e)=>onChangeHandler(e)}
            value={loginData.email}
          />
          <div className={classes.space} />
          <TextField
            label="Password"
            placeholder="Password"
            type="password"
            fullWidth
            name="password"
            onChange={(e)=>onChangeHandler(e)}
            value={loginData.password}
          />
          <div className={classes.space} />
         
          <Button variant="contained" color="primary" onClick={onClickHandler}>
            Login
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
