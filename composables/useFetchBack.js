export const useFetchBack = async (path, options) => {
    const { data, error } = await useFetch(() => `https://sulu-admin.devup.kz/api/${path}`, options)
    console.log(error);
    return data
  }