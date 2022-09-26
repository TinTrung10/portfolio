import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
      
    useEffect(() => {
       setTimeout(() => {
       return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_nqkhnti',
                'template_oa0ecsh',
                refForm.current,
                'aFQwOWP8YG3ZXHzzH'
            )
            .then (
                () => {
                    alert('Beskeden blev sendt!')
                    window.location.reload(false)
                },
                () => {
                    alert('Beskeden kunne ikke sendes, prøv igen')
                }
            )
    }  

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['K','o','n','t','a','k','t',' ','m','i','g']}
                        idx={15}
                    />
                </h1>
                <p>
                    Jeg er interesseret i at kunne arbejde inden for frontend, men er altid klar på nye udfordringer. Så, hvis du/I har spørgsmål eller andet, er det muligt at kontakte mig for neden.
                </p>
                <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name='name' placeholder='Name' required />
                        </li>
                        <li className='half'>
                            <input type="email" name='email' placeholder='Email' required />
                        </li>
                        <li>
                            <input type="text" name='subject' placeholder='Subject' required />
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required />
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value='SEND' />
                        </li>
                    </ul>
                </form>
                </div>

            </div>
            <div className='info-map'>
                Tin Trung Nguyen,
                <br />
                Danmark,
                <br />
                Nørregade 3, 2, 4 <br /> 
                8700 Horsens <br /><br />
                <span>tinny_nguyen@hotmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[55.86313, 9.84850]} zoom={18}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[55.86313, 9.84850]}>
                        <Popup>Her bor jeg :D</Popup>
                    </Marker>
                </MapContainer>
            </div>

        </div>
        <Loader type="pacman" /> 
        </>
    )
}

export default Contact