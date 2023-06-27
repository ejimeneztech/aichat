export default function TypingIndicator(props) {
  return (
    <div className={props.condition ? "" : "hide"}>
      <p>
        <i>{props.condition ? "Typing" : ""}</i>
      </p>
    </div>
  );
}
