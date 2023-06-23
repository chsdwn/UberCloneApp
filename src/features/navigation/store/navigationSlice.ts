import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/store';

type ILocation = {
  lat: number;
  lng: number;
};
type IInitialState = {
  origin: {
    location: ILocation;
    description: string;
  } | null;
  destination: {
    location: ILocation;
    description: string;
  } | null;
  travelTimeInformation: {
    seconds: number;
    meters: number;
  } | null;
};
const initialState: IInitialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<IInitialState['origin']>) => {
      if (action.payload) {
        state.origin = {
          location: {
            lat: action.payload.location.lat,
            lng: action.payload.location.lng,
          },
          description: action.payload.description,
        };
      }
    },
    setDestination: (
      state,
      action: PayloadAction<IInitialState['destination']>,
    ) => {
      if (action.payload) {
        state.destination = {
          location: {
            lat: action.payload.location.lat,
            lng: action.payload.location.lng,
          },
          description: action.payload.description,
        };
      }
    },
    setTimeTravelInformation: (
      state,
      action: PayloadAction<IInitialState['travelTimeInformation']>,
    ) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setDestination, setOrigin, setTimeTravelInformation } =
  navigationSlice.actions;
export const navigationSliceReducer = navigationSlice.reducer;

export const selectOrigin = (state: RootState) => state.navigation.origin;
export const selectDestination = (state: RootState) =>
  state.navigation.destination;
export const selectTimeTravelInformation = (state: RootState) =>
  state.navigation.travelTimeInformation;
