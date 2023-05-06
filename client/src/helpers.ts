export const updateObj = (obj: object, key: string, value: any) => {
  const copy: any = { ...obj };
  copy[key] = value;
  return copy;
};

// name=adnrew&fullanme=billy

export const urlToQuery = (string: string) => {
  const result: { [key: string]: any } = {};
  string = string.toLowerCase();
  const queryPart = string.split("?")[1];
  if (!queryPart) {
    return {};
  }
  queryPart.split("&").forEach((el) => {
    const [key, value] = el.split("=");
    if (result[key]) {
      result[key] = [...result[key], value];
    } else {
      result[key] = [value];
    }
  });

  return result;
};

export const convertFileToBase64 = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
};
