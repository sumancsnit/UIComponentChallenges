import React, { useEffect, useRef, useState } from 'react';

const OTP_DIGIT_COUNTS = 6;

const initialArray = () => Array(OTP_DIGIT_COUNTS).fill('');

const OtpComponent = () => {
  const [inputArr, setInputArr] = useState(initialArray());
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current?.at(0)?.focus();
  }, []);

  const handleOnChange = (event, index) => {
    let { value } = event.target;
    value = value.trim();
    if (isNaN(value)) return;
    // if (value && !/^[0-9]$/.test(value)) return;
    const newArray = [...inputArr];
    newArray[index] = value.at(-1) || '';
    setInputArr(newArray);
    value && refArr.current?.at(index + 1)?.focus();
  };

  const handleKeyDown = (event, index) => {
    const { key, target } = event;
    const value = target.value;
    if (key === 'Backspace' && !value && index) {
      refArr.current?.at(index - 1)?.focus();
    }
    // else if (key === 'ArrowRight' && value && index < inputArr.length) {
    //   refArr.current?.at(index + 1)?.focus();
    // } else if (key === 'ArrowLeft' && value && index > 0) {
    //   refArr.current?.at(index - 1)?.focus();
    // }
  };

  return (
    <div className='wrapper'>
      <h1>Validate OTP</h1>
      {inputArr.map((value, index) => (
        <input
          className='otp-input'
          key={index}
          type='text'
          value={value}
          onChange={(e) => handleOnChange(e, index)}
          ref={(ele) => (refArr.current[index] = ele)}
          onKeyDown={(evt) => handleKeyDown(evt, index)}
        />
      ))}
    </div>
  );
};

export default OtpComponent;
