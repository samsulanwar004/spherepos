export const Auth = (prevState, action) => {
    switch (action.type) {
      case 'RESTORE_LOGIN':
        return {
          ...prevState,
          account: action.account,
          isLogin: true,
          isLoading: false,
        };
      case 'LOG_IN':
        return {
          ...prevState,
          account: action.account,
          isLogin: true,
        };
      case 'LOG_OUT':
        return {
          ...prevState,
          account: null,
          isLogin: false,
        };
      default: return prevState;
    }
};