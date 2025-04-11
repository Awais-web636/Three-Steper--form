import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAddressInfo } from '../Redux/formSlice';

function Addressinfo() {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBack = () => navigate('/');
  const handleNext = (e) => {
    e.preventDefault();
    dispatch(setAddressInfo(formData));
    navigate('/display');
  };

  return (
    <div className="address-info-step">
      <h2>Address Information</h2>
      <form onSubmit={handleNext}>

        <div className="form-group">
          <label htmlFor="street">Street Address</label>
          <input id="street" name="street" value={formData.street} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input id="city" name="city" value={formData.city} onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input id="state" name="state" value={formData.state} onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <label htmlFor="zipCode">Zipcode</label>
          <input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input id="country" name="country" value={formData.country} onChange={handleChange} required/>
        </div>


        <div className="button-group">
          <button type="button" onClick={handleBack}>Back</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Addressinfo;
