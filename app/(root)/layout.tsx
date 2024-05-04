import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#eff6ff] min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
