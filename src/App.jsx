import Hero from "./components/Hero";
import Terminal from "./components/Terminal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ModelViewer from "./components/ModelViewer";
import { Suspense } from "react";

function App() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            <main className="content-wrapper">
                <Hero />

                <section className="showcase">
                    <Terminal />

                    <div className="modelview">
                        <Suspense fallback={<p>Loading model...</p>}>
                            <ModelViewer />
                        </Suspense>
                    </div>
                </section>

                <Projects />
                <Blog />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
