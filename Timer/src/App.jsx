import "./App.css"

function Block({time, type}) {
  return (
    <div className="block">
      <p id="time">{time}</p>
      <p id="type">{type}</p>
    </div>
  );
}

function App() {
  return (
    <section id="blocks">
      <Block time="03" type="Days"/>
      <Block time="12" type="Hours"/>
      <Block time="33" type="Minutes"/>
      <Block time="09" type="Seconds"/>
    </section>
  );
}

export default App;
