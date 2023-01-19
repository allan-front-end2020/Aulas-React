import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();

    console.log("detendo adicionada na cela");
    console.log(name)
  }

  const [name, setName] = useState();

  return (
    <>
      <h1>Cadastro de usuario</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="digite seu nome"
            onChange={(e)=> setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="passoword"
            id="password"
            name="password"
            placeholder="digite sua senha"
          />
        </div>
        <div>
          <input type="submit" placeholder="Cadastrar" />
        </div>
      </form>
    </>
  );
}

export default Form;
