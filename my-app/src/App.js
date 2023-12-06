import './App.css';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
// import FunctionalGreeeting from './components/FunctionalGreeting';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
// import NestingComponents from './components/NestingComponents';


// function App() {
//   return (
//     <div className="App">
//       {/* <FunctionalGreeeting /> */}
//       <StatefulGreetingWithCallback greeting='I am a stateful class component' name='Humberto'/>   
//       {/*greeting, name, and age are props 'they are parameters that tell your component what to display'*/}
//     </div>
//   );
// }

//====================================================================================================

// function App() {
//   return (
//     <div className="App">
//       <EventsClass />
//       <EventsFunctional />
//     </div>
//   );
// }

//====================================================================================================

// function App() {
//   return (
//     <div className="App">
//       <ConditionalRenderingClass />
//       <ConditionalRenderingFunctional connected={true}/>
//     </div>
//   );
// }

//====================================================================================================

// function App() { 
//   return (
//     <div className="App">
//       <NestingComponents />
//     </div>
//   );
// }

// export default App;

//====================================================================================================

function App() {
  return (
    <div className="App">
      <MethodsAsPropsParent />
    </div>
  );
}

export default App;