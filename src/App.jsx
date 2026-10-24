import Page from "./components/structure/Page";
import "./style.scss";

function App() {
  return <Page name="Cobblemon Berry Breeding Infographic Builder">
    <section>
      <h2>1. Choose your archives.</h2>
      <input type="file" accept=".jar,.zip" multiple />
      <small>Start with the Cobblemon JAR, then add datapacks.</small>
    </section>
    <section>
      <h2>2. Configure your infographic.</h2>
    </section>
    <section>
      <h2>3. Preview and download.</h2>
    </section>
  </Page>;
}

export default App;
