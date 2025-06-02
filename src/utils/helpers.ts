export function removeTags(htmlContent: string | undefined) {
  if (htmlContent === null || htmlContent === "") return false;
  else htmlContent = htmlContent?.toString();

  return htmlContent?.replace(/(<([^>]+)>)/gi, "").substring(0, 300);
}
