export const getAPIResponse = async <T>(url: string) => {
  const res = await fetch(url);
  const json: T[] = await res.json();
  return json;
};
