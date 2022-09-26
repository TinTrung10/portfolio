import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
      
    useEffect(() => {
       setTimeout(() => {
       return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['O','m',' ','m','i','g']}
                      idx={15}
                    />
                </h1>
                <p>
                Mit navn er Tin Trung Nguyen og jeg er uddannet markedsføringsøkonom, men har mistet min passion inden for branchen og har derfor valgt et skift. Jeg har altid været interesseret i computerer og IT, hvilket fik mig til at prøve datamatikeruddannelsen, men uddannelsen var meget tungt inden for back-end kode. 
                </p>
                <p>
                Jeg fandt hurtigt ud af at der var en anden uddannelse hvor man fokusereret mere inden for front-end kode, hvilket også er årsagen til at jeg startede på multimedieuddannelsen. Uddannelsen har åbnede øjnende op for mig, at front-end kode passede meget til det jeg gerne vil. 
                </p>
                <p>
                Jeg vil derfor meget gerne kunne benytte disse egenskaber jeg har lært på skolen, og udvikle videre med hjemmesider.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon ={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon ={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon ={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon ={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon ={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon ={faGitAlt} color="#EC4D28"/>
                    </div>

                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )

}

export default About