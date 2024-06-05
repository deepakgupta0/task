import PollWidget from "./components/PollWidget/PollWidget";
import "./App.css";

function App({ questions = [], pollWidgetId = "poll-1234" }) {
  if (!questions?.length) return;
  return (
    <div
      class="poll-widget-root"
      id={pollWidgetId}
      data-testid="PollWidgetRoot"
    >
      <PollWidget questions={questions} />
    </div>
  );
}

export default App;
