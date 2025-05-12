"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { motion } from "motion/react";
import { ScrollUpButton } from "./scroll-up-button";
import GlassBadge from "./glass-badge";
import { faInstagram, faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faPhone } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons";

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
          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-4xl sm:text-9xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-t from-black/50 to-accent">GALLERY</div>
          <div className="hero-content mt-48 grid grid-flow-row grid-cols-3 grid-rows-2 gap-1">
            <img src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=3988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="1" className="h-[300px] aspect-[16/9] object-cover object-center rounded-lg shadow-2xl hover:scale-105 cursor-pointer transition-all ease-linear duration-300" />
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="2" className="h-[300px] aspect-[16/9] object-cover object-center rounded-lg shadow-2xl hover:scale-105 cursor-pointer transition-all ease-linear duration-300" />
            <img src="https://images.unsplash.com/photo-1559493909-ee5feb0b298d?q=80&w=3955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="3" className="w-[400px] aspect-auto col-span-1 row-span-2 object-cover object-center rounded-lg shadow-2xl hover:scale-105 cursor-pointer transition-all ease-linear duration-300" />
            <img src="https://images.unsplash.com/photo-1525230071276-4a87f42f469e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="3" className="h-[300px] aspect-[16/1] col-span-2 row-span-1 object-cover object-bottom rounded-lg shadow-2xl hover:scale-105 cursor-pointer transition-all ease-linear duration-300" />
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section id="pricing" className="w-full h-screen">
        <div className="hero bg-black/90 text-white h-screen">
          <div className="hero-content flex-col mt-20 gap-16">
            <h1 className="text-xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-t from-white to-primary font-bold">Pricing Plan</h1>
            <div className="flex justify-center items-center gap-12">
              <div className="card bg-base-100 text-base-content w-[260px] h-[400px] rounded-xl">
                <div className="card-body hover:scale-103 cursor-pointer transition-all ease-linear duration-300">
                  <h2 className="card-title badge badge-outline badge-neutral">Basic</h2>
                  <p className="text-2xl font-bold">$5.99</p>
                  <p className="text-xs">Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                  <p className="text-sm text-gray-400">what's included?</p>
                  <ul className="text-xs">
                    <li>1 User</li>
                    <li>4 Pictures</li>
                    <li>Free Delivery</li>
                  </ul>
                  <span className="min-h-12 w-full" />
                  <button className="btn btn-primary rounded-full">Get Started</button>
                </div>
              </div>
              <div className="card bg-black/85 text-base-100 w-[260px] h-[400px] rounded-xl neon-card">
                <div className="card-body hover:scale-103 cursor-pointer transition-all ease-linear duration-300">
                  <h2 className="card-title badge badge-outline badge-secondary">Premium</h2>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-secondary">$19.99</p>
                    <p className="badge badge-xs badge-warning">Most Popular</p>
                  </div>
                  <p className="text-xs text-base-100">Vivamus tortor purus, egestas sit amet posuere in, fringilla ac erat.</p>
                  <p className="text-sm text-gray-400">what's included?</p>
                  <ul className="text-xs">
                    <li>2 User</li>
                    <li>10 Pictures</li>
                    <li>Free Editing</li>
                  </ul>
                  <span className="min-h-12 w-full" />
                  <button className="btn btn-primary rounded-full">Get Started</button>
                </div>
              </div>
              <div className="card bg-base-100 text-base-content w-[260px] h-[400px] rounded-xl">
                <div className="card-body hover:scale-103 cursor-pointer transition-all ease-linear duration-300">
                  <h2 className="card-title badge badge-outline badge-accent">Ultimate</h2>
                  <p className="text-2xl font-bold text-accent">$29.99</p>
                  <p className="text-xs">Suspendisse potenti. In nec metus nec est euismod egestas et non sapien</p>
                  <p className="text-sm text-gray-400">what's included?</p>
                  <ul className="text-xs">
                    <li>10 User</li>
                    <li>50 Pictures</li>
                    <li>Free Editing</li>
                    <li>Warranty</li>
                    <li>Re-shoot</li>
                  </ul>
                  <span className="min-h-12 w-full" />
                  <button className="btn btn-primary rounded-full">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* QA */}
      <section id="qa" className="w-full h-screen">
        <div className="hero bg-black/85 text-white h-screen">
          <div className="hero-content flex-col items-start">
            <h1 className="text-5xl font-bold">Most Asked Questions</h1>
            <p className="py-6">
              Here are some questions and answers about our services.
            </p>
            <div className="join join-vertical bg-transparent text-white">
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">How do I update my profile information?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="w-full h-screen">
        <div className="hero bg-black/80 text-white h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/hero-2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">About Me</h1>
              <p className="py-6">
                Maecenas pellentesque vestibulum felis, in sodales nisi ornare non. In hac habitasse platea dictumst.
                Donec eget sodales ex. Aliquam erat volutpat. Praesent fringilla tempor nunc, nec viverra odio.
                Cras rutrum mauris ut semper condimentum. Nam id laoreet nunc, quis lacinia sapien. Sed sed imperdiet nisi.
                In et massa justo. Pellentesque tempor lorem eget odio pharetra, eget venenatis odio pharetra. Fusce semper rhoncus placerat.
                Donec faucibus quam est, at sagittis diam varius in. Curabitur vestibulum, arcu in scelerisque congue, mauris purus sodales augue, id luctus elit tortor non orci.
                Morbi erat orci, vehicula id congue vel, molestie et urna. Aenean cursus, tortor consectetur consequat luctus, neque turpis dapibus ligula,
                et auctor mi nibh et tortor. Pellentesque porta, nulla eu viverra dignissim, lacus magna ornare metus, quis fringilla enim augue vel purus.
                Nulla a odio a leo tincidunt hendrerit. Nunc lacinia ipsum non nulla suscipit commodo. Duis eget sagittis felis. Morbi sed ante lectus.
                Integer consequat convallis magna.
              </p>
              <div className="flex flex-col justify-start items-start gap-1">
                <div><FontAwesomeIcon icon={faEnvelope} /> photo@example.com</div>
                <div><FontAwesomeIcon icon={faPhone} /> 123-456-7890</div>
              </div>
              <div className="flex justify-start items-center gap-4 mt-4">
                <Link href="www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link href="www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></Link>
                <Link href="www.twitter.com" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></Link>
              </div>
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
