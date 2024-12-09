import Navbar from '../Components/navbar.tsx';
import Footer from '../Components/footer.tsx';

function BaseLayout() {
  return (
    <div className="font-family: system-ui min-h-screen flex flex-col bg-yellow-300">
      <header className="w-full py-4">
        <Navbar />
      </header>
      <main className="flex-grow container mx-auto py-8">
        {/*contenido de la página */}
      </main>
      <Footer />
    </div>
  );
}

export default BaseLayout;
