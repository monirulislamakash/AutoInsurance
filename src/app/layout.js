import { Inter, Merriweather } from "next/font/google";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "./BootstrapClient";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Disclaimer from "./components/Disclaimer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Auto Insurance | Policy Bear",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="trustedform" type="text/javascript">
          {`(function () {
            var tf = document.createElement('script');
            tf.type = 'text/javascript';
            tf.async = true;
            tf.onload = function () {
                console.log("TrustedForm script loaded.");
            };
            tf.src = ("https:" == document.location.protocol ? 'https' : 'http') +
                '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
                new Date().getTime() + Math.random();
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tf, s);
          })();`}
        </Script>
        <noscript>
          <img src="https://api.trustedform.com/ns.gif" />
        </noscript>
      </head>
      <body className={`${inter.variable} ${merriweather.variable}`}>
        <BootstrapClient />
        <Navbar />
        {children}
        <Disclaimer />
        <Footer />
      </body>
    </html>
  );
}
