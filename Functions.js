import React from 'react';


// Create Date value
export function createDateValue(year,month,day,hour,minute) {
  let a = new Date(year,month,day,hour,minute).getHours()+(new Date(year,month,day,hour,minute).getMinutes()/100);
  return a;
}

// Create Date
export function createDate(year,month,day,hour,minute) {
  let a = new Date(year,month,day,hour,minute).getHours()+(new Date(year,month,day,hour,minute).getMinutes()/100);
  return timeString(a);
}

// Converts time values in to humanradeable time
export function timeString(value){

  var hour,minute,period;

  //ex 22.25
  if (value > 12) {
    hour = Math.floor(value)  - 12;
    minute = (value - Math.floor(value)) * 100;
    period = " PM";
  // ex 7.25
}

if( value < 12 ){
    hour = Math.floor(value);
    minute = (value - Math.floor(value)) * 100;
    period = " AM";
  // ex 12.25
}

if (value > 12 && value < 13)  {
    hour = 12;
    minute = (value - Math.floor(value)) * 100;
    period = " PM";
  }

  return hour + ":" + Math.round(minute) + period;

}
