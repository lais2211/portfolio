import styles from './Rodape.module.scss'
import twitter from './icones/twitter.svg'
import facebook from './icones/facebook.svg'
import instagram from './icones/instagram.svg'

const Rodape = () =>{
return(
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.facebook.com/AluraCursosOnline/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="ícone do facebook" />
        </a>
        <a
          href="https://twitter.com/aluraonline?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="ícone do twitter" />
        </a>
        <a
          href="https://www.instagram.com/aluraonline/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
    </footer>
)
}
export default Rodape;