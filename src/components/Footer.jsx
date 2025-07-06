import React from 'react';

const Footer = () => {
    const footerLinks = [
        { href: '/', text: 'Помощь' },
        { href: '/', text: 'Обратная связь' },
        { href: '/', text: 'Разработчикам' },
        { href: '/', text: 'Условия использования' }
    ];

    return (
        <footer className="footer">
            <ul className="footer__list">
                {footerLinks.map((link, index) => (
                    <li key={index} className="footer__item">
                        <a className="footer__link" href={link.href}>
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="footer__copyright">
                © 1997–2023 ООО «Яндекс»
            </div>
        </footer>
    );
};

export default Footer; 