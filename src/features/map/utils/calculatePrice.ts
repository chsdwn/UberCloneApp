export const calculatePrice = (
  distance: number,
  multiplier: number,
  chargeRate = 1.5,
) => (distance * multiplier * chargeRate) / 1000;
