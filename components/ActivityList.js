'use client';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import ActivityCard from './ActivityCard';
import { activities } from './activities';

export default function ActivityList() {
  return (
    <Grid container spacing={4}>
      {activities.map((activity, index) => (
        <Grid item xs={12} md={4} key={index}>
          <ActivityCard activity={activity} />
        </Grid>
      ))}
    </Grid>
  );
}
