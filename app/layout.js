import localFont from "next/font/local";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Golden Wheat Bakery",
  description:
    "The Golden Wheat Bakery is a popular local bakery known for its handcrafted artisan breads, delicious pastries, and savory buns. Committed to using high-quality ingredients and traditional baking techniques, they aim to expand their reach and better engage with customers through a new online presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
