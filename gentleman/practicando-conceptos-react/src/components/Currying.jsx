import { useState } from "react";

export default function Currying() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    address: ""
  });

  const handleInputChange = (field) => {
    return (e) => {
      setUser((prev) => ({
        ...prev,
        [field]: e.target.value
      }));
    };
  };

  return (
    <>
      <input value={user.name} onChange={handleInputChange("name")} />
      <input value={user.surname} onChange={handleInputChange("surname")} />
      <input value={user.address} onChange={handleInputChange("address")} />

      {JSON.stringify(user)}
    </>
  );
}
