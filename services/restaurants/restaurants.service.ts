import camelize from "camelize";
import { mockImages, mocks } from "./mock";

interface LocationType {
  location?: string;
}
export const restaurantsRequest = ({
  location = "37.7749295,-122.4194155",
}: LocationType) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject("not found");
    resolve(mock.results);
  });
};

export const restaurantsTransform = (result: any[]) => {
  console.log(result);
  const mappedResult = result.map((x: any) => ({
    ...x,
    isOpenNow: x.opening_hours && x.opening_hours.open_now,
    isClosedTemporarily: x.business_status === "CLOSED_TEMPORARILY",
    photos: x.photos.map(
      () => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))],
    ),
  }));
  const newResult = camelize(mappedResult);
  return newResult;
};

// restaurantsRequest({})
//   .then((res) => restaurantsTransform(res as any[]))
//   .then((res) => console.log(res));
