import api from "./apiConfig";

export const getBooks = async () => {
  try {
    const response = await api.get("/books");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBook = async (id) => {
  try {
    const response = await api.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
