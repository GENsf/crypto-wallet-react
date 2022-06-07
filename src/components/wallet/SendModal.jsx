import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleModal } from '../../store/slices/modalSlice';
import { sendAction } from '../../store/slices/walletSlice';

const SendModal = () => {
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.modal);
  const coinList = useSelector((state) => state.wallet);
  const currency = useSelector((state) => state.currency.value);

  const [balanceActive, SetBalanceActive] = useState({
    BTC: false,
    ETH: false,
    USD: false,
    other: false,
  });
  const [balanceClass, SetBalanceClass] = useState('');

  const [priceInput, setPriceInput] = useState('');
  const [priceConvert, setPriceConvert] = useState(0);
  const [errorInput, setErrorInput] = useState(false);

  const numberFormat = (value) => {
    return parseFloat(Number(value).toFixed(2)).toLocaleString();
  };

  const balanceClick = (coin) => {
    SetBalanceClass(coin);
    switch (coin) {
    case 'BTC':
      SetBalanceActive({BTC: true, ETH: false, USD: false, other: false});
      break;
    case 'ETH':
      SetBalanceActive({BTC: false, ETH: true, USD: false, other: false});
      break;
    case 'USD':
      SetBalanceActive({BTC: false, ETH: false, USD: true, other: false});
      break;
    case 'other':
      SetBalanceActive({BTC: false, ETH: false, USD: false, other: true});
      break;
    default:
      break;
    }
    setPriceInput('');
    setPriceConvert(0);
    setErrorInput(false);
  };

  const priceInputChange = (value) => {
    value = value.trim().replace(/[^.\d]/g, '');
    setPriceInput(value);
    if (value > coinList[modal.coin]) {
      setErrorInput(true);
      setPriceConvert(0);
      return;
    }
    setErrorInput(false);
    if (balanceActive.BTC === true) {
      setPriceConvert(value * currency[modal.coin] / currency.BTC);
    } else if (balanceActive.ETH === true) {
      setPriceConvert(value * currency[modal.coin] / currency.ETH);
    } else if (balanceActive.USD === true) {
      setPriceConvert(value * currency[modal.coin]);
    } else if (balanceActive.other === true) {
      setPriceConvert(value);
    } else {
      setPriceConvert(0);
    }
  };

  const modalSendClick = () => {
    dispatch(sendAction({
      from: modal.coin,
      fromValue: priceInput,
      to: balanceClass,
      toValue: priceConvert,
    }));
    hideModal();
  };

  const hideModal = () => {
    dispatch(toggleModal({show: false, coin: ''}));
    SetBalanceActive({BTC: false, ETH: false, USD: false, other: false});
    SetBalanceClass('');
    setPriceInput('');
    setPriceConvert(0);
    setErrorInput(false);
  };

  return (
    <section
      className='send-modal__background'
      style={modal.show ? {display: 'block'} : {display: 'none'}}
      onClick={hideModal}
    >
      <section className="send-modal__content" onClick={(event) => event.stopPropagation()}>
        <h1 className='send-modal__title'>Where to send <span className={modal.coin}>{modal.coin}</span></h1>
        <p className={'send-modal__subtitle' + (errorInput ? ' error' : '')}>
          You have {
            numberFormat(coinList[modal.coin])
          } {modal.coin}
        </p>
        <div className='send-modal__balance-list'>
          { Object.entries(coinList).map((cur, i, arr) => {
            if (arr[i][0] !== modal.coin) {
              return <div
                className={'balance__card ' + cur[0] + (balanceClass === cur[0] ? ' active' : '')}
                key={i}
                onClick={() => balanceClick(cur[0])}
              >
                <p className='balance__info'>{
                  numberFormat(cur[1])
                } <span className={'balance__coin-name ' + cur[0]}>{cur[0]}</span>
                </p>
              </div>;
            } else return null;
          })}
          <div
            className={'balance__card other ' + (balanceActive.other ? ' active' : '')}
            onClick={() => balanceClick('other')}
          >
            <p className='balance__info' >Pay to other account</p>
          </div>
        </div>
        {Object.values(balanceActive).includes(true) ?
          <div className="send-inputs">
            <div>
              <input
                type="text"
                className={'send-inputs__input' + (errorInput ? ' error' : '')}
                value={priceInput}
                onChange={(event) => priceInputChange(event.target.value)}
                placeholder="Enter price"
              />
              <label className='send-inputs__subtitle'> {
                balanceClass !== 'other' ? modal.coin : ''
              } = {
                numberFormat(priceConvert)
              } {
                balanceClass !== 'other' ? balanceClass : modal.coin
              }
              </label>
            </div>
            <button className='btn btn-main send-btn' onClick={modalSendClick} disabled={errorInput}>
              Send
            </button>
          </div>
          : <></>}
      </section>
    </section>
  );
};

export default SendModal;