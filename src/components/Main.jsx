import React from 'react';
import HeroDashboard from './HeroDashboard';
import ScriptsSection from './ScriptsSection';
import DevicesSection from './DevicesSection';

const Main = () => {
    return (
        <main className="main">
            <section className="section main__general">
                <h2 className="section__title section__title-header section__main-title">
                    Главное
                </h2>
                <HeroDashboard />
            </section>

            <ScriptsSection />
            <DevicesSection />
        </main>
    );
};

export default Main; 