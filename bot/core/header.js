const app = require("../config/app");

const headers = {
  "content-type": "application/json",
  accept: "*/*",
  "accept-encoding": "gzip, deflate",
  "accept-language": "en-US,en;q=0.9",
  "sec-fetch-mode": "cors",
  origin: app.origin,
  "user-agent":
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  "sec-fetch-dest": "empty",
  "X-Requested-With": "org.telegram.messenger.web",
  "Sec-Ch-Ua-Mobile": "?1",
  "Sec-Ch-Ua": `"Android WebView";v="129", "Not=A?Brand";v="8", "Chromium";v="129"`,
  "Sec-Ch-Ua-Platform": "Android",
  Priority: "u=1, i",
  Referrer: app.origin,
  "Sec-Fetch-Site": "same-origin",
  "Sec-Ch-Ua-Platform-Version": '"13.0.0"',
  "Sec-Ch-Ua-Full-Version": '"130.0.6723.58"',
  "Sec-Ch-Ua-Mobile": "?1",
  "Sec-Ch-Ua-Arch": '""',
  "Sec-Ch-Ua-Model": '"SM-G925F"',
  "Sec-Ch-Ua-Bitness": '""',
  "Sec-Ch-Ua":
    '"Chromium";v="130", "Android WebView";v="130", "Not?A_Brand";v="99"',
  "Sec-Ch-Ua-Platform": '"Android"',
  "Sec-Ch-Ua-Full-Version-List":
    '"Chromium";v="130.0.6723.58", "Android WebView";v="130.0.6723.58", "Not?A_Brand";v="99.0.0.0"',
};

module.exports = headers;
