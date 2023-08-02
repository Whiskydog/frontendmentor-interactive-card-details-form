export function formatCardNumber(numberStr) {
  return numberStr
    .replace(/\W/gi, "")
    .replace(/(.{4})/g, "$1 ")
    .substring(0, 19);
}
