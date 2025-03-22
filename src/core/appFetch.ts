import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(
      `[Request] ${config.method?.toUpperCase()} ${config.url}`,
      config
    );
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(
      `[Response] ${response.status} ${response.config.url}`,
      response.data
    );
    return response;
  },
  (error) => {
    console.error(
      `[Error] ${error.response?.status} ${error.config?.url}`,
      error.message
    );

    const config = error.config;
    if (!config._retry) {
      config._retry = true;
      console.log("Retrying request...");
      return axiosInstance(config);
    }

    return Promise.reject(error);
  }
);

async function appFetch<T>(
  url: AxiosRequestConfig<T>["url"],
  customConfig: AxiosRequestConfig = {}
): Promise<T> {
  const options: AxiosRequestConfig = {
    ...customConfig,
    url,
    headers: customConfig.headers ?? {},
    method: customConfig.method ?? "GET",
  };

  return new Promise<T>((resolve, reject) => {
    axiosInstance(options)
      .then((success) => resolve(success.data as T))
      .catch((error: Error | AxiosError<T>) => {
        if (axios.isAxiosError(error)) {
          reject(error.response);
        } else {
          reject(error);
        }
      });
  });
}

export default appFetch;
