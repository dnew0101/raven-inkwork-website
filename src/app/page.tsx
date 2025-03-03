/**
 * Server component; inner node, not a leaflet/client component
 */
import Navbar from "./components/client/Navbar";
export default function Home() {
  return (
    <nav>
      <Navbar />
    </nav>
  );
}
