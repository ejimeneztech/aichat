import './ChatInput.css';

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
        placeholder="Send a Message"
        onChange={(e) => props.setMessage(e.target.value)}
      />
    </form>
  );
}
