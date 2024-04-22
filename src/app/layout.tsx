import './style.css'
import Sidebar from '@/components/sidebar'


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      <div className="container">
        <div className="main">
          <Sidebar />
          <section className="col note-viewer">{children}</section>
        </div>
      </div>
    </body>
  </html>
  );
}
