const NotificationItem = ({
  id,
  type,
  type_text,
  who,
  where,
  when,
  read,
  message,
  image_url,
}) => {
  console.log(who);
  return (
    <div
      className={`flex gap-x-13 py-15 pl-16 pr-13 rounded-md md:pt-20 md:pl-20 md:gap-x-18 ${
        !read ? "bg-very-light-grayish-blue" : ""
      }`}
    >
      <img
        alt={who.name}
        src={who.avatar}
        className="w-40 h-40 md:w-45 md:h-45"
      />
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="text-14 leading-19 md:text-16 md:leading-22">
            <span className="text-very-dark-blue mr-6 md:mr-7 font-extrabold cursor-pointer hover:text-blue">
              {who.name}
            </span>
            <span className="text-grayish-blue mr-6 md:mr-7">{type_text}</span>
            {where && (
              <span className="text-dark-grayish-blue mr-8 font-extrabold cursor-pointer hover:text-blue">
                {where}
              </span>
            )}
            {!read && (
              <span className="w-8 h-8 rounded-full bg-red inline-block" />
            )}
          </div>
          <div className="text-14 text-gray md:text-16">{when}</div>
        </div>
        {message && (
          <p className="text-grayish-blue text-14 py-15 leading-18 px-14 mt-9 border border-grayish-blue rounded-md md:mt-12 md:py-17 md:px-20 md:mr-7 md:mb-5 md:text-16 md:leading-20 cursor-pointer hover:bg-light-grayish-blue-1">
            {message}
          </p>
        )}
      </div>
      {type === "comment_on_pic" && (
        <img
          src={image_url}
          alt="my picture"
          className="w-40 border border-transparent p-1 self-start md:w-45 md:ml-auto md:mr-7 cursor-pointer rounded-lg hover:border-light-grayish-blue-2"
        />
      )}
    </div>
  );
};

export default NotificationItem;
