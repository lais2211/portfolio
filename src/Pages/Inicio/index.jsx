import Cabecalho from '../../Components/Cabecalho';
import Galeria from '../../Components/Galeria';
import Menu from '../../Components/Menu';
import Rodape from '../../Components/Rodape';
import styles from './Inicio.module.scss'
const Inicio = () => {
return(
    <>
    <Cabecalho/>
    <main>
    <section className={styles.principal}>
    <Menu/>
        </section>
        <div className={styles.galeria}>
        <Galeria/>
    </div>
    </main>
    <Rodape/>
    </>
)
}

export default Inicio;