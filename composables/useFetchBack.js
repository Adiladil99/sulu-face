export const useFetchBack = async (path, options) => {
    const { data, error } = await useFetch(() => `http://localhost:3002/api/${path}`, options)
    console.log(error);
    return data
  }