import styles from  './footer.module.css'
import {SvgIcon} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const footer = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Link}>
                <a href="https://github.com/rachit-sindhu"><SvgIcon fontSize="large"><GitHubIcon/></SvgIcon></a>
                <a href="https://www.linkedin.com/in/rachit-sindhu-1aa1aa24a/"><SvgIcon fontSize="large" style={{'marginLeft':'10px'}}><LinkedInIcon/></SvgIcon></a>
            </div>
            <div className={styles.Creator}>
                <p>Designed and developed by</p>
                <p>Rachit sindhu</p>
            </div>
        </div>
    )
}

export default footer;