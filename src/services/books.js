import api from "./apiConfig";

export const getBooks = async () => {
  try {
    const response = await api.get("/books");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBook = async (title) => {
  try {
    const response = await api.get(`/books/${title}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
