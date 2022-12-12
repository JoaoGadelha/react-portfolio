const SocialButton = ({ href, icon }) => {
    return (
        <li className="social-icons">
            <a
                href={href}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
            >
                {icon}
            </a>
        </li>
    )
}

export default SocialButton