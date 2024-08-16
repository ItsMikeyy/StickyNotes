import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Sticky Notes",
  description: "A website for creating short notes!",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="py-8 flex justify-between text-2xl sm:text-3xl">
        <h3>Sticky Notes</h3>
        <h3>Login</h3>
    </header>
  )

  const footer = (
    <footer className="py-8 flex justify-between text-xl">
      <h3>Copyright</h3>
    </footer>
  )

  return (
    <html lang="en">
      
      <body className={"max-w-[1000px] flex flex-col mx-auto min-h-screen " + opensans.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
