import { getBatteryState, isBatteryOk } from "./battery.js";
import { assertBatteryCondition } from "./test.js";

const main = () => {
  // All normal
  console.log(assertBatteryCondition(true, isBatteryOk(getBatteryState(25, 70, 0.7)), "Battery condition is good."));

  // high, high, normal
  console.log(assertBatteryCondition(false, isBatteryOk(getBatteryState(50, 85, 0.0)), "Battery condition is bad."));

  // all high
  console.log(assertBatteryCondition(false, isBatteryOk(getBatteryState(50, 85, 0.9)), "Battery condition is bad."));

  //all low
  console.log(assertBatteryCondition(false, isBatteryOk(getBatteryState(-10, 15, -1)), "Battery condition is bad."));

  // high, normal, normal
  console.log(assertBatteryCondition(false, isBatteryOk(getBatteryState(50, 60, 0.5)), "Battery condition is bad."));

  // low, normal, normal
  console.log(assertBatteryCondition(false, isBatteryOk(getBatteryState(-2, 60, 0.5)), "Battery condition is bad."));

  // normal, high, normal
  console.log(assertBatteryCondition(false, isBatteryOk(getBatteryState(25, 90, 0.5)), "Battery condition is bad."));

  // normal, low, normal
  console.log(assertBatteryCondition(false, isBatteryOk(getBatteryState(39, 10, 0.5)), "Battery condition is bad."));

  // normal, normal, high
  console.log(assertBatteryCondition(false, isBatteryOk(getBatteryState(39, 50, 1.2)), "Battery condition is bad."));

  // normal, normal, low
  console.log(assertBatteryCondition(false, isBatteryOk(getBatteryState(39, 45, -0.1)), "Battery condition is bad."));
};

main();
