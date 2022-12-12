
const SocialIconBig = ({ href, icon }) => {
    return (
        <li className="social-icons" >
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"

            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}>
                    {icon}
                </div>
            </a>
        </li>
    )
}

export default SocialIconBig