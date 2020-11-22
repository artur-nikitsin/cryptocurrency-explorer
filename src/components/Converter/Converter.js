import { InputNumber } from 'antd';
import React, { useState } from 'react';
import './converter.scss';
import { RightOutlined } from '@ant-design/icons';

export const Converter = ({ coin, vsCurrency, price }) => {
  const [convertedValue, setConverted] = useState(price);
  const [value, setValue] = useState(1);

  const onChange = (value) => {
    if (typeof value === 'number') {
      setValue(value);
      setConverted(value * price);
    }
    if (value === '') {
      setValue(0);
      setConverted(0);
    }
  };

  return (
    <div className='inputsWrapper'>
      <span>
        <strong>{coin.toUpperCase()}</strong>
      </span>
      <InputNumber
        className='currencyInput'
        size={'large'}
        defaultValue={1}
        min={0}
        formatter={() => ` ${value}`}
        parser={(value) => value}
        onChange={onChange}
      />

      <RightOutlined />
      <InputNumber
        className='currencyInput'
        defaultValue={price}
        size={'large'}
        formatter={() => ` ${convertedValue}  `}
      />
      <span>
        <strong>{vsCurrency.toUpperCase()}</strong>
      </span>
    </div>
  );
};
