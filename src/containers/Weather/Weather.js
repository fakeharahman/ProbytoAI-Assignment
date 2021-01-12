import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import * as cities from "../../json/cities.json";
import classes from "./Weather.module.css";

export default function Weather() {
  const [cityId, setCityId] = useState(1273294);
  const [cityData, setCityData] = useState({ name: "", img: "", weather: "" });

  const getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=87ae0118c78dd7d7019679bbb8707b48`
      )
      .then((data) => {
        console.log(data);
        setCityData({
          name: data.data.name,
          img: data.data.weather[0].icon,
          weather: data.data.weather[0].main,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line
  }, [cityId]);

  const handleChange = (e) => {
    setCityId(e.target.value);
  };

  const city = cities.default.map((city) => {
    return <MenuItem value={city.id}>{city.name}</MenuItem>;
  });
  console.log(cityData);
  console.log(cityId);
  return (
    <Box height="100vh" className={classes.Weather}>
      <Card>
        <Box bgcolor="#fff" p={6} minWidth="40vw">
          <h2>Select a City</h2>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="select">City</InputLabel>
            <Select
              labelId="select"
              id="demo-simple-select-outlined"
              value={cityId}
              onChange={handleChange}
              label="City"
            >
              {/* <MenuItem value="1273294">Delhi</MenuItem> */}
              {city}
            </Select>
          </FormControl>
          <img
            src={`https://openweathermap.org/img/wn/${cityData.img}@2x.png`}
            alt="weather img"
          />
          <p>{cityData.weather}</p>
          <p>{cityData.name}</p>
        </Box>
      </Card>
    </Box>
  );
}
