const THEQUOTESHUB_API_URL = "https://thequoteshub.com/api";
const URL_RANDOM_QUOTE = THEQUOTESHUB_API_URL;
const URL_RANDOM_BY_AUTHOR = `${THEQUOTESHUB_API_URL}/authors/<%AUTHOR%>`; // Endpoint for fetching by author needs verification from API docs

const AUTHOR_TAG = "<%AUTHOR%>";

const API_ENDPOINTS = {
  THEQUOTESHUB_API_URL,
  URL_RANDOM_QUOTE,
  URL_RANDOM_BY_AUTHOR,
  AUTHOR_TAG,
};

export { API_ENDPOINTS };
export { authors } from "./authors";
export { tags } from "./tags";
