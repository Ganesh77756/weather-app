import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

export default function InfoBox({ info }) {

  const INIT_URL = "https://thumbs.dreamstime.com/b/street-view-cars-palms-dust-storm-saudi-arabia-rahima-may-43202541.jpg?w=768";
  const HOT_URL  = "https://thumbs.dreamstime.com/b/pollution-5406880.jpg?w=768";
  const COLD_URL = "https://thumbs.dreamstime.com/b/happy-woman-riding-bicycle-winter-city-young-nice-streets-empty-due-to-heavy-snow-wind-cold-image-taken-108565253.jpg?w=768";
  const RAIN_URL = "https://thumbs.dreamstime.com/b/view-city-rain-high-rise-building-onto-urban-skyline-126917878.jpg?w=768";

   
  let weatherImage =
    info.humidity > 80
      ? RAIN_URL
      : info.temp > 25
      ? HOT_URL
      : COLD_URL;

  return (
    <div className="InfoBox">  
      <Card sx={{ maxWidth: 345 }}>

        <CardMedia
          sx={{ height: 140 }}
          image={weatherImage}
          title="weather"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 && <UmbrellaIcon />}
            {info.temp > 25 && <SunnyIcon />}
            {info.temp <= 25 && <AcUnitIcon />}
          </Typography>

          <Typography variant="body2" component="div" sx={{ color: 'text.secondary' }}>
            <div>Temperature: {info.temp}°C</div>
            <div>Min Temp: {info.tempMin}°C</div>
            <div>Max Temp: {info.tempMax}°C</div>
            <div>Humidity: {info.humidity}%</div>
            <div>
              The weather can be described as {info.weather}.  
              Feels Like: {info.feelsLike}°C
            </div>
          </Typography>
        </CardContent>

      </Card>
    </div>
  );
}
