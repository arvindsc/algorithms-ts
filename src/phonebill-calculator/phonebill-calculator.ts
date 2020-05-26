const ONE_HOUR_IN_SECONDS = 3600;
const ONE_MIN_IN_SECONDS = 60;

export const getTimeComponents = (time) => {
  const [hours, minutes, seconds] = time.split(":");
  return {
    hours: parseInt(hours, 10),
    minutes: parseInt(minutes, 10),
    seconds: parseInt(seconds, 10),
  };
};

export const getTotalDuration = (time) => {
  let duration = 0;
  if (time.hours > 0) {
    duration += time.hours * ONE_HOUR_IN_SECONDS;
  }
  if (time.minutes > 0) {
    duration += time.minutes * ONE_MIN_IN_SECONDS;
  }
  if (time.seconds > 0) {
    duration += time.seconds;
  }
  return duration;
};

const getCallsMap = (callHistory) => {
  let callRecords = callHistory.split("\n");
  let phoneMap = {};
  callRecords.forEach((record) => {
    let [duration, phone] = record.split(",");
    let time = getTimeComponents(duration);
    if (phoneMap[phone]) {
      let totalCallDuration = getTotalDuration(time) + phoneMap[phone];
      phoneMap[phone] = totalCallDuration;
    } else {
      phoneMap[phone] = getTotalDuration(time);
    }
  });
  return phoneMap;
};

const getBillMap = (callHistory) => {
  let callRecords = callHistory.split("\n");
  let billMap: { [key: string]: number } = {};
  callRecords.forEach((record) => {
    let [duration, phone] = record.split(",");
    let bill = getBill(duration);
    if (billMap[phone]) {
      let totalBill = bill + billMap[phone];
      billMap[phone] = totalBill;
    } else {
      billMap[phone] = bill;
    }
  });
  return billMap;
};

export const getBill = (moment) => {
  let bill = 0,
    min = 0;
  const time = getTimeComponents(moment);

  if (time.minutes >= 5) {
    bill = time.minutes * 150;
    if (time.seconds > 0) {
      bill = bill + 150;
    }
    if (time.hours > 0) {
      min = time.hours * ONE_MIN_IN_SECONDS;
      bill = bill + min * 150;
    }
  } else {
    bill = (time.minutes * ONE_MIN_IN_SECONDS + time.seconds) * 3;
  }
  return bill;
};

export const getLongestCall = (callHistory) => {
  const callMap = getCallsMap(callHistory);
  var sorted = Object.keys(callMap).sort((a, b) => {
    if (callMap[a] > callMap[b]) {
      return -1;
    } else if (callMap[b] > callMap[a]) {
      return 1;
    } else if (callMap[a] == callMap[b]) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return sorted[0];
};

export default function phoneBillCalculator(s) {
  let longNumber = getLongestCall(s);
  let result = getBillMap(s);
  let totalBill = 0;

  for (const [phone, bill] of Object.entries(result)) {
    if (phone !== longNumber) {
      totalBill = totalBill + bill;
    }
  }
  return totalBill;
}
