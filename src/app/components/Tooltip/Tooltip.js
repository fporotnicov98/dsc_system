import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStylesUi from '@material-ui/core/styles/withStyles';
import TooltipUi from '@material-ui/core/Tooltip';

import s from './Tooltip.module.scss';

const styles = () => {
  return {
    popper: {
      pointerEvents: 'auto'
    },
    arrow: {
      color: '#373745'
    },
    arrowLight: {
      color: '#fff'
    },
    tooltip: {
      backgroundColor: '#373745',
      color: '#fff',
      fontSize: '12px',
      padding: '4px 8px',
      overflowWrap: 'break-word',
      fontWeight: 400,
      borderRadius: 0
    },
    tooltipLight: {
      backgroundColor: '#fff',
      color: '#373745',
      fontSize: '12px',
      padding: '4px 8px',
      overflowWrap: 'break-word',
      fontWeight: 400,
      borderRadius: 0
    },
    tooltipMaxWidth: {
      maxWidth: 'none',
      backgroundColor: '#373745',
      color: '#f7f7f7',
      fontSize: '12px',
      padding: '4px 8px',
      overflowWrap: 'break-word',
      fontWeight: 400,
      borderRadius: 0
    },
    tooltipPlacementLeft: {
      margin: '0 8px'
    },
    tooltipPlacementRight: {
      margin: '0 8px'
    },
    tooltipPlacementTop: {
      margin: '8px 0'
    },
    tooltipPlacementBottom: {
      margin: '8px 0'
    }
  };
};

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverflowed: false
    };
    this.textElement = React.createRef();
  }

  toggleOverflow = () => {

    this.setState({
      isOverflowed: this.textElement.current.scrollWidth > this.textElement.current.clientWidth ||
        this.textElement.current.scrollHeight > this.textElement.current.clientHeight
    });
  };

  componentDidMount() {
    const {withEllipsis} = this.props;

    withEllipsis && this.toggleOverflow();
  }

  componentDidUpdate(prevProps) {
    const {children, withEllipsis} = this.props;

    if (withEllipsis && prevProps.children !== children) {
      this.toggleOverflow();
    }
  }

  render() {
    const {isOverflowed} = this.state;
    const {
      title,
      lightTheme,
      children,
      classes,
      maxWidth,
      withEllipsis,
      numberRows,
      customClasses,
      ...elementProps
    } = this.props;

    return (
      <TooltipUi
        title={title}
        arrow={true}
        disableHoverListener={withEllipsis && !isOverflowed}
        classes={{
          popper: lightTheme ?
            classes.popperLight :
            classes.popper,
          tooltip: lightTheme ?
            classes.tooltipLight :
            maxWidth && classes.tooltip,
          arrow: lightTheme ?
            classes.arrowLight :
            classes.arrow,
          tooltipPlacementLeft: classes.tooltipPlacementLeft,
          tooltipPlacementRight: classes.tooltipPlacementRight,
          tooltipPlacementTop: classes.tooltipPlacementTop,
          tooltipPlacementBottom: classes.tooltipPlacementBottom,
          ...customClasses
        }}
        {...elementProps}
      >
        {
          withEllipsis ? (
            <div
              ref={this.textElement}
              className={s.ellipsis}
              style={
                numberRows === 1 ?
                  {display: 'block'} :
                  {
                    lineClamp: numberRows,
                    WebkitLineClamp: numberRows
                  }
              }
            >
              {children}
            </div>
          ) : children
        }
      </TooltipUi>
    );
  }
}

export default withStylesUi(styles)(Tooltip);

Tooltip.propTypes = {
  title: PropTypes.any,
  classes: PropTypes.object,
  placement: PropTypes.string,
  children: PropTypes.node,
  lightTheme: PropTypes.bool,
  disableFocusListener: PropTypes.bool,
  customClasses: PropTypes.object,
  maxWidth: PropTypes.bool,
  withEllipsis: PropTypes.bool,
  numberRows: PropTypes.number
};

Tooltip.defaultProps = {
  numberRows: 2,
  title: ''
};
