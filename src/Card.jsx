import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Weather.css";

export default function weatherCard(props) {
    let imgUrl = props.weatherData.temp > 30 ? 'https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : props.weatherData.temp > 5 ? 'https://plus.unsplash.com/premium_photo-1681154819978-2e26de845fdd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : 'https://images.unsplash.com/photo-1554417063-60e738613596?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <div className="weather-card">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imgUrl}
            alt="Weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
             City : {props.weatherData.cityNme}
            </Typography>
            <p>Feels Like: {props.weatherData.feelsLike}&deg;C</p>
            <p>Humidity: {props.weatherData.humidity}</p>
            <p>Pressure: {props.weatherData.pressure}</p>
            <p>Temperature: {props.weatherData.temp}&deg;C</p>
            <p>Max Temperature: {props.weatherData.temp_max}&deg;C</p>
            <p>Min Temperature: {props.weatherData.temp_min}&deg;C</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}