import styles from './Menu.module.scss'
import funcionalidade from './icones/funcionalidade.svg'
import home from './icones/home.svg'
import interativo from './icones/interativo.svg'
import projetos from './icones/projetos.svg'
import tecnologias from './icones/tecnologias.svg'


const Menu = () =>{

return(
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
            <img src={home} alt='Inicio'/>
             <a href='/'>Inicio</a>   
            </li>
            <li className={styles.menu__item}>
            <img src={projetos} alt='Projetos'/>
             <a href='/'>Projetos</a>   
            </li>
            <li className={styles.menu__item}>
            <img src={funcionalidade} alt='Funcionalidades'/>
             <a href='/'>Funcionalidades</a>    
            </li>
            <li className={styles.menu__item}>
            <img src={interativo} alt='Interativos'/>
             <a href='/'>Interativos</a>    
            </li>
            <li className={styles.menu__item}>
            <img src={tecnologias} alt='Tecnologias'/>
             <a href='/'>Tecnologias</a>    
            </li>
        </ul>
    </nav>
)

}
export default Menu;