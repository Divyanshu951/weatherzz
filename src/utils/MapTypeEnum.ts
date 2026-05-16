


export const MapTypeEnum = {
  Precipitation: "precipitation_new",
  Temperature: "temp_new",
  Cloud: "wind_new",
  Wind: "clouds_new",
  Pressure: "pressure_new",

} as const

export type MapTypeEnum =
  (typeof MapTypeEnum)[keyof typeof MapTypeEnum]