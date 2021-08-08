export function handleApiResponse(response) {
  if (response?.status?.toString() !== '200' && response?.status?.toString() !== '201') {
    if (response?.status?.toString() === '401') {
      // TODO
    }
    const error = response.statusText;

    return Promise.reject(error);
  }
  return response.data;
}
