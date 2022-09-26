import './index.scss';
import LogoS from '../../assets/images/profilbillede.png'

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoS} alt="profilbillede" />
        </div>

    )
}

export default Logo