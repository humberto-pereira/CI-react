import './App.css';
// import FunctionalGreeeting from './components/FunctionalGreeting';
// import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeeting /> */}
      <StatefulGreetingWithCallback greeting='I am a stateful class component' name='Humberto'/>   
      {/*greeting, name, and age are props 'they are parameters that tell your component what to display'*/}
    </div>
  );
}

export default App;
