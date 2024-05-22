import { useState } from "react";
import ExampleChild from "../ExampleChild/ExampleChild";

const ExampleShow = () => {
    const [show, setShow] = useState(true);
  
    const handleRemove = () => {
        setShow(false);
    }
  
    return (
      <div>
        {show ? <ExampleChild /> : null}
        <button onClick={handleRemove}>Eliminar el componete ExampleChild</button>
      </div>
    );
  };
  export default ExampleShow;
  