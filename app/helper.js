import {
  BATTERY_STATE,
  CHARGE_RANGE,
  SOC_RANGE,
  TEMPERATURE_RANGE,
} from "./constants.js";

const checkRange = (low, high) => (value) => {
  if (value < low) return BATTERY_STATE.LOW;
  if (value > high) return BATTERY_STATE.HIGH;
  return BATTERY_STATE.NORMAL;
};

const checkTemperature = checkRange(
  TEMPERATURE_RANGE.low,
  TEMPERATURE_RANGE.high
);
const checkSoc = checkRange(SOC_RANGE.low, SOC_RANGE.high);
const checkChargeRate = checkRange(CHARGE_RANGE.low, CHARGE_RANGE.high);

const isStateNormal = (state) => state === BATTERY_STATE.NORMAL;

export { checkTemperature, checkSoc, checkChargeRate, isStateNormal };
