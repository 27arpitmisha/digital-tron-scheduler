import React from 'react';
import { actionConstants } from "../constants/actionConstants";
import timeSlot from '../../TimeSlots/TimeSlots';

export const slotsBookingReducer = (state = timeSlot, action) => {

    switch (action.type) {
        case actionConstants.BOOK_SLOT: {
            const toBeUpdatedSlot = state.filter((slots) => {
                if (slots.id == action.payload.id) {
                    return slots;
                }
            });
            const obj = Object.assign({}, ...toBeUpdatedSlot)

            const updatedSlot = { ...obj, contactName: action.payload.contactName, contactLastName: action.payload.contactLastName, contactPhone: action.payload.contactPhone, booked: true }
            const allSlots = [...state]
            allSlots[updatedSlot.id] = updatedSlot

            return allSlots
        }
        default: return state;
    }
}

export const selectUpdatedValue = (state, id) => {
    return Object.assign({}, ...state.filter((slots) => {
        if (slots.id == id.id) {
            return slots;
        }
    }));
}

