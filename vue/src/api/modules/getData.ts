export default (instance: any) => ({
  async list(url: string) {
    const { data } = await instance.get(url);
    return data;
  },
});
