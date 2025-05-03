import React, { useState } from 'react';

const OTP_DIGIT_COUNTS = 6;

const OtpComponent = () => {
  const [inputArr, setInputArr] = useState(() =>
    Array(OTP_DIGIT_COUNTS).fill(1)
  );
  return (
    <div className='wrapper'>
      <h1>Validate OTP</h1>
      {inputArr.map((value, index) => (
        <input className='otp-input' key={index} type='text' value={value} />
      ))}
    </div>
  );
};

export default OtpComponent;
