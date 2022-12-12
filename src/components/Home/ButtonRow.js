
import ButtonLink from './ButtonLink'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const ButtonRow = () => {
    return (
        <ul className="home-about-social-links">
            <ButtonLink href="https://github.com/soumyajit4419"
                buttonSource={<AiFillGithub />}
            />
            <ButtonLink href="https://twitter.com/Soumyajit4419"
                buttonSource={<AiOutlineTwitter />}
            />
            <ButtonLink href="https://www.linkedin.com/in/soumyajit4419/"
                buttonSource={<FaLinkedinIn />}
            />
            <ButtonLink href="https://www.instagram.com/soumyajit4419"
                buttonSource={<AiFillInstagram />}
            />
        </ul>
    )
}

export default ButtonRow