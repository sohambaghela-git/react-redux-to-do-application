import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addToDo, deleteToDo} from "../redux/actions/index";

function FormDetail(){
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo(formData));
        // Optionally, you can clear the form after submitting
        setFormData({
            name: '',
            description: '',
            date: ''
        });
    };

    return(
        <div className="container mt-4">
            <h2>To Do Form</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    />
                    {/* {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>} */}
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    ></textarea>
                    {/* {errors.description && <div style={{ color: 'red' }}>{errors.description}</div>} */}
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date:</label>
                    <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    />
                    {/* {errors.date && <div style={{ color: 'red' }}>{errors.date}</div>} */}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormDetail;