import React, { useState } from 'react';

const ChipsInput = () => {
  const [value, setValue] = useState('');
  const [chips, setChips] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && value.trim() !== '') {
      const newChip = {
        id: idCounter,
        label: value.trim(),
      };
      setChips([...chips, newChip]);
      setIdCounter((idCounter) => idCounter + 1);
      setValue('');
    }
  };

  const handleDeleteChip = (id) => {
    setChips(chips.filter((chip) => chip.id !== id));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '30px 0',
      }}
    >
      <h2>Chips Input</h2>
      <input
        type='text'
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder='Chip name...'
        style={{ padding: '0.5rem', width: '200px' }}
      />
      <div
        style={{
          margin: '1rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {chips.map((chip) => (
          <div
            key={chip.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '0.5rem',
              backgroundColor: '#002984',
              borderRadius: '1rem',
              padding: '5px 10px',
              fontWeight: 'bold',
            }}
          >
            <span>{chip.label}</span>
            <button
              onClick={() => handleDeleteChip(chip.id)}
              style={{
                background: 'transparent',
                border: 'none',
                marginLeft: '.5rem',
                cursor: 'pointer',
                color: 'red',
                marginTop: '3px',
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsInput;
