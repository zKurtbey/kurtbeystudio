import Header from "./Header";
import RoutinacciApp from "./RoutinacciApp";
import ShadowCluesApp from "./ShadowCluesApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <RoutinacciApp />
        <ShadowCluesApp />
      </main>
    </>
  );
}
