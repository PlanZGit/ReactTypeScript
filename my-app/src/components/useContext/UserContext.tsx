import { useState, createContext } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

//copy setUser type by hovering setUser in useState
type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProvider = {
  children: React.ReactNode;
};

//Define UserContext type as <UserContextType | null>
//Use type assertion {} as UserContextType to avoid if it exist check
export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProvider) => {
  // user can be an object or null <AuthUser | null>
  const [user, setUser] = useState<AuthUser | null>(null);

  //Pass in object in value
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
