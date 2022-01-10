import React, { useEffect, useState } from 'react'
import {
    Box,
    TextField,
    Button,
} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { bookYourSlot } from '../../redux/actions/action';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { selectUpdatedValue } from '../../redux/reducers/reducers';
import './SchedulingForm.css';

export default function SchedulingForm() {
    const [formFields, setFormFields] = useState({
        contactName: "",
        contactLastName: "",
        contactPhone: ''
    });
    const [errors, setErrors] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (
        event
    ) => {
        setErrors('');
        const value = event.target.value;
        const name = event.target.name;
        setFormFields({ ...formFields, [name]: value });
    };

    const id = useParams('id');
    const state = useSelector(state => state.slots);

    useEffect(() => {
        const updationValue = selectUpdatedValue(state, id);
        setErrors('');
        console.log(updationValue)
        if (updationValue.booked) {
            setFormFields({
                contactLastName: updationValue.contactLastName,
                contactPhone: updationValue.contactPhone,
                contactName: updationValue.contactName
            })
        }

    }, []);
    const onBookHandler = () => {
        if (formFields.contactLastName === '' || formFields.contactName === '' || formFields.contactPhone === '') {
            setErrors('one or more field found empty')
            return;
        }
        const payload = {
            ...formFields,
            ...id
        }
        dispatch(bookYourSlot(payload));
        setErrors('');
        navigate('/');
    }
    return (
        <div className="container"><h3>Book your Appointment</h3>
            <div className="input-container">
                <input
                    className="input"
                    onChange={handleChange}
                    name="contactName"
                    value={formFields.contactName}
                    placeholder="Enter First Name"
                />
                <input
                    className="input"
                    name="contactLastName"
                    value={formFields.contactLastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                />
                <input
                    className="input"
                    type='number'
                    name="contactPhone"
                    value={formFields.contactPhone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                />
                {errors.length > 0 && <span style={{ color: 'red' }}>{errors}</span>}      <br />
                <button
                    className="add-btn"
                    onClick={onBookHandler}
                >
                    Save
                </button>
                &nbsp;&nbsp;
                <Link to="/">
                    <button
                        className="add-btn"
                    >
                        Cancel
                    </button>
                </Link>

            </div>
        </div>
    )
}
