import phoneBillCalculator, {
  getBill,
  getTotalDuration,
  getTimeComponents,
} from "./phonebill-calculator";

describe("phoneBillCalculator", () => {
  it("tie", () => {
    let phoneRecord = `00:01:07,400-234-090
                          00:01:07,701-080-080
                          00:03:00,400-234-090
                          00:05:10,701-080-080`;
    expect(phoneBillCalculator(phoneRecord)).toEqual(741);
  });

  it("900", () => {
    const phoneRecord = `00:01:07,400-234-090
                          00:05:01,701-080-080
                          00:05:00,400-234-090`;
    expect(phoneBillCalculator(phoneRecord)).toEqual(900);
  });

  it("should not consider the longest call in total bill", () => {
    const phoneRecord = `00:01:07,400-234-090
      00:05:00,701-080-080`;
    expect(phoneBillCalculator(phoneRecord)).toEqual(201);
  });

  it(`should verify that the promotion is applied to the 
    phone number whose value is the smaller among the given phones`, () => {
    const phoneRecord = `00:05:01,400-234-090
      00:03:00,400-234-090,
      00:05:01,701-080-080`;
    expect(phoneBillCalculator(phoneRecord)).toEqual(900);
  });
});

describe("getTotalDuration", () => {
  it("should return duration in seconds", () => {
    expect(getTotalDuration(getTimeComponents("00:01:07"))).toEqual(67);
  });
});

describe("getBill", () => {
  it("should verify bill for duration less than 5", () => {
    expect(getBill("00:01:07")).toEqual(201);
  });

  it("should verify the bill if the call was at least 5 min long", () => {
    expect(getBill("00:05:00")).toEqual(750);
  });
  it("should verify the bill for every extra second to min is 150 cent", () => {
    expect(getBill("00:05:01")).toEqual(900);
  });
});
