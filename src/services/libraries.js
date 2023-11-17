import api from "./apiConfig";

export const getLibrary = async (userId) => {
  try {
    const response = await api.get(`/libraries/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addBook = async (userId, bookId) => {
  try {
    const response = await api.post(`/libraries/${userId}/book/${bookId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeBook = async (libraryId, bookReviewId) => {
  try {
    const response = await api.put(
      `/libraries/${libraryId}/bookReview/${bookReviewId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const editBookReview = async (libraryId, bookReviewId, params) => {
  try {
    const response = await api.put(
      `/libraries/${libraryId}/bookReviewEdit/${bookReviewId}`,
      params
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
