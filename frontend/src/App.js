import Landing from "./components/Landing";
import Hero from "./components/Hero";
import About from "./components/About";
import Properties from "./components/Property";
import Flexible from "./components/Flexible";
import PropertyForm from "./components/PropertyForm";

function App() {
  return (
    <Landing>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Properties />
      </section>
      <section>
        <Flexible />
      </section>
      <section>
        <PropertyForm 
          // onSave={this.handleSubmit}
          />
      </section>
    </Landing>
  );
}

export default App;
