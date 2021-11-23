const styles = {
  root: {
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '.25px',
    boxShadow: 'none',
    padding: '8px',
    backgroundColor: `#373745 !important`,
    color: `#dcdcdf !important`,
    minHeight: '32px',
    maxHeight: '48px',
    minWidth: '140px',
    maxWidth: '350px',
    '& svg': {
      height: '16px',
      width: '16px'
    }
  },
  variantSuccess: {
    '& svg': {
      color: `#69b849 !important`
    }
  },
  variantError: {
    '& svg': {
      color: `#ff4f4f !important`
    }
  },
  variantWarning: {
    '& svg': {
      color: `#e9723e !important`
    }
  },
  message: {
    flex: 1,
    padding: '0px',
    display: 'flex',
    alignItems: 'flex-start',
    '& span': {
      whiteSpace: 'wrap',
      fontSize: '12px',
      lineHeight: '16px'
    },
    '& svg': {
      marginRight: '4px',
      color: `#898993`
    }
  },
  action: {
    marginRight: '0px',
    paddingLeft: '4px',
    alignSelf: 'start',
    cursor: 'pointer',
    '& svg': {
      color: `#898993 !important`,
      '&:hover': {
        color: `#dcdcdf !important`
      }
    }
  }
};

export {
  styles
};
