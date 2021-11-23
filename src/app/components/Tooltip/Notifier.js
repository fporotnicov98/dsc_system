import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';

class Notifier extends Component {
  timer;

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  componentDidMount() {
    this.open();
  }

  componentDidUpdate(prevProps) {
    const {message: prevMessage} = prevProps;
    const {message} = this.props;

    // Если сообщения разные показываем уведомление
    if (JSON.stringify(message) !== JSON.stringify(prevMessage)) {
      this.open();
    }
  }

  open = () => {
    this.setState({open: true}, this.dispose);
  };

  close = () => {
    this.setState({open: false});
  };

  dispose = () => {
    const {delay} = this.props;

    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(this.close, delay);
  };

  render() {
    const {open} = this.state;

    const {
      message: {
        id,
        message = ''
      },
      children,
      ...options
    } = this.props;

    return (
      <Tooltip
        id={`${id}`}
        PopperProps={{
          disablePortal: true,
          open
        }}
        disableFocusListener={true}
        disableHoverListener={true}
        disableTouchListener={true}
        title={message}
        placement={'bottom'}
        {...options}
      >
        {children}
      </Tooltip>
    );
  }
}

Notifier.propTypes = {
  message: PropTypes.object,
  delay: PropTypes.number,
  children: PropTypes.node
};

Notifier.defaultProps = {
  delay: 3000,
  message: {}
};

export default Notifier;
