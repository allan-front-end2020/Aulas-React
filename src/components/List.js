import Item from './Item'
function List() {
    return(
        <>
        <h1>Minha listas</h1> 
        <ul>
           <Item marca='ferrari' ano_lancamento={1990} cor='vermelho'/>
           <Item marca=' clio'ano_lancamento={2000} cor='azul'/>
           <Item marca ='renault' ano_lancamento={1990} cor='cinza'/>
        </ul>
        </>
    )
}

export default List