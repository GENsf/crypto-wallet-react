import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleModal } from '../../store/slices/modalSlice';

const BalanceItem = ({coin}) => {
  const dispatch = useDispatch();

  const coinName = coin[0];
  const coinVal = coin[1];

  const sendClick = () => {
    dispatch(
      toggleModal({
        show: true,
        coin: coinName,
      })
    );
  };

  return (
    <div className="balance__card">
      <span className='balance__info'>
        {parseFloat(Number(coinVal).toFixed(2)).toLocaleString()} <span className={'balance__coin-name ' + coinName}>
          {coinName}
        </span>
      </span>
      <button className='btn btn-main balance__send' onClick={sendClick}>Send</button>
    </div>
  );
};

export default BalanceItem;