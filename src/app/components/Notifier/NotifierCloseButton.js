import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import { Button } from '@material-ui/core'

const NotifierCloseButton = (
  { notifierKey, closeSnackbar, variantBtn, titleBtn, actionBtn }
) => {
  const closeFunc = () => closeSnackbar(notifierKey);
  const actionFunc = actionBtn ?
    () => actionBtn(closeFunc) :
    closeFunc;

  return variantBtn === 'icon' ? (
    <CloseIcon
      onClick={closeFunc}
    />
  ) : (
    <Button
      view={'text'}
      size={'small'}
      dense={true}
      onClick={actionFunc}
    >
      {titleBtn}
    </Button>
  );
};

export default withSnackbar(NotifierCloseButton);

NotifierCloseButton.propTypes = {
  notifierKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  closeSnackbar: PropTypes.func,
  variantBtn: PropTypes.oneOf([
    'icon',
    'text'
  ]),
  titleBtn: PropTypes.string,
  actionBtn: PropTypes.func
};

NotifierCloseButton.defaultProps = {
  variantBtn: 'icon',
  titleBtn: 'l10n(Закрыть)'
};
