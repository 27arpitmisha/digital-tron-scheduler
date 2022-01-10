import React from 'react';
import { GET_ALL_PRODUCTS, GET_PRODUCTS, actionConstants } from "../constants/actionConstants";

export const bookYourSlot = (payload) => {
    return {
        type: actionConstants.BOOK_SLOT,
        payload: payload
    }
}
