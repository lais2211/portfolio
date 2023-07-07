import perfil from './perfil.jpg'
import styles from './Cabecalho.module.scss'

const Cabecalho = () => {

return(
    <header className={styles.cabecalho}>
       <div className={styles.imagem}>
            <img src={perfil} alt='João G. M. Gomes'/>
            </div>
            <div className={styles.texto}>
            <h3>João Guilherme M. Gomes</h3>
            <p>Desenvolvedor Mobile</p>
            </div>
    </header>
)

}
export default Cabecalho;