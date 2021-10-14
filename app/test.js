const assertBatteryCondition = (expected, actual, message) => {
  if (expected === actual) return message;
};

export { assertBatteryCondition };
