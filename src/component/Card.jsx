import React from 'react';
import {useNavigate} from 'react-router-dom'

import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

const NewsCard = ({ title, description, imageUrl, date,_id,newArt }) => {

  const navgt=useNavigate();


  return (
    <Card onClick={()=>{navgt(`/description`,{state:_id})}}   sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }} >
      
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
};

export default NewsCard;
