export function removeTags(htmlContent: string | undefined) {
  if (htmlContent === null || htmlContent === "") return false;
  else htmlContent = htmlContent?.toString();

  return htmlContent?.replace(/(<([^>]+)>)/gi, "").substring(0, 300);
}

const byte = crypto.getRandomValues(new Uint8Array(6));
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

let randomString = "";
for (let i = 0; i < byte.length; i++) {
  randomString += characters[byte[i] % characters.length];
}

export const generateRandomString = randomString;
