import React from 'react';
import Event from './Event';

const ScriptsSection = () => {
    const scripts = [
        {
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Выключить весь свет в доме и во дворе'
        },
        {
            icon: 'schedule',
            iconLabel: 'Расписание',
            title: 'Я ухожу'
        },
        {
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Включить свет в коридоре'
        },
        {
            icon: 'temp2',
            iconLabel: 'Температура',
            title: 'Набрать горячую ванну',
            subtitle: 'Начнётся в 18:00'
        },
        {
            icon: 'temp2',
            iconLabel: 'Температура',
            title: 'Сделать пол тёплым во всей квартире'
        }
    ];

    return (
        <section className="section main__scripts">
            <h2 className="section__title section__title-header">
                Избранные сценарии
            </h2>
            <ul className="event-grid">
                {scripts.map((script, index) => (
                    <Event key={index} slim={true} {...script} />
                ))}
            </ul>
        </section>
    );
};

export default ScriptsSection; 