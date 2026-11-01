const ua = navigator.userAgent;
const uad = navigator.userAgentData;
console.log(uad);

//target
const target = document.getElementById("target");

//browser info
let browser = "Unknown";
let version = "Unknown";

// used ai for gathering browser information
if (ua.includes("Edg/")) {
  browser = "Microsoft Edge";
  const match = ua.match(/Edg\/([0-9.]+)/);
  if (match) version = match[1];
} else if (ua.includes("OPR/") || ua.includes("Opera")) {
  browser = "Opera";
  const match = ua.match(/(?:OPR|Opera)\/([0-9.]+)/);
  if (match) version = match[1];
} else if (ua.includes("Chrome") && !ua.includes("Edg/")) {
  browser = "Google Chrome";
  const match = ua.match(/Chrome\/([0-9.]+)/);
  if (match) version = match[1];
} else if (ua.includes("Safari") && !ua.includes("Chrome")) {
  browser = "Apple Safari";
  // Safari hides its actual version after "Version/", not "Safari/"
  const match = ua.match(/Version\/([0-9.]+)/);
  if (match) version = match[1];
} else if (ua.includes("Firefox")) {
  browser = "Mozilla Firefox";
  const match = ua.match(/Firefox\/([0-9.]+)/);
  if (match) version = match[1];
}
//add to html
const browserP = document.createElement("p");
browserP.textContent = `Your browser is ${browser} and its version is ${version}.`;
target.append(browserP);

//operating system name
let operatingSystem = "Unknown";
if (uad.platform.includes("Windows")) {
  operatingSystem = "Windows";
} else if (uad.platform.includes("Linux")) {
  operatingSystem = "Linux";
} else if (uad.platform.includes("macOS")) {
  operatingSystem = "macOS";
} else operatingSystem = "Unknown OS";
//add to html
const osP = document.createElement("p");
osP.textContent = `Your operating system is ${operatingSystem}.`;
target.append(osP);

// screen width and height info
const width = screen.width;
const height = screen.height;
//add to html
const widthHeightP = document.createElement("p");
widthHeightP.textContent = `Your screen width is ${width}px and height is ${height}px.`;
target.append(widthHeightP);

//available space
const availableWidth = window.innerWidth;
const availableHeight = window.innerHeight;
// add to html
const availableWidthHeightP = document.createElement("p");
availableWidthHeightP.textContent = `Available screen width is ${availableWidth}px and height
is ${availableHeight}px.`;
target.append(availableWidthHeightP);

//current date and time
const currentDate = new Date();
const date = currentDate.toLocaleDateString("fi-FI");
const timeHours = String(currentDate.getHours()).padStart(2, '0');
const timeMinutes = String(currentDate.getMinutes()).padStart(2, '0');
//add to html
const dateP = document.createElement("p");
dateP.textContent = `The current date is ${date}`;
target.append(dateP);
const timeP = document.createElement("p");
timeP.textContent = `The current time is: ${timeHours}:${timeMinutes}`;
target.append(timeP);
