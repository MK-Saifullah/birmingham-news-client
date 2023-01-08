import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp, FaYoutube} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    // const [user, setUser] = useState({});
    const {googleProviderLogin, loading} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
        })
        .catch((error) => {
            console.error(error);
        })
    }
    return (
        <div>
             <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2'  variant="outline-info"><FaGoogle></FaGoogle> Login with Google</Button>
                {/* <br></br> */}
                <Button  variant="outline-info"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp/> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaYoutube/> Youtube</ListGroup.Item>
                </ListGroup>
                <div>
                    <BrandCarousel></BrandCarousel>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;