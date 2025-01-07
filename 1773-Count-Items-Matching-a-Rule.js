var countMatches = function (items, ruleKey, ruleValue) {
  const calssification = ["type", "color", "name"];
  const inputKeyValueIndex = calssification.indexOf(ruleKey);

  let count = 0;
  items.forEach((device) => {
    if (device[inputKeyValueIndex] === ruleValue) count++;
  });

  return count;
};
