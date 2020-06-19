export default function getBaseUrl() {
  return getQueryStringParameterByName("useMockApi")
    ? "http://localhost:3001/"
    : "https://coryphilzapi.herokuapp.com/";
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.search.replace("?", "");
  const regex = new RegExp("useMockApi=true");
  return regex.test(url);
}
