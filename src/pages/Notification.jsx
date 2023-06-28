import { useContext } from "react";
import { NotificationContext } from "../store/Notification/notification-context";
import NotificationItem from "../components/Notification/NotificationItem";

const Notification = () => {
  const notifCtx = useContext(NotificationContext);

  console.log(notifCtx);

  return (
    <div className="max-w-[47.9375rem] mr-auto ml-auto">
      <div className="my-23 mx-16 font-Plus-Jakarta-Sans md:bg-white md:my-60 md:rounded-xl md:py-32 md:px-32">
        <div className="flex justify-between">
          <div className="flex gap-x-8 items-center md:gap-x-10">
            <h1 className="text-19 leading-30 tracking-9 text-very-dark-blue font-medium md:text-23 md:leading-38 md:tracking-6 md:font-extrabold md:pl-2">
              Notifications
            </h1>
            <span className="rounded-md bg-blue text-white px-10 py-1 md:px-12">
              {notifCtx.unread}
            </span>
          </div>
          <button
            className="text-grayish-blue text-14 md:text-16"
            aria-label="mark all notifications as read"
            onClick={notifCtx.markAllAsRead}
          >
            Mark all as read
          </button>
        </div>
        <div className="mt-20 flex flex-col gap-y-11 md:mt-26 md:gap-y-7">
          {notifCtx.data.map((item) => {
            return <NotificationItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Notification;
