import React, { useState } from "react";
import { motion } from "framer-motion";

function AccountCreation() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setUsername("");
    setPassword("");
  };

  return (
    <motion.div className="w-full h-full bg-blue fixed z-30 top-0 flex">
      <div className="bg-white m-auto w-300px h-300px p-8">
        <h2 className="text-2xl font-bold mb-4">Crear Cuenta</h2>
        <form onSubmit={() => handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
                Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300   
 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300   
 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-medium   
 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Crear Cuenta
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default AccountCreation;
