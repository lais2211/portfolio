
const Cards = ({itens,styles}) => {

return(

    <ul className={styles.galeria__cards}>
    {itens.map((item) => {return (
      <li key={item.id} className={styles.galeria__card}>
        <img className={styles.galeria__imagem} src={item.imagem} alt={item.titulo}/>
        <p className={styles.galeria__descricao}>{item.titulo}</p>
        <div>
        <p>{item.descricao}</p>
        </div>
      </li>
    )})}
  </ul>

)

}
export default Cards;