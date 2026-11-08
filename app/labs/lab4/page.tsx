"use client";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import Counter from "./Counter";
import CounterBroken from "./CounterBroken";
import PassingFunctions from "./PassingFunctions";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariables from "./DateStateVariables";
import ObjectStateVariables from "./ObjectStateVariables";
import ArrayStateVariables from "./ArrayStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import Effect from "./Effect";
import ContextExamples from "./context/ContextExamples";
import ReduxExamples from "./redux/ReduxExamples";
import ZustandExamples from "./zustand/ZustandExamples";

export default function Lab4() {
  const sayHello = (message: string) => {
    alert(message);
  };
  const sayName = () => {
    alert("Aidan");
  };
  const sayOther = () => {
    alert("Sample from parent");
  };
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message="Hello"
        theFunction={sayHello}
        nameFunction={sayName}
        theOtherFunction={sayOther}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariables />
      <ObjectStateVariables />
      <ArrayStateVariables />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <Effect />
      <ContextExamples />
      <ZustandExamples />
      <ReduxExamples />
    </div>
  );
}
