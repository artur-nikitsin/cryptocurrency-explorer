import { NavLink } from 'react-router-dom';
import React, { useRef } from 'react';
import returnColorClassName from '../../helpers/returnColorClassName';
import { useDispatch } from 'react-redux';
import { setNewOrderBy } from '../../redux/actionGenerators/actionGenerators';
import store from '../../redux/store';

export const MainCoinsTableHeaders = () => {
  const dispatch = useDispatch();
  return [
    { title: '#', className: '', dataIndex: 'number' },
    {
      title: 'Coin',
      dataIndex: 'coin',
      render: (text, data) => {
        return (
          <>
            <img className='coinLogo' src={data.image} alt='' />
            <NavLink to={`/coins/${data.key}`}>{text}</NavLink>
          </>
        );
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: true,
      sortDirections: ['ascend', 'descend'],
      onHeaderCell: (column) => {
        return {
          onClick: () => {
            store.dispatch(setNewOrderBy('market_cap_asc'));
          },
        };
      },
      render: (text, data) => {
        return (
          <>
            <span>{` ${data.vsCurrency} ${text}   `}</span>
          </>
        );
      },
    },
    {
      title: '1h',
      dataIndex: '1h',
      render: (text, data) => {
        return <span className={`${returnColorClassName(data.priceChange1h)}`}>{data.priceChange1h}</span>;
      },
    },
    {
      title: '24h',
      dataIndex: '24h',
      render: (text, data) => {
        return <span className={`${returnColorClassName(data.priceChange24h)}`}>{data.priceChange1h}</span>;
      },
    },
    {
      title: '7d',
      dataIndex: '7d',
      render: (text, data) => {
        return <span className={`${returnColorClassName(data.priceChange7d)}`}>{data.priceChange1h}</span>;
      },
    },
  ];
};
