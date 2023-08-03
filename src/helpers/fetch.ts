const baseUrl: string | undefined = process.env.REACT_APP_API_URL;

export const fetchNoToken = (
  endpoint: string,
  data: object,
  method: string = "GET"
): Promise<Response> => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchWithToken = (
  endpoint: string,
  data: object,
  method: string = "GET"
): Promise<Response> => {
  const url = `${baseUrl}/${endpoint}`;

  const token = localStorage.getItem("token") || "";
  
  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};
