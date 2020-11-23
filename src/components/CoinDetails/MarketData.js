import React from 'react';

// eslint-disable-next-line react/prop-types
const MarketData = ({ data: { market_data, vsCurrency } }) => {
  return (
    <div className='marketData'>
      <p>
        <strong> Market data:</strong>
      </p>
      <ul className='dataList'>
        {/* eslint-disable-next-line react/prop-types */}
        <li>{`Market cap: ${market_data.market_cap[vsCurrency]} ${vsCurrency}`}</li>
        <li>{`24 low/high: ${market_data.low_24h[vsCurrency]}/${market_data.high_24h[vsCurrency]} ${vsCurrency}`}</li>
        <li>{`Fully diluted valuation: ${market_data.fully_diluted_valuation[vsCurrency]} ${vsCurrency}`}</li>
        <li>{`Circulating supply: ${market_data.circulating_supply}`}</li>
        <li>{`Max supply: ${market_data.max_supply}`}</li>
      </ul>
    </div>
  );
};
export default MarketData;
