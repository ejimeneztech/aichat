export default function ChatHistory(props) {
  return (
    <section>
      {props.chats && props.chats.length
        ? props.chats.map((chat, index) => (
            <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
              <span>
                <b>{chat.role.toUpperCase()}</b>
              </span>
              <span>:</span>
              <span>{chat.content}</span>
            </p>
          ))
        : ""}
    </section>
  );
}
