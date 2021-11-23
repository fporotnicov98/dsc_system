import React from 'react';
import Notifier from '../components/Notifier/Notifier';
import {SnackbarProvider} from 'notistack';
import PropTypes from 'prop-types';
import {styles} from '../components/Notifier/styles';
import {withStyles} from '@material-ui/core/styles';

import Success from '@material-ui/icons/CheckCircleOutline';
import Error from '@material-ui/icons/ErrorOutline';
import Warning from '@material-ui/icons/ReportProblemOutlined';
import InfoIcon from '@material-ui/icons/Info';

const Global = (props) => {
  const {children, classes} = props;

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      hideIconVariant={false}
      iconVariant={{
        success: <Success />,
        error: <Error />,
        warning: <Warning />,
        info: <InfoIcon />
      }}
      classes={{
        variantSuccess: classes.variantSuccess,
        variantError: classes.variantError,
        variantWarning: classes.variantWarning,
        message: classes.message
      }}
    >
      <Notifier />
      {children}
    </SnackbarProvider>
  );
};

Global.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object
};

export default withStyles(styles)(Global);
