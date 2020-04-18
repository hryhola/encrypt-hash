/* eslint-disable no-extend-native */
import React, { useState } from 'react';

import sha1 from 'sha-1';
import md5 from 'md5';

import './App.scss';

function App() {
  const [sourceText, setSourceText] = useState('');

  const handleDecryptInput = ({ target: { value } }) => {
    setSourceText(value);
  };

  return (
    <div className='App'>
      <div>
        <div className='input'>
          <span>Текст</span>
          <input type='text' onChange={handleDecryptInput} value={sourceText} />
        </div>
        <div className='input'>
          <span>SHA-1</span>
          <input
            className='small'
            type='text'
            value={sha1(sourceText)}
            disabled
          />
        </div>
        <div className='input'>
          <span>MD5</span>
          <input
            className='small'
            type='text'
            value={md5(sourceText)}
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default App;
