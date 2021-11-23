import React from 'react';
import PropTypes from 'prop-types';
import Notifier from './Notifier';
import TooltipBase from './Tooltip';

const Tooltip = (props) => {
  const {children, ...rest} = props;

  if ('message' in props) {
    const {message} = props;

    if (!message) {
      return children;
    }

    return (
      <Notifier message={message} {...rest}>
        <div>
          {children}
        </div>
      </Notifier>
    );
  }

  return (
    <TooltipBase {...rest}>
      {children}
    </TooltipBase>
  );
};

Tooltip.propTypes = {
  message: PropTypes.object,
  children: PropTypes.any
};

export default Tooltip;