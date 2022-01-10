import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import './Scheduler.css'

import Slots from '../Slots/Slots';
export default function Scheduler() {
    const timeSlots = useSelector(state => state.slots);
    return (
        <div className="scheduler">
            <Header />
            {
                timeSlots.map(({ id, startTime, endTime, booked }) => {
                    return <Slots key={id} id={id} startTime={startTime} endTime={endTime} booked={booked} />
                })
            }
        </div>
    )
}
