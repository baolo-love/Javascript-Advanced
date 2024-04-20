let isDay = false;
let isNight = true;
let isCloudy = true;
let isAWorkDay = false;
let livingRoomEmpty = false;
let powerOnLightsTVAndPS5 = isNight || (isDay && isCloudy && livingRoomEmpty);
console.log(powerOnLightsTVAndPS5);
