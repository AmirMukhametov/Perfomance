import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Event from './Event';
import { TABS_DATA, TABS_KEYS } from '../data/tabsData';

const DevicesSection = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [hasRightScroll, setHasRightScroll] = useState(false);
    
    const ref = useRef();
    const initedRef = useRef(false);

    // Инициализация активной табы
    useEffect(() => {
        if (!initedRef.current) {
            initedRef.current = true;
            const urlParams = new URLSearchParams(location.search);
            const tabFromUrl = urlParams.get('tab');
            setActiveTab(tabFromUrl || 'all');
        }
    }, []);

    // Проверка необходимости скролла
    useEffect(() => {
        if (ref.current) {
            const container = ref.current;
            const containerWidth = container.offsetWidth;
            const items = TABS_DATA[activeTab]?.items || [];
            const estimatedWidth = items.length * 200; // примерная ширина элемента
            setHasRightScroll(estimatedWidth > containerWidth);
        }
    }, [activeTab]);

    // Обработчик скролла стрелкой
    const handleArrowClick = useCallback(() => {
        const scroller = ref.current?.querySelector('.section__panel:not(.section__panel_hidden)');
        if (scroller) {
            scroller.scrollTo({
                left: scroller.scrollLeft + 400,
                behavior: 'smooth'
            });
        }
    }, []);

    // Обработчик изменения селекта
    const handleSelectChange = useCallback((event) => {
        setActiveTab(event.target.value);
    }, []);

    // Обработчик клика по табу
    const handleTabClick = useCallback((tabKey) => {
        setActiveTab(tabKey);
    }, []);

    // Мемоизированные опции для селекта
    const selectOptions = useMemo(() => 
        TABS_KEYS.map(key => (
            <option key={key} value={key}>
                {TABS_DATA[key].title}
            </option>
        )), []
    );

    // Мемоизированные табы
    const tabs = useMemo(() => 
        TABS_KEYS.map(key => (
            <li
                key={key}
                role="tab"
                aria-selected={key === activeTab}
                tabIndex={key === activeTab ? 0 : undefined}
                className={`section__tab${key === activeTab ? ' section__tab_active' : ''}`}
                id={`tab_${key}`}
                aria-controls={`panel_${key}`}
                onClick={() => handleTabClick(key)}
            >
                {TABS_DATA[key].title}
            </li>
        )), [activeTab, handleTabClick]
    );

    // Мемоизированные панели
    const panels = useMemo(() => 
        TABS_KEYS.map(key => (
            <div
                key={key}
                role="tabpanel"
                className={`section__panel${key === activeTab ? '' : ' section__panel_hidden'}`}
                aria-hidden={key !== activeTab}
                id={`panel_${key}`}
                aria-labelledby={`tab_${key}`}
            >
                <ul className="section__panel-list">
                    {TABS_DATA[key].items.map((item, index) => (
                        <Event
                            key={index}
                            {...item}
                        />
                    ))}
                </ul>
            </div>
        )), [activeTab]
    );

    return (
        <section className="section main__devices">
            <div className="section__title">
                <h2 className="section__title-header">
                    Избранные устройства
                </h2>

                <select 
                    className="section__select" 
                    value={activeTab} 
                    onChange={handleSelectChange}
                >
                    {selectOptions}
                </select>

                <ul role="tablist" className="section__tabs">
                    {tabs}
                </ul>
            </div>

            <div className="section__panel-wrapper" ref={ref}>
                {panels}
                {hasRightScroll && (
                    <div 
                        className="section__arrow" 
                        onClick={handleArrowClick}
                        role="button"
                        tabIndex={0}
                        aria-label="Прокрутить вправо"
                    />
                )}
            </div>
        </section>
    );
};

export default DevicesSection; 