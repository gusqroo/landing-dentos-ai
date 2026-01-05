import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Features } from './components/sections/Features';
import { Compliance } from './components/sections/Compliance';
import { Pricing } from './components/sections/Pricing';
import { FinalCTA } from './components/sections/FinalCTA';

function App() {
    return (
        <div className="min-h-screen">
            <Header />

            <main>
                <Hero />
                <Problem />
                <Features />
                <Compliance />
                <Pricing />
                <FinalCTA />
            </main>

            <Footer />
        </div>
    );
}

export default App;
