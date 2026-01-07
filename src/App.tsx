import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Features } from './components/sections/Features';
import { Pricing } from './components/sections/Pricing';
import { FinalCTA } from './components/sections/FinalCTA';
import { ScrollToTop } from './components/ui/ScrollToTop';

function App() {
    return (
        <div className="min-h-screen">
            <Header />

            <main>
                <Hero />
                <Problem />
                <Features />
                <Pricing />
                <FinalCTA />
            </main>

            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
