import React from "react";

const Button = ({ onClick, text, disabled, style }) => {
  return (
    <button onClick={onClick} style={style} disabled={disabled}>
      {text}
    </button>
  );
};

const buttonWithStyles = (CompParam, type = "default") => {
  const colors = [
    {
      type: "default",
      backgroundColor: "#e7e7e7",
      color: "#000000",
    },
    {
      type: "react",
      backgroundColor: "#61dbfb",
      color: "#ffffff",
    },
    {
      type: "success",
      backgroundColor: "#4CAF50",
      color: "#ffffff",
    },
    {
      type: "info",
      backgroundColor: "#2196F3",
      color: "#ffffff",
    },
    {
      type: "warning",
      backgroundColor: "#ff9800",
      color: "#ffffff",
    },
    {
      type: "danger",
      backgroundColor: "#f44336",
      color: "#ffffff",
    },
  ];
  const { backgroundColor, color } = colors.find((c) => c.type === type);

  const buttonStyles = {
    backgroundColor,
    padding: "10px 45px",
    border: "none",
    borderRadius: 3,
    margin: 3,
    cursor: "pointer",
    fontSize: "1.25rem",
    color,
  };

  return (props) => {
    return <CompParam {...props} style={buttonStyles} />;
  };
};

const NewButton = buttonWithStyles(Button);
const ReactButton = buttonWithStyles(Button, "react");
const InfoButton = buttonWithStyles(Button, "info");
const SuccessButton = buttonWithStyles(Button, "success");
const WarningButton = buttonWithStyles(Button, "warning");
const DangerButton = buttonWithStyles(Button, "danger");

const App = () => {
  return (
    <div className="App">
      <Button text="No Style" onClick={() => alert("I am not styled yet")} />
      <NewButton
        text="Styled Button"
        onClick={() => alert("I am the default style")}
      />
      <ReactButton text="React" onClick={() => alert("I have react color")} />
      <InfoButton
        text="Info"
        onClick={() => alert("I am styled with info color")}
      />
      <SuccessButton text="Success" onClick={() => alert("I am successful")} />
      <WarningButton
        text="Warning"
        onClick={() => alert("I warn you many times")}
      />
      <DangerButton
        text="Danger"
        onClick={() => alert("Oh no, you can not restore it")}
      />
    </div>
  );
};

export default App;

// HOC -> a higher-order component is a function that takes a component and returns a new component.
// example -> const EnhancedComponent = higherOrderComponent(WrappedComponent);
// JSS
