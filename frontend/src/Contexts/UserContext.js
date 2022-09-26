import React, { createContext, useState } from "react";

const UserContext = createContext('');

function UserProvider({ children }) {
  const [user, setUser] = useState('Matthew');
  const obj = { user: user, setUser: setUser };
  
  return (
    <UserContext.Provider value={obj}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
export { UserContext };