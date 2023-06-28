import { createContext, useEffect, useReducer } from "react";
import { initialState, notificationReducer } from "./notification-reducer";
import { data } from "./notifications";

export const NotificationContext = createContext({
  data: [
    {
      id: 1,
      type: "reached_to_you",
      type_text: "reacted to your recent post",
      who: {
        name: "Mark Webber",
        avatar: "/images/avatar-mark-webber.webp",
      },
      where: "My first tournament today!",
      when: "1m ago",
      read: false,
    },
  ],
  unread: 0,
  markAllAsRead: () => {},
});

const NotificationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  useEffect(() => {
    //load from server
    dispatch({ type: "LOAD_DATA", payload: data });
  }, []);

  const markAllAsRead = () => {
    dispatch({ type: "MARK_ALL_AS_READ" });
  };

  const value = {
    ...state,
    markAllAsRead,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
