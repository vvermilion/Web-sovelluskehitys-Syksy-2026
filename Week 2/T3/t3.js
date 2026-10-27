const ua = navigator.userAgent;
const uad = navigator.userAgentData;
console.log(uad);
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
const divider = document.getElementById("target");
const browserText = document.getElementById("browserText");
browserText.append("This is your browser and version: ");
divider.append(`${browser} version ${version}`);

//operating system name
let operatingSystem = "Unknown";
if (uad.platform.includes("Windows")) {
  operatingSystem = "Windows";
} else if (uad.platform.includes("Linux")) {
  operatingSystem = "Linux";
} else if (uad.platform.includes("macOS")) {
  operatingSystem = "macOS";
} else operatingSystem = "Unknown OS";

//putting everything in HTML

divider.append(browserText);
const osText = "This is your operating system: ";
divider.append(osText);
