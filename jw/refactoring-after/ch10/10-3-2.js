function isEligibleForAdjustCapital(instrument) {
  return (
    instrument.interestRate > 0 &&
    instrument.duration > 0 &&
    instrument.capital > 0
  );
}

export function adjustedCapital(instrument) {
  if (!isEligibleForAdjustCapital(instrument)) return 0;

  return (
    (instrument.income / instrument.duration) * instrument.adjustmentFactor
  );
}
