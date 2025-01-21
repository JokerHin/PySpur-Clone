export default function Header() {
  return (
    <div>
      <header className="sticky top-0 z-50 py-2 bg-background/60 backdrop-blur">
        <div className="flex justify-between items-center container">
          <a
            title="brand-logo"
            className="relative mr-6 flex items-center space-x-2"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-auto h-[40px]"
            >
              <rect width="7" height="7" x="14" y="3" rx="1"></rect>
              <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
            </svg>
            <span className="font-bold text-xl">Buildo</span>
          </a>
          <div className="flex items-center">
            <nav className="mr-10 hidden lg:block">
              <nav
                aria-label="Main"
                data-orientation="horizontal"
                dir="ltr"
                className="relative z-10 flex max-w-max flex-1 items-center justify-center"
              >
                <div style={{ position: "relative" }}>
                  <ul
                    data-orientation="horizontal"
                    className="group flex flex-1 list-none items-center justify-center space-x-1"
                    dir="ltr"
                  ></ul>
                </div>
                <div className="absolute left-0 top-full flex justify-center"></div>
              </nav>
            </nav>
            <div className="gap-2 flex items-center flex-wrap justify-end">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:bg-slate-100 h-9  px-3"
                href="https://dnd-ai-builder.vercel.app/
"
              >
                Get Start
              </a>
              <a
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:bg-slate-100 h-9 px-3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://dnd-ai-builder.vercel.app/
"
              >
                Join Us
              </a>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <span className="sr-only">Toggle theme</span>
              </button>
            </div>
          </div>
        </div>
        <hr className="absolute w-full bottom-0 transition-opacity duration-300 ease-in-out opacity-0" />
      </header>
    </div>
  );
}
