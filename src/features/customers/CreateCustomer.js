import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./CustomerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalID, setNationalID] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalID) return;
    dispatch(createCustomer(fullName, nationalID));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalID}
            onChange={(event) => setNationalID(event.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
