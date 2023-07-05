import "./ChatHistory.css";
import userThumbnail from "../assets/ai.avif"; // Path to user profile thumbnail image
import assistantThumbnail from "../assets/user.png"; // Path to assistant profile thumbnail image

export default function ChatHistory(props) {
  return (
    <section>
      {props.chats && props.chats.length
        ? props.chats.map((chat, index) => (
            <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
              <span>
                {chat.role === "user" ? (
                  <img
                    src={userThumbnail}
                    alt="User Thumbnail"
                    className="profile-thumbnail"
                  />
                ) : (
                  <img
                    src={assistantThumbnail}
                    alt="Assistant Thumbnail"
                    className="profile-thumbnail"
                  />
                )}
              </span>

              <span>{chat.content}</span>
            </p>
          ))
        : ""}
    </section>
  );
}
