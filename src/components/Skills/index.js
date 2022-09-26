import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
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
                      strArray={['M','i','n','e',' ','k','o','m','p','e','t','e','n','c','e','r']}
                      idx={15}
                    />
                </h1>
                <p>
                Jeg har tilegnet mig viden og praktisk erfaring inden for HTML5, CSS3, JavaScript, React, Wordpress REST API, Photoshop, Figma, XD, Illustrator, Github osv.
                </p>
                <h2>Mine projekt erfaringer</h2>
                <p>
                I uddannelsen er der mange projekter der skal laves, og i mit tilfælde havde jeg et bestemt team som jeg har arbejdet rigtigt godt med under forløbet. Mit arbejde bestod primært at kode den digitale løsning, hvilket jeg var ret glad for, da jeg gerne vil teste mine egenskaber af. Under projektet opstod der selvfølgelig problemer, da ikke alt det vi har lært under undervisningen kunne bruges. Derfor har jeg været god til at tilegne mig ny viden og færdigheder inden for programmering. Dette har jeg f.eks. benyttet mig af andre hjemmesider og videoer, som har hjulpet mig frem til at kunne kode endnu bedre.
                </p>
                <p>
                Personligt kan jeg både lide at arbejde i teams såvel at kunne arbejde selvstændigt. Jeg er altid villig til nye udfordringer og på at lære noget nyt.
                </p>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Skills