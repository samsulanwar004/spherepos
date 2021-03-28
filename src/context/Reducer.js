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

export const Cart = (prevState, action) => {
  switch (action.type) {
    case 'INCREASE_CART':

      var bags = prevState.bags;

      var findBag = bags.find(data => data.id === action.bag.id);

      if (typeof findBag == 'undefined') {
        bags = bags.concat({
          id: action.bag.id,
          nama: action.bag.nama,
          price: action.bag.price,
          qty: 1
        });
      } else {
        bags = bags.map((data) => {
          if (data.id === action.bag.id) {
            return {
              id: action.bag.id,
              nama: action.bag.nama,
              price: action.bag.price,
              qty: data.qty + 1
            }
          } else {
            return data
          }
        })
      }

      return {
        ...prevState,
        bags: bags,
      };
    case 'DECREASE_CART':
      var bags = prevState.bags;

      return {
        ...prevState,
        bags: bags,
      };
    default: return prevState;
  }
};