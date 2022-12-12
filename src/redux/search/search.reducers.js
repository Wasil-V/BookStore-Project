import { SEARCH_BOOK } from "./search.types";


//Initial States
const initialstate = {
    books: [{ bookName: "" }],
    colleges: [{ collegeName: "" }],
};

// Reducer for the Search Function
let searchReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SEARCH_BOOK:
            return {
                ...state,
                books: [
                    {
                        bookName: [action.payload.book],
                    },
                ],
                colleges: [
                    {
                        collegeName: [action.payload.college],
                    },
                ],
            };
        default:
            return state;
    }
};

export { searchReducer };
