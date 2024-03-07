import { CHANGE_SEARCH_FIELD } from "./constans.js";

export const setSearchFeild = (text) => ({

    type: CHANGE_SEARCH_FIELD,
    payload: text


})