// Set today's date as calendar's value & max range
function setCalendarDefaultDate(calendar) {
  const date = new Date();
  calendar.setAttribute("value", date.toISOString().slice(0, 10));
  calendar.setAttribute("max", date.toISOString().slice(0, 10));
}

export default setCalendarDefaultDate;
