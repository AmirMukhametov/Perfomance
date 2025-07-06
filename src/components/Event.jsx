import React, { memo } from 'react';
import { classNames } from '../utils/helpers';

const Event = memo(({ 
    icon, 
    iconLabel, 
    title, 
    subtitle, 
    slim = false
}) => {
    const eventClassName = classNames('event', slim && 'event_slim');

    return (
        <li className={eventClassName}>
            <button className="event__button">
                <span 
                    className={`event__icon event__icon_${icon}`} 
                    role="img" 
                    aria-label={iconLabel}
                />
                <h4 className="event__title">{title}</h4>
                {subtitle && (
                    <span className="event__subtitle">{subtitle}</span>
                )}
            </button>
        </li>
    );
});

Event.displayName = 'Event';

export default Event; 