import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function PostCard({post}) {
  return (
    <Card sx={{ minWidth:275,maxWidth: 275,margin: 10 }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {post.category}
        </Typography>
        <Typography variant="h5" component="div">
           {post.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
