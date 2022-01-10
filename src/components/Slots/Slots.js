import React from 'react'
import { Link } from 'react-router-dom'
import './Slot.css'

export default function Slots({ id, startTime, endTime, booked }) {
    return (
        <div className={booked ? " input-container-slot booked-appoitment-card" : 'input-container-slot'}>
            <div className="container-slot ">
                <h4><b>{`${startTime} - ${endTime}`}</b></h4>
                <Link to={`scheduling/${id}`} >
                    <button
                        color="primary"
                        data-timeslot-id={id}
                        className={booked ? "add-btn-slot booked-appoitment-btn" : "add-btn-slot "}
                    >
                        {booked ? 'Update your time slot' : 'Book This Time Slot'}
                    </button>
                </Link>
            </div>
        </div>
    )
}
