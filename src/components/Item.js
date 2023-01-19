import PropTypes from 'prop-types'

function Item({marca , ano_lancamento, cor}) {
    return(
        <>
         <li>{marca} - {ano_lancamento} - {cor}</li>
        </>
    )
}
// PODE,MOS TIPAR OS ITEMS FDA PROPS
Item.proptype ={
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
    cor: PropTypes.string
}

// PODEMOS DEIXAR DEIXAR ALGUMAS COISA NO COMPONENTE CASO
// NÃO SEJA PASSADO NADA POR PROPS
// OU SEJA PODEMOS DEIXAR UM VALOR DEFAULT 

Item.defautProps ={ 
    marca: 'Falta a marca',
    ano_lancamento: 'Falta o nao de lancamento'

}

export default Item