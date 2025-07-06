import React from 'react';
import Event from './Event';

const HeroDashboard = () => {
    const scheduledEvents = [
        {
            icon: 'temp',
            iconLabel: 'Температура',
            title: 'Philips Cooler',
            subtitle: 'Начнет охлаждать в 16:30'
        },
        {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'Xiaomi Yeelight LED Smart Bulb',
            subtitle: 'Включится в 17:00'
        },
        {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'Xiaomi Yeelight LED Smart Bulb',
            subtitle: 'Включится в 17:00'
        }
    ];

    return (
        <div className="hero-dashboard">
            <div className="hero-dashboard__primary">
                <h3 className="hero-dashboard__title">Привет, Геннадий!</h3>
                <p className="hero-dashboard__subtitle">
                    Двери и окна закрыты, сигнализация включена.
                </p>
                <ul className="hero-dashboard__info">
                    <li className="hero-dashboard__item">
                        <div className="hero-dashboard__item-title">Дома</div>
                        <div className="hero-dashboard__item-details">
                            +23
                            <span className="a11y-hidden">°</span>
                        </div>
                    </li>
                    <li className="hero-dashboard__item">
                        <div className="hero-dashboard__item-title">За окном</div>
                        <div className="hero-dashboard__item-details">
                            +19
                            <span className="a11y-hidden">°</span>
                            <div
                                className="hero-dashboard__icon hero-dashboard__icon_rain"
                                role="img"
                                aria-label="Дождь"
                            />
                        </div>
                    </li>
                </ul>
            </div>
            <ul className="hero-dashboard__schedule">
                {scheduledEvents.map((event, index) => (
                    <Event key={index} {...event} />
                ))}
            </ul>
        </div>
    );
};

export default HeroDashboard; 