import styles from './home.module.css'


const Home = () => {
    return(
        <div className={styles.Container}>
            <div className={styles.Info}>
                <div>Hi, there</div>
                <div>My name is Rachit Sindhu</div>
                <div>I am a Full Stack Developer</div>
            </div>
            <div className={styles.Photo}>

            </div>
        </div>
    );
}

export default Home;
