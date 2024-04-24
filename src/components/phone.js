import React, { useState } from 'react';
import Input from './Input'; // Import your Input component
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CheckPhone = () => {
  const [phone, setPhone] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handlePhoneChange = (value, country) => {
    setPhone(value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <label htmlFor="phone">Phone:</label>
      <Input
        placeholder="Phone"
        type="tel" // Use type="tel" for phone number input
        onFocus={handleFocus}
        onBlur={handleBlur}
        name="phone"
      >
        <PhoneInput
          inputProps={{
            name: 'phone',
            id: 'phone',
            placeholder: 'Enter phone number',
            onFocus: handleFocus,
            onBlur: handleBlur,
          }}
          country={'us'} // Default country (optional)
          value={phone}
          onChange={handlePhoneChange}
          inputClass={`form-control${isFocused ? ' focused' : ''}`}
        />
      </Input>
    </div>
  );
};

export default CheckPhone;
