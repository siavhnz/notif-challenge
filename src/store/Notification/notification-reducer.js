export const initialState = {
  data: [],
  unread: 0,
};

export const notificationReducer = (state, action) => {
  if (action.type === "LOAD_DATA") {
    return {
      data: action.payload,
      unread: unreadNotificationsCount(action.payload),
    };
  }

  if (action.type === "MARK_ALL_AS_READ") {
    return {
      data: state.data.map((item) => {
        return {
          ...item,
          read: true,
        };
      }),
      unread: 0,
    };
  }

  return state;
};

const unreadNotificationsCount = (array) => {
  const count = array.reduce((total, item) => {
    if (!item.read) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);

  return count;
};
