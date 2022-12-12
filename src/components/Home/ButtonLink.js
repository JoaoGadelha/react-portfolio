
const ButtonLink = ({ href, buttonSource }) => {
    return (
        <li className="social-icons">

            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
            >
                {buttonSource}
            </a>
        </li>
    )
}

export default ButtonLink