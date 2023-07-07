import styles from './Banner.module.scss'
import bannerImg from './banner.jpg'

const Banner = () =>{
return(
    <div className={styles.bannerImagem}>
    <h1>Inovação e Criatividade</h1>
    <img src={bannerImg} alt='Banner'/>
</div>
)
}
export default Banner;