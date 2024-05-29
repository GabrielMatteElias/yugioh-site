import './Footer.css'
import twitch from '../../img/icon-twitch.png'
import youtube from '../../img/icon-yt.png'
import facebook from '../../img/icon-fb.png'
import twitter from '../../img/icon-twitter.png'
import instagram from '../../img/icon-ig.png'


const Footer = () => {
    return (
        <footer id='footer'>
            <h4>Follow us:</h4>
            <div id='footer-social-media'>
                <ul>
                    <li>
                        <img src={twitch} />
                    </li>
                    <li>
                        <img src={youtube} />
                    </li>
                    <li>
                        <img src={instagram} />
                    </li>
                    <li>
                        <img src={facebook} />
                    </li>
                    <li>
                        <img src={twitter} />
                    </li>
                </ul>
            </div>
            <p>Gabriel Matte Elias Dev &copy; 2024</p>
        </footer>
    )
}

export default Footer