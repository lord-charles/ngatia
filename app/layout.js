import "./globals.css";
import NavSection from "./nav";
import Footer from "./components/footer";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className="overflow-x-hidden w-[100vw] flex flex-col">
          <NavSection/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
