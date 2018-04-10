let person = {
  name: 'Rosie',
  age: 29,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
}; // object for my alarms

console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) { // if its a weekend, then return weekendAlarm key
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm'; // otherwise, return the weekAlarm key
}

console.log(person[alarm]);
