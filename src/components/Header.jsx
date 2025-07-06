import React, { useState, useCallback } from 'react';
import { classNames } from '../utils/helpers';

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const [toggled, setToggled] = useState(false);

    const handleMenuClick = useCallback(() => {
        if (!toggled) {
            setToggled(true);
        }
        setExpanded(prev => !prev);
    }, [toggled]);

    const menuText = expanded ? 'Закрыть меню' : 'Открыть меню';
    const linksClassName = classNames(
        'header__links',
        expanded && 'header__links_opened',
        toggled && 'header__links-toggled'
    );

    return (
        <header className="header">
            <a href="/" className="header__logo" aria-label="Яндекс.Дом" />
            <button 
                className="header__menu" 
                aria-expanded={expanded}
                onClick={handleMenuClick}
            >
                <span className="header__menu-text a11y-hidden">
                    {menuText}
                </span>
            </button>
            <ul className={linksClassName}>
                <li className="header__item">
                    <a 
                        className="header__link header__link_current" 
                        href="/" 
                        aria-current="page"
                    >
                        Сводка
                    </a>
                </li>
                <li className="header__item">
                    <a className="header__link" href="/devices">
                        Устройства
                    </a>
                </li>
                <li className="header__item">
                    <a className="header__link" href="/scripts">
                        Сценарии
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header; 