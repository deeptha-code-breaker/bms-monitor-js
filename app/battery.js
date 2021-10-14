import {
  checkChargeRate,
  checkSoc,
  checkTemperature,
  isStateNormal,
} from "./helper.js";

function isBatteryOk(batteryState) {
  console.table(batteryState);
  return (
    isStateNormal(batteryState.temperature) &&
    isStateNormal(batteryState.soc) &&
    isStateNormal(batteryState.chargeRate)
  );
}

function getBatteryState(temperature, soc, chargeRate) {
  return {
    temperature: checkTemperature(temperature),
    soc: checkSoc(soc),
    chargeRate: checkChargeRate(chargeRate),
  };
}

export { isBatteryOk, getBatteryState };
