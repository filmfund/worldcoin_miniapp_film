import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/final black-min.png"
          alt="filmfund logo"
          width={180}
          height={180}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            This is a sample app for future Worldcoin mini app{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Build during ETH GLOBAL Prague 2025.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
                   
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://filmfundeth.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          FILMFUND.ETH WEBSITE
        </a>
        
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://worldcoin.org/mini-app?app_id=app_0165b80245e5c050d64aac7a4c485a3c&draft_id=meta_f2e62dd6a4047dd96b84b3ea39cc2b6b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          FILMFUND MINIAPP
        </a>
      </footer>
    </div>
  );
}
