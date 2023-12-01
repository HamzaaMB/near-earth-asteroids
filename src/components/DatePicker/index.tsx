import React, { useState, useEffect } from "react";
import maxEndDate from "../../helpers/maxEndDate";

type DatePickerProps = {
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  initialStartDate: string;
  initialEndDate: string;
};

const DatePicker = ({
  setStartDate,
  setEndDate,
  initialStartDate,
  initialEndDate,
}: DatePickerProps) => {
  const [startDate, setInternalStartDate] = useState(initialStartDate);
  const [endDate, setInternalEndDate] = useState(initialEndDate);

  useEffect(() => {
    /*Set initial end date to start date + 7 days*/
    const initialEndDateValue = maxEndDate(startDate);
    setInternalEndDate(initialEndDateValue);
    setEndDate(initialEndDateValue);
  }, [startDate, setEndDate]);

  /**
   * handleStartDateChange()
   * Handles the change event when the start date is selected.
   * Updates the internal and external start date states & end date based on new start date.
   * @param {string} date - The selected start date.
   */
  const handleStartDateChange = (date: string) => {
    setInternalStartDate(date);
    setStartDate(date);
    /*Update end date when start date changes*/
    const newEndDate = maxEndDate(date);
    setInternalEndDate(newEndDate);
    setEndDate(newEndDate);
  };

  /**
   * handleEndDateChange()
   * Handles the change event when the end date is selected.
   * Updates the internal and external end date states.
   * @param {string} date - The selected end date.
   */
  const handleEndDateChange = (date: string) => {
    setInternalEndDate(date);
    setEndDate(date);
  };

  return (
    <div className="date_picker_container">
      <div className="date_box">
        <label>Select Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => handleStartDateChange(e.target.value)}
        />
      </div>
      <div className="date_box">
        <label>Select End Date:</label>
        <input
          type="date"
          id="endDate"
          min={startDate}
          max={maxEndDate(startDate)}
          value={endDate}
          onChange={(e) => handleEndDateChange(e.target.value)}
          />
        <label><em>(7 day limit)</em></label>
      </div>
    </div>
  );
};

export default DatePicker;
