import React from 'react'
import { DateInput } from "sutra-library";

function DateComponent() {
  return (
    <DateInput
      defaultValue={new Date()}
      CaptionType='OnTopLabel'
      displayLabel='Select a Date'
      placeholder='Choose a date'
      // Add more props as needed
    />
  )
}

export default DateComponent