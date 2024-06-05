import React, { useState } from "react";

function InitializingStateobject() {
  const [user, setUser] = useState({
    name: "",
    age: 0,
    email: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <p>name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default InitializingStateobject;
