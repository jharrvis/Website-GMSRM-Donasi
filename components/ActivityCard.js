'use client';
import * as React from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ActivityCard({ activity }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        image={activity.img}
        alt={activity.title}
        sx={{ width: '100%', height: 'auto' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h3">
          {activity.title}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '0.875rem', marginTop: '8px' }}>
          {activity.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={activity.link} target="_blank" rel="noopener noreferrer">
            <Button size="small">Baca Selengkapnya</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
