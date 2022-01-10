import React from 'react';
import { combineReducers } from 'redux'
import { slotsBookingReducer } from './reducers';

const reducers = combineReducers({
    slots: slotsBookingReducer
})

export default reducers;