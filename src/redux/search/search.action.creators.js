import { SEARCH_BOOK } from "./search.types";

//Action Creators
const searchbook = (book, college) => {
    return {
        type: SEARCH_BOOK,
        payload: { book, college },
    };
};

export { searchbook };
