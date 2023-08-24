import "@styles/index.css";
export const metadata = {
  title: "Muhammad Kashif",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app overflow-x-hidden">{children}</body>
    </html>
  );
}
