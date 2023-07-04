export const transStrToObj = (str) => {
  try {
    const obj = JSON.parse(str);
    return obj;
  } catch (error) {
    console.log('enter JSON.parse error');
    try {
      const jsonStr = data.replace(/'/g, '"');
      const jsonStrFixed = jsonStr.replace(/([{,]\s*)([^"\s]+)\s*:/g, '$1"$2":').replace(/:\s*'([^']*)'/g, ': "$1"');
      const jsonObj = JSON.parse(jsonStrFixed);
      return jsonObj;
    } catch (error) {
      console.error(error);
    }
  }
}