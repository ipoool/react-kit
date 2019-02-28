export function SetStorage(key, value) {
  return sessionStorage.setItem(key, value);
}
export function GetStorage(key) {
  return sessionStorage.getItem(key);
}
export function RemoveStorage(key) {
  return sessionStorage.removeItem(key);
}
