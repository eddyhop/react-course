
export function createRequest(url, request) {
  return fetch(process.env.API_URL + url, request)
}