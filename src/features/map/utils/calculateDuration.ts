export const calculateDuration = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const h = Math.floor(minutes / 60);
  const m = minutes - h * 60;

  let res = '';
  if (h > 0) res += `${h} hours `;
  if (m > 0) res += `${m} mins`;
  return res;
};
