import { useState } from "react";
import Cards from "../Cards";
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
const Galeria = () => {

  const [itens,setItens] = useState(fotos);
  
  return (
    <section className={styles.galeria}>
       <Cards itens={itens} styles = {styles}/>
    </section>
  )
}
export default Galeria;
