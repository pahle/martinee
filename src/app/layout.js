import localFont from "next/font/local";

import "@/styles/tailwind.css";

const futura = localFont({
  src: [
    {
      path: "../fonts/FuturaCyrillicLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/FuturaCyrillicBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/FuturaCyrillicMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/FuturaCyrillicDemi.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/FuturaCyrillicBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/FuturaCyrillicExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: {
    template: "%s - Martinee Studio",
    default:
      "Martinee Studio",
  },
  description: {
    default:
      "Martinee Studio Clothing Store is a place where you can find the best clothes for you. We have a wide range of clothes for your needs.",
  },
};

function Header() {
  return (
    <header className="px-6 lg:py-0 py-2 fixed top-0 w-full z-10 bg-secondary lg:h-20 h-[51px]">
      <div className="flex flex-row lg:justify-between justify-center items-center lg:[&>*]:leading-[4.5rem]">
        <h1 className="text-xl font-bold lg:block hidden">
          MENU
        </h1>
        <h1 className="lg:text-6xl text-[2.8rem] py-1.5 font-extrabold tracking-[-0.20rem]">
          MARTINEE*
        </h1>
        <h1 className="text-xl font-bold lg:block hidden">
          CART(0)
        </h1>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="px-6 lg:py-0 py-2 fixed bottom-0 w-full z-10 bg-secondary lg:h-20 h-[51px]">
      <div className="flex flex-row lg:justify-center justify-between items-center [&>*]:lg:leading-[4.5rem]">
        <h1 className="text-xl font-bold lg:hidden block">
          MENU
        </h1>
        <h1 className="lg:text-6xl text-[2.8rem] py-1.5 font-extrabold tracking-[-0.20rem]">
          DOG
        </h1>
        <h1 className="text-xl font-bold lg:hidden block">
          CART(0)
        </h1>
      </div>
    </footer>
  );
}

function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="h-screen">{children}</main>
      <Footer />
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-secondary text-base antialiased"
    >
      <body
        className={`${futura.className} h-full min-h-full flex-col`}
      >
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
