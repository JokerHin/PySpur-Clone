export default function Hero() {
  return (
    <div>
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
        <div className="flex w-full max-w-6xl flex-col space-y-4 overflow-hidden pt-8">
          <h1 className="text-center text-5xl font-medium leading-tight text-foreground sm:text-7xl md:text-8xl mt-[-10px] font-londrina">
            <span className="inline-block px-1 md:px-2 text-balance font-mono font-semibold">
              Build Reliable And Modular AI Agents
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-center text-lg leading-8 text-muted-foreground sm:text-2xl sm:leading-9 text-balance mt-5 text-gray-500">
            Drag-and-drop AI Agent Builder. Deploy to API in 1 click.
            Open-Source.
          </p>
        </div>
        <div className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-black text-white hover:bg-grey-100 h-9 rounded-md px-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dnd-ai-builder.vercel.app/
"
          >
            Get Started
          </a>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dnd-ai-builder.vercel.app/
"
          >
            Talk to a human
          </a>
        </div>
        <p className="mt-5 text-sm text-muted-foreground"></p>
        <div className="relative mx-auto flex w-full items-center justify-center">
          <div className="relative rounded-md p-2 ring-1 ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10 backdrop-blur-md max-w-[90%] xl:max-w-[100%] mt-16 w-full">
            <video
              src="https://assets.sevn.ai/website_assets/hero.mp4"
              className="w-full rounded-md border aspect-video"
              controls
              autoPlay
              playsInline
              muted
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 from-background via-background to-transparent lg:h-1/4"></div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Itim&family=Jersey+10&family=Londrina+Outline&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap');
      `}</style>
    </div>
  );
}
