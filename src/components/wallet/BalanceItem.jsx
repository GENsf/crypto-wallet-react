import React from 'react';

const BalanceItem = ({coin}) => {
  const coinName = coin[0];
  const coinVal = coin[1].toLocaleString();

  const sendClick = () => {
    console.log('Send');
  };

  return (
    <div className="balance__card">
      <span className='balance__info'>
        {coinVal} <span className={'balance__coin-name ' + coinName}>
          {coinName}
        </span>
      </span>
      <button className='btn btn-main balance__send' onClick={sendClick}>Send</button>
    </div>
  );
};

export default BalanceItem;