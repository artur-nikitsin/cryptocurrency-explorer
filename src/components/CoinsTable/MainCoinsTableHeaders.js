import { NavLink } from 'react-router-dom';
import React from 'react';
import returnColorClassName from '../../helpers/returnColorClassName';

const MainCoinsTableHeaders = ({ orderBy, setNewOrderBy }) => {
  return [
    { title: '#', className: '', dataIndex: 'number' },
    {
      title: 'Coin',
      dataIndex: 'coin',
      sorter: true,
      showSorterTooltip: false,
      onHeaderCell: () => {
        return {
          onClick: () => {
            setNewOrderBy(orderBy === 'gecko_asc' ? 'gecko_desc' : 'gecko_asc');
          },
        };
      },
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
      sorter: (a, b) => +a.price - +b.price,
      sortDirections: ['ascend', 'descend'],
      render: (price, data) => {
        return (
          <>
            <span>{` ${data.vsCurrency} ${price || 0}   `}</span>
          </>
        );
      },
    },
    {
      title: '1h',
      dataIndex: 'priceChange1h',
      sorter: (a, b) => +a.priceChange1hNumber - +b.priceChange1hNumber,
      sortDirections: ['ascend', 'descend'],
      render: (priceChange1h, data) => {
        return <span className={`${returnColorClassName(data.priceChange1h)}`}>{data.priceChange1h}</span>;
      },
    },
    {
      title: '24h',
      dataIndex: 'priceChange24h',
      sorter: (a, b) => +a.priceChange24hNumber - +b.priceChange24hNumber,
      sortDirections: ['ascend', 'descend'],
      render: (priceChange24h, data) => {
        return <span className={`${returnColorClassName(data.priceChange24h)}`}>{data.priceChange24h}</span>;
      },
    },
    {
      title: '7d',
      dataIndex: 'priceChange1h',
      sorter: (a, b) => +a.priceChange7dNumber - +b.priceChange7dNumber,
      sortDirections: ['ascend', 'descend'],
      render: (priceChange7d, data) => {
        return <span className={`${returnColorClassName(data.priceChange7d)}`}>{data.priceChange7d}</span>;
      },
    },
  ];
};

export default MainCoinsTableHeaders;
