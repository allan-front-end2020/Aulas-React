import OutraLista from "./outraLista"

function  Lista() {
    const meusItens = ['react' ,'vue' , 'angular']
    return(
        <>
        <h1>renderização de Listas</h1>
        <OutraLista itens ={meusItens} />
        <OutraLista itens ={[]} />
        
        </>
    )
}

export default  Lista