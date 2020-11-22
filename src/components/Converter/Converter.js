import { InputNumber } from 'antd';
import React, { useState } from 'react';
import './converter.scss';
import { RightOutlined } from '@ant-design/icons';

export const Converter = ({ coin, vsCurrency, price }) => {
  const [convertedValue, setConverted] = useState(price);

  const onChangeFirst = (value) => {
    setConverted(value * price);
  };
  const onChangeSecond = (value) => {
    console.log('changed', value);
  };

  return (
    <div className='inputsWrapper'>
      <InputNumber
        className='currencyInput'
        size={'large'}
        defaultValue={1}
        min={0}
        formatter={(value) => ` ${value} ${coin}`}
        parser={(value) => value}
        onChange={onChangeFirst}
      />
      <RightOutlined />
      <InputNumber
        className='currencyInput'
        defaultValue={100}
        size={'large'}
        formatter={(value) => ` ${convertedValue}  ${vsCurrency}`}
        onChange={onChangeSecond}
      />
    </div>
  );
};
