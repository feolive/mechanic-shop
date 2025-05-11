"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { motion } from "motion/react";
import { ScrollUpButton } from "./scroll-up-button";
import GlassBadge from "./glass-badge";

export default function Welcome() {
  return (
    <main className="flex flex-col justify-start items-center w-full scroll-auto">
      {/* home */}
      <section id="home" className="w-full">
        <div
          className={styles.hero}
          style={{
            backgroundImage:
              // "url(https://images.unsplash.com/photo-1743448748313-80eb7f9eb2b7?q=80&w=3906&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              "url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
            }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-left gap-10 sm:-translate-y-20 flex flex-col sm:flex-row justify-center items-center">
            <div className="max-w-lg">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 text-6xl font-bold"
              >
                Photo Studio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-5 text-xl leading-relaxed text-slate-300"
              >
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <Link
                  href=""
                  className="flex items-center text-xl gap-2 underline text-accent"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                  <p>Read More</p>
                </Link>
              </motion.div>
            </div>
            <div className="flex flex-wrap w-full sm:w-1/2 gap-2">
              <GlassBadge>
                <p className="text-xs sm:text-lg">Potrait</p>
              </GlassBadge>
              <GlassBadge>
                <p className="text-xs sm:text-lg">Landscape</p>
              </GlassBadge>
              <GlassBadge>
                <p className="text-xs sm:text-lg">Photo Editing</p>
              </GlassBadge>
              <GlassBadge>
                <p className="text-xs sm:text-lg">Events</p>
              </GlassBadge>
              <GlassBadge>
                <p className="text-xs sm:text-lg">Wildlife</p>
              </GlassBadge>
              <GlassBadge>
                <p className="text-xs sm:text-lg">On Location</p>
                <div className="flex items-center justify-center gap-2 w-full">
                  <GlassBadge>
                    <p className="text-xs sm:text-lg">Real-Life Settings</p>
                  </GlassBadge>
                  <GlassBadge>
                    <p className="text-xs sm:text-lg">Authentic Experience</p>
                  </GlassBadge>
                  <GlassBadge>
                    <p className="text-xs sm:text-lg">Professional</p>
                  </GlassBadge>
                </div>
              </GlassBadge>
            </div>
            </div>
          </div>
      </section>
      {/* Gallery */}
      <section id="gallery" className="w-full h-screen">
        <div className="hero relative bg-black/95 text-white h-screen">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl sm:text-9xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-t from-black/50 to-accent">MY WORKS</div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section id="pricing" className="w-full h-screen">
        <div className="hero bg-black/95 text-white h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/hero-2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* QA */}
      <section id="qa" className="w-full h-screen">
        <div className="hero bg-black/95 text-white h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/hero-2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="w-full h-screen">
        <div className="hero bg-black/95 text-white h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/hero-2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-6 right-6 z-50">
        <ScrollUpButton />
      </div>
    </main>
  );
}

const styles = {
  hero: "hero h-screen before:content-[''] before:absolute before:w-full before:h-1/4 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-b before:from-transparent before:to-black/85"
};
