import "./App.css";
import { TipCalculator } from "./components/tip-calculator/TipCalculator";
import { Layout } from "./components/layout/Layout";
function App() {
  return (
    <>
      <Layout>
        <TipCalculator />
      </Layout>
    </>
  );
}

export default App;
