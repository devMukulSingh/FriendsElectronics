import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#ced6e0] min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
