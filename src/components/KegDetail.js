import React from 'react';
import PropTypes from 'prop-types';

function KegDetail (props) {
  const {keg, onClickingDelete, onClickingSell} = props;
  let sellButton;
  let quantity;
  if (keg.quantity !== 0) {
    quantity = <h4>{keg.quantity}</h4>;
    sellButton = <button onClick={ () => onClickingSell(false)}>Sell Pint</button>;
  } else {
    quantity = <h4>Keg is pintless, pick/switch-to another keg</h4>;
  };

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name}</h3>
      <h4>{keg.brand}</h4>
      <h4>{keg.price}</h4>
      <h4>{keg.alcoholContent}</h4>
      {quantity}
      {sellButton}
      <button onClick = { () => onClickingSell(true)}>Sell a pint</button>
      <button onClick = { props.onClickingEdit }>Update Keg Details</button>
      <button onClick = { () => onClickingDelete(keg.id)}>Remove Keg</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default KegDetail;