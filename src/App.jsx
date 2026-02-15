import Metal from "./components/Metal";
import Footer from "./components/Footer";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col">
      <Landing />

      <Metal />

      <Footer />
    </div>
  );
}

export default App;
