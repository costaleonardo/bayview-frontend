import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import Header from '../components/Header';
import Footer from '../components/Footer';

import BlogPosts from "../components/BlogPosts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-[1440px] mx-auto flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Add Blog Contnet */}
        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
}
