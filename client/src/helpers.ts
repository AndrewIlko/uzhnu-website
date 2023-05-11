import { NewsFilter } from "./ts/types/app_types";

export const updateObj = (obj: object, key: string, value: any) => {
  const copy: any = { ...obj };
  copy[key] = value;
  return copy;
};

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

export const genArrWithElement = (count: number, element: any) => {
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(element);
  }
  return arr;
};

export const queryToUrl = (object: NewsFilter) => {
  let result = [];
  if (object.category && object.category!.length) {
    result.push(
      object.category!.map((category) => `category=${category}`).join("&")
    );
  }
  if (object.title && object.title!.length) {
    result.push(`title=${object.title}`);
  }
  if (object.page && object.page != 1) {
    result.push(`page=${object.page}`);
  }
  if (
    (object.sortDate && object.sortDate == "asc") ||
    (object.sortDate && object.sortDate == "desc")
  ) {
    result.push(`sortDate=${object.sortDate}`);
  }
  return result.join("&");
};
