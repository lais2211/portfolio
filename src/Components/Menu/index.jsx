import styles from './Menu.module.scss'

const Menu = () =>{

return(
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
             <a href='/'>Inicio</a>   
            </li>
            <li className={styles.menu__item}>
             <a href='/'>Projetos</a>   
            </li>
            <li className={styles.menu__item}>
             <a href='/'>Funcionalidades</a>    
            </li>
            <li className={styles.menu__item}>
             <a href='/'>Interativos</a>    
            </li>
            <li className={styles.menu__item}>
             <a href='/'>Tecnologias</a>    
            </li>
        </ul>
    </nav>
)

}
export default Menu;