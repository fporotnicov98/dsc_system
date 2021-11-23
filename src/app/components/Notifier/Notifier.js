import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import NotifierCloseButton from './NotifierCloseButton';
import { inject } from 'mobx-react';
import { autorun } from 'mobx';
import Tooltip from '../Tooltip/index';

@inject(({ NotifyStore }) => {
  return {
    removeFromNotificationList: NotifyStore.removeFromNotificationList,
    removeFromCloseList: NotifyStore.removeFromCloseList,
    notifications: NotifyStore.notifications,
    notificationsContent: NotifyStore.notificationsContent,
    notificationsToClose: NotifyStore.notificationsToClose
  };
})

class Notifier extends Component {
  removeSnackbarFromStore(key, duration) {
    const { removeFromNotificationList } = this.props;

    setTimeout(() => {
      removeFromNotificationList(key);
    }, duration);
  }

  AUTOHIDE_PERIOD = 5000;

  componentDidMount() {
    autorun(() => {
      const {
        notifications = [],
        enqueueSnackbar,
        notificationsContent,
        removeFromCloseList,
        notificationsToClose,
        closeSnackbar
      } = this.props;

      notificationsToClose.forEach((key) => {
        closeSnackbar(key);
        removeFromCloseList(key);
      });

      notifications.forEach((key) => {
        const {
          message,
          variant,
          duration,
          variantBtn,
          titleBtn,
          actionBtn,
          onClose,
          ...options
        } = notificationsContent[key];

        const title = (
          <Tooltip
            title={message}
            withEllipsis={true}
          >
            <span>
              {message}
            </span>
          </Tooltip>
        );

        enqueueSnackbar(title, {
          variant,
          key,
          preventDuplicate: true,
          autoHideDuration: duration || this.AUTOHIDE_PERIOD,
          action: <NotifierCloseButton
            notifierKey={key}
            variantBtn={variantBtn}
            titleBtn={titleBtn}
            actionBtn={actionBtn}
          />,
          onClose: () => {
            this.removeSnackbarFromStore(key, 0);
            onClose && onClose();
          },
          ...options
        });

        this.removeSnackbarFromStore(key, duration || this.AUTOHIDE_PERIOD);
      });
    });
  }

  render() {
    return null;
  }
}

Notifier.propTypes = {
  notifications: PropTypes.array,
  notificationsToClose: PropTypes.array,
  enqueueSnackbar: PropTypes.func,
  removeFromNotificationList: PropTypes.func,
  removeFromCloseList: PropTypes.func,
  notificationsContent: PropTypes.object,
  closeSnackbar: PropTypes.func,
  variantBtn: PropTypes.oneOf([
    'icon',
    'text'
  ]),
  titleBtn: PropTypes.string,
  actionBtn: PropTypes.func
};

Notifier.defaultProps = {
  variantBtn: 'icon',
  titleBtn: 'l10n(Закрыть)'
};

export default withSnackbar(Notifier);
