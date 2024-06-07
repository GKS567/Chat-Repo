function Message({ type, message }) {
  const baseMessage = "flex max-w-[70%] gap-5";

  const styles = {
    base: baseMessage,
    own: baseMessage + " self-end",
  };

  if (type === "own")
    return (
      <div className={styles[type]}>
        <div className="flex flex-1 flex-col gap-[5px]">
          {message.img && (
            <img
              className="h-[300px] w-full rounded-lg object-cover"
              src={message.img}
              alt=""
            />
          )}
          <p className="rounded-[10px] bg-[#5183fe] p-5">{message.text}</p>
          {/* <span className="text-sm">{message}</span> */}
        </div>
      </div>
    );

  return (
    <div className={styles[type]}>
      <div className="flex flex-1 flex-col gap-[5px]">
        {message.img && (
          <img
            className="h-[300px] w-full rounded-lg object-cover"
            src={message.img}
            alt=""
          />
        )}
        <p className="rounded-[10px] bg-dark-blue p-5">{message.text}</p>
        {/* <span className="text-sm">{message}</span> */}
      </div>
    </div>
  );
}

export default Message;
