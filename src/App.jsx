import "./App.css";
import InitializingStateArray from "./InitializingStateArray";
import InitializingStateBoolian from "./initializingStateBoolian";
import InitializingStateNumber from "./initializingStateNumber";
import InitializingStateString from "./initializingStateString";
import InitializingStateNestedArray from "./InitializingStateNestedArray";
import InitializingStateobject from "./InitializingStateobject";
function App() {
  return (
    <div>
      {/* به این سه تایپ برای یاد اوری می گم میگن  */}
      <h1>PrimitiveTypes:</h1>
      <h3>+++++++Number+++++</h3>
      <InitializingStateNumber />
      <h3>+++++++boolian+++++</h3>
      <InitializingStateBoolian />
      <h3>+++++++string+++++</h3>
      <InitializingStateString />
      {/* و حالا complex Types */}
      <h1>complex Types:</h1>
      <h3>+++++++Array+++++</h3>
      <InitializingStateArray />
      <h3>+++++++nested Array+++++</h3>
      <InitializingStateNestedArray />
      <h3>+++++++object+++++</h3>
      <InitializingStateobject />
    </div>
  );
}

export default App;
