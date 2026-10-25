export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let myString = "Blue is my favorite color.";
  let myNumber = 17;
  let typeOfMyString = typeof myString;
  let typeOfMyNumber = typeof myNumber;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let typeOfSampleCount = typeof sampleCount;
  let typeOfSampleLabel = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable} <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable} <br />
      booleanVariable = {booleanVariable + ""} <br />
      isNumber = {isNumber} <br />
      isString = {isString} <br />
      isBoolean = {isBoolean} <br />
      myString = {myString} <br />
      typeOfMyString = {typeOfMyString} <br />
      myNumber = {myNumber} <br />
      typeOfMyNumber = {typeOfMyNumber} <br />
      sampleCount = {sampleCount} <br />
      typeOfSampleCount = {typeOfSampleCount} <br />
      sampleLabel = {sampleLabel} <br />
      typeOfSampleLabel = {typeOfSampleLabel} <br />
      <hr />
    </div>
  );
}
