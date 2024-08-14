const offsets = {
  "new-york": -240,
  "new-delhi": 330,
  tokyo: 540,
  london: 0,
  paris: -60,
  beijing: 480,
};

export type CityID = keyof typeof offsets;

export const getTimeByCity = (cityId: CityID) => {
  const localDate = new Date();
  const offset = localDate.getTimezoneOffset() + offsets[cityId];
  return new Date(+localDate + offset * 60 * 1000);
};
