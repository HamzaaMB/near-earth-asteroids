/**
 * maxEndDate()
 * @param startDate Takes a start date to parse and add 7 days to it.
 * @returns start date + 7 days.
 * Additional notes: Can be refactored to take another parameter to add 'x' amount of days.
 */
const maxEndDate = (startDate: string): string => {
  const sevenDaysLater = new Date(startDate);
  sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);
  return sevenDaysLater.toISOString().split("T")[0];
};

export default maxEndDate;