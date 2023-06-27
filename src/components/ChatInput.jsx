export default function ChatInput(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!props.message) return;
    props.chat(e, props.message);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="message"
        value={props.message}
        placeholder="Type a message here and hit Enter..."
        onChange={(e) => props.setMessage(e.target.value)}
      />
    </form>
  );
}
