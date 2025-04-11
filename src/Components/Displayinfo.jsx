import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {resetForm} from '../Redux/formSlice';
import '../CSS/display.css'
import '@fontsource/poppins';
function Display() {
  const dispatch = useDispatch();
  const { personalInfo, addressInfo } = useSelector((state) => state.form);

  const handleClear = () => {
    dispatch(resetForm());
  };

  return (
    <div className="display-data">
      <h2>Submitted Information</h2>

      {/* Personal Info Table */}
      <h3>Personal Info</h3>
      <table border="2" cellPadding="10" cellSpacing="0" style={{ marginBottom: '2rem', width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{personalInfo.firstName}</td>
            <td>{personalInfo.lastName}</td>
            <td>{personalInfo.email}</td>
            <td>{personalInfo.phone}</td>
          </tr>
        </tbody>
      </table>

      {/* Address Info Table */}
      <h3>Address Info</h3>
      <table border="2" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{addressInfo.street}</td>
            <td>{addressInfo.city}</td>
            <td>{addressInfo.state}</td>
            <td>{addressInfo.zipCode}</td>
            <td>{addressInfo.country}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClear} style={{ marginTop: '20px' }}>
        Clear Data
      </button>
    </div>
  );
}

export default Display;
