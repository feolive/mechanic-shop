export default function WelcomeScroll() {
  return (
    <main className="flex flex-col justify-start items-center mt-8 w-full scroll-auto">
      <div
        className="hero min-h-[300px] h-[300px] sm:h-[800px]"
        style={{
          backgroundImage: "url(/hero.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hi-5 Auto</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 min-h-[300px] h-[500px] sm:h-[800px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/hero-2.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
