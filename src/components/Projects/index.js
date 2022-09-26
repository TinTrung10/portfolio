import { useState, useEffect } from "react";
import PostItem from "../PostItem";
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
         }, 3000)
       }, [])

    useEffect(() => {
        async function getData() {
            const response = await fetch("http://wordpress.mitmulti.dk/wp-json/wp/v2/posts?_embed");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);
    
    return (
        <>
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['M','i','n','e',' ','p','r','o','j','e','k','t','e','r']}
                        idx={15}
                    />
                </h1>
            </div>
        
            <div className="grid-container">
                {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
        
        </div>
        <Loader type="pacman" /> 
        </>

        
    );
}

export default Projects