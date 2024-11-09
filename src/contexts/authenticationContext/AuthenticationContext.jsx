import { createContext, useState } from "react";
// Importar la librería (si usas módulos)


//creando el contexto
export const AuthenticationContext = createContext();

//recuperar token del localStorage
const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(getToken());
  const URL = "https://localhost:7175/api/";

  //metodo para registrar un usuario (esto esta conectado a la api)
  const RegisterUser = async (userRequest) => {
    try {
      const response = await fetch(URL + "User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify(userRequest),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el usuario");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const LoginUser = async (userRequest) => {
    try {
      const response = await fetch(URL + "Auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify(userRequest),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el usuario");
      }
      const data = await response.text();
      localStorage.setItem("token", data);
      setUser(data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const data = { RegisterUser, LoginUser, user };
  return (
    <AuthenticationContext.Provider value={data}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
