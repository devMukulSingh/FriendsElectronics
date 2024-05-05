import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="mt-[5rem] min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
