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
                Tiana Young Photography
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
                <p className="text-xs sm:text-lg">Couples</p>
              </GlassBadge>
              <GlassBadge>
                <p className="text-xs sm:text-lg">Portraits</p>
              </GlassBadge>
              <GlassBadge>
                <p className="text-xs sm:text-lg">Graduation Photos</p>
              </GlassBadge>
              <GlassBadge>
                <p className="text-xs sm:text-lg">Photo Editing</p>
              </GlassBadge>
              <GlassBadge>
                <p className="text-xs sm:text-lg">Family Photos</p>
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
            <img src="https://scontent.fyyc6-1.fna.fbcdn.net/v/t39.30808-6/493307716_122109311168841324_4142387447815648953_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bLVHaUhnU7gQ7kNvwEIOU-J&_nc_oc=Adm0j9UlMKWkg1TJeqLyTQbvHlQ5qoWpl_wm_6__kpxFqJVo8cIMcsUa4iw5YX7XX80&_nc_zt=23&_nc_ht=scontent.fyyc6-1.fna&_nc_gid=HT0ZKocjh1UciDRYd53R4w&oh=00_AfJIfU0rd_n_5E8lb4gFi8aId2rh0sFvMyumKz_MxEJaog&oe=682A9A09" loading="lazy" alt="1" className="h-[300px] aspect-[16/9] object-cover object-center rounded-lg shadow-2xl hover:scale-105 cursor-pointer transition-all ease-linear duration-300" />
            <img src="https://scontent.fyyc6-1.fna.fbcdn.net/v/t39.30808-6/493312604_122109317960841324_3859703753619097542_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Y81I2bgWqgYQ7kNvwFqWbmK&_nc_oc=AdnWaMyCI7KTwBrffHLAn_Fc35hfWA8izvuc--YYsZvWxUOdDPY_P04lPYFbiVrpn4M&_nc_zt=23&_nc_ht=scontent.fyyc6-1.fna&_nc_gid=ZKMp__mnu7JwSSs0-v_6Rg&oh=00_AfLmRU4-XW8vlryqlL7FEMNc8pUH1DcFNKOo73iG1jhLEA&oe=682AA929" loading="lazy" alt="2" className="h-[300px] aspect-[16/9] object-cover object-center rounded-lg shadow-2xl hover:scale-105 cursor-pointer transition-all ease-linear duration-300" />
            <img src="https://scontent.fyyc6-1.fna.fbcdn.net/v/t39.30808-6/493311822_122109339932841324_409872328682925252_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=L5Sz9OZI-lgQ7kNvwE2UpKq&_nc_oc=AdkepR7iKS4VvgFAPLrubRLkeuTRXMvV70savtqBNGXCauunmbi6TPESfD-r1s3KTmE&_nc_zt=23&_nc_ht=scontent.fyyc6-1.fna&_nc_gid=puqHW4n9RQ9t-EKbADMUYg&oh=00_AfINGp87xHojG-3T1NZkGutQhWH7TsILENeKYCzPeo-Uxg&oe=682A9A6F" loading="lazy" alt="3" className="w-[400px] aspect-auto col-span-1 row-span-2 object-cover object-center rounded-lg shadow-2xl hover:scale-105 cursor-pointer transition-all ease-linear duration-300" />
            <img src="https://scontent.fyyc6-1.fna.fbcdn.net/v/t39.30808-6/493322983_122109339878841324_2014769173927702346_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=97qfXYk1nIEQ7kNvwHnb6e7&_nc_oc=Adlw7s_5gx0_mk3hN8kKjwXl4SkeBxc5b3gMCLba_ao3i4NUerR5d3BvgOy9Zl89OGY&_nc_zt=23&_nc_ht=scontent.fyyc6-1.fna&_nc_gid=uFlsnUQwL83Ydujakq4jCg&oh=00_AfJ1kS-Q-EvRyTMMNZwYbmO4MfhYiGxcHWljdFF0yvtg7g&oe=682A9877" loading="lazy" alt="3" className="h-[300px] aspect-[16/1] col-span-2 row-span-1 object-cover object-center rounded-lg shadow-2xl hover:scale-105 cursor-pointer transition-all ease-linear duration-300" />
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section id="pricing" className="w-full h-screen">
        <div className="hero bg-black/90 text-white h-screen">
          <div className="hero-content flex-col mt-20 gap-16">
            <h1 className="text-xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-t from-white to-primary font-bold">Pricing</h1>
            <div className="flex justify-center items-center gap-12">
              <div className="card bg-base-100 text-base-content w-[260px] h-[400px] rounded-xl">
                <div className="card-body hover:scale-103 cursor-pointer transition-all ease-linear duration-300">
                  <h2 className="card-title badge badge-outline badge-neutral">Couples Photos</h2>
                  <p className="text-2xl font-bold">$90</p>
                  <p className="text-xs">Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                  <p className="text-sm text-gray-400">what's included?</p>
                  <ul className="text-xs">
                    <li>1 User</li>
                    <li>60+ Pictures</li>
                    <li>Free Delivery</li>
                  </ul>
                  <span className="min-h-12 w-full" />
                  <button className="btn btn-primary rounded-full">Book Now</button>
                </div>
              </div>
              <div className="card bg-black/85 text-base-100 w-[260px] h-[400px] rounded-xl neon-card">
                <div className="card-body hover:scale-103 cursor-pointer transition-all ease-linear duration-300">
                  <h2 className="card-title badge badge-outline badge-secondary">Graduation Photos</h2>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-secondary">$100</p>
                    <p className="badge badge-xs badge-warning">Most Popular</p>
                  </div>
                  <p className="text-xs text-base-100">Vivamus tortor purus, egestas sit amet posuere in, fringilla ac erat.</p>
                  <p className="text-sm text-gray-400">what's included?</p>
                  <ul className="text-xs">
                    <li>2 User</li>
                    <li>70+ Pictures</li>
                    <li>Free Editing</li>
                  </ul>
                  <span className="min-h-12 w-full" />
                  <button className="btn btn-primary rounded-full">Book Now</button>
                </div>
              </div>
              <div className="card bg-base-100 text-base-content w-[260px] h-[400px] rounded-xl">
                <div className="card-body hover:scale-103 cursor-pointer transition-all ease-linear duration-300">
                  <h2 className="card-title badge badge-outline badge-accent">Wedding Photos</h2>
                  <p className="text-2xl font-bold text-accent">$150</p>
                  <p className="text-xs">Suspendisse potenti. In nec metus nec est euismod egestas et non sapien</p>
                  <p className="text-sm text-gray-400">what's included?</p>
                  <ul className="text-xs">
                    <li>10 User</li>
                    <li>100+ Pictures</li>
                    <li>Free Editing</li>
                    <li>Warranty</li>
                    <li>Re-shoot</li>
                  </ul>
                  <span className="min-h-12 w-full" />
                  <button className="btn btn-primary rounded-full">Book Now</button>
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
                <div><FontAwesomeIcon icon={faEnvelope} />tianayoungphotography@gmail.com</div>
                <div><FontAwesomeIcon icon={faPhone} /> 403-467-3873</div>
              
              </div>
              <div className="flex justify-start items-center gap-4 mt-4">
                <Link href="https://www.instagram.com/tianayoungphotography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
                <Link href="https://www.facebook.com/tianayoungphotography" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></Link>
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
