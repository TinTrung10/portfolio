import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoT from '../../assets/images/logoT.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from '../Logo'
import Loader from 'react-loaders'
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['i', 'n',',']
    const jobArray = ['s','t','u','d','e','r','e','n','d','e','.']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _13`}>j,</span>
                <br/> 
                <span className={`${letterClass} _14`}>m</span>
                <span className={`${letterClass} _15`}>i</span>
                <span className={`${letterClass} _16`}>t</span>
                <span className={`${letterClass} _17`}> </span>
                <span className={`${letterClass} _18`}>n</span>
                <span className={`${letterClass} _19`}>a</span>
                <span className={`${letterClass} _20`}>v</span>
                <span className={`${letterClass} _21`}>n</span>
                <span className={`${letterClass} _22`}> </span>
                <span className={`${letterClass} _23`}>e</span>
                <span className={`${letterClass} _24`}>r</span>
                <img src={logoT} alt="studerende" />    
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={25} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={25} />
                </h1>
                <h2>Multimediedesigner / Frontend </h2>
                <Link to="/contact" className='flat-button'>KONTAKT</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home