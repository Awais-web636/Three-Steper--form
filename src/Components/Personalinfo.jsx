import React, { useState } from 'react';
import '../CSS/personalinfo.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPersonalInfo } from '../Redux/formSlice';

function Personalinfo() {
  const [formData, setFormDataState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPersonalInfo(formData));
    navigate('/address');
  };

  return (
    <div className="personal-info-step">
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>


        <div className="button-group">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Personalinfo;
