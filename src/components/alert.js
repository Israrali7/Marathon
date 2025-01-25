import React from "react";
import Swal from "sweetalert2";

function App() {
  const showAlert = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      confirmButtonText: "OK", 
    });
  };

  return (
    <div>
      <button onClick={showAlert}>Click Me</button>
    </div>
  );
}

export default App;
