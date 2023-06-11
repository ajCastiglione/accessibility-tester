const local = "http://localhost:5000";
const prod = "";

export function getUrl() {
  if (window.location.host.includes("localhost")) {
    return local;
  } else {
    return prod;
  }
}
