export const ForecastTypeEnum = {
  HOURLY: "HOURLY",
  DAILY: "DAILY",
} as const

export type ForecastTypeEnum =
  (typeof ForecastTypeEnum)[keyof typeof ForecastTypeEnum]