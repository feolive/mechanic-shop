
export default function ClientProfile({me, signOut}) {
  return (
    <div className="w-[95%] h-36 card bg-base-100 shadow-sm rounded-xl flex justify-center items-center">
      <div className="w-full card-body text-xs flex flex-col justify-center items-center gap-1">
        <div className="w-full flex justify-between items-center">
          <h2 className="card-title text-base-content text-sm">Account</h2>
          <div>
            <label className="toggle text-base-content">
              <input type="checkbox" value="dim" className="theme-controller" />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-1">
          <img
            src={me?.avatar_addr || "/default-avatar.png"}
            alt="Avatar"
            className="w-12 h-12 rounded-full"
          />
          <p className="text-primary">
            {me?.first_name} {me?.last_name}
          </p>
          <p className="text-base-content opacity-60">
            {me?.description || "--"}
          </p>
          <p className="text-primary">credits: {me?.credits}</p>
          <button
            className="btn btn-outline btn-xs absolute bottom-4 left-4"
            onClick={signOut}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
