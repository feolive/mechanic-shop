import LoginForm from "@/app/_components/login-form";

export default function CustomerLogin() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left text-white">
          <h1 className="text-5xl font-bold">Game Card Rental</h1>
          <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
