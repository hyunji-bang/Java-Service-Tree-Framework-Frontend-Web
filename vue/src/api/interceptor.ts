export function setInterceptors(instance: any) {
  instance.interceptors.request.use(
    (config: any) => {
      return config;
    },
    (err: any) => {
      return Promise.reject(err);
    },
  );
  instance.interceptors.response.use(
    (config: any) => {
      return config;
    },
    (err: any) => {
      return Promise.reject(err);
    },
  );

  return instance;
}
