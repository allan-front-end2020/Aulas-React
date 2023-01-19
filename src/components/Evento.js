import Button from "./evento/Button";

function Evento() {
  function meuEvento() {
    console.log(`primeiro evento`);
  }
  return (
    <>
      <p>clique para disparar um evento</p>
      <Button event={meuEvento} text='primeiro evento'/>
      
    </>
  );
}

export default Evento;
