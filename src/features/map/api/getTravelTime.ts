import { GOOGLE_MAPS_API_KEY } from '@env';

import { IDistanceMatrixResult } from '../types';

export const getTravelTime = async (origin: string, destination: string) => {
  const url =
    'https://maps.googleapis.com/maps/api/distancematrix/json' +
    `?destinations=${destination}&origins=${origin}&units=imperial` +
    `&key=${GOOGLE_MAPS_API_KEY}`;
  const data = await fetch(url);
  const res = (await data.json()) as IDistanceMatrixResult;
  return res.rows[0].elements[0];
};
