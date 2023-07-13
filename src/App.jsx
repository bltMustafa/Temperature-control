import { useState } from "react";

function App() {
  const divStyle = {
    width: "350px",
    height: "700px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0B666A",
    borderRadius: "10px",
  };

  const buttonStyle = {
    width: "60px",
    height: "60px",
    backgroundColor: "gray",
    color: "white",
    marginRight: "25px",
    borderRadius: "50%",
    border: "1px solid black",
    fontSize: "20px",
  };

  const getDivBorderStyle = () => {
    const backgroundColor = temperatureValue >= 20 ? "red" : "blue";

    return {
      width: "150px",
      height: "150px",
      fontSize: "45px",
      color: "white",
      borderRadius: "50%",
      border: "1px solid white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
      backgroundColor: backgroundColor,
    };
  };

  const [temperatureValue, setTemperatureValue] = useState(0);

  const increment = () => {
    setTemperatureValue(temperatureValue + 1);
  };

  const decrement = () => {
    setTemperatureValue(temperatureValue > 0 ? temperatureValue - 1 : 0);
  };

  return (
    <div style={divStyle}>
      <div>
        <div style={getDivBorderStyle()}>{temperatureValue} °C </div>
        <button onClick={increment} style={buttonStyle}>
          +
        </button>
        <button onClick={decrement} style={buttonStyle}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
