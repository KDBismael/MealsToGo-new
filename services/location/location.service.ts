import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm: string) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) reject("not found");
    resolve(locationMock);
  });
};

export const locationTransform = (result: any) => {
  const formatedResult = camelize(result);
  const { geometry = {} } = formatedResult.results[0];
  const { lat, long } = geometry.location;
  return { lat, long };
};
