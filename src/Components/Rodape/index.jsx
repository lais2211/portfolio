import styles from './Rodape.module.scss'
import linkedin from './icones/linkedin.svg'
import git from './icones/gitHub.svg'

const Rodape = () =>{
return(
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.linkedin.com/in/joao-mobile-developer/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="ícone do linkedin" />
        </a>
        <a
          href="https://github.com/JoaoGomms"
          target="_blank"
          rel="noreferrer"
        >
          <img src={git} alt="ícone do git" />
        </a>
      </div>
    </footer>
)
}
export default Rodape;