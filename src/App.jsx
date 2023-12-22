import Header1 from './componets/Cabecalho1';
import EstiloGlobal from './styles';
import Header2 from './componets/Cabecalho2';
import Hero from './componets/Hero';
import Visita from './componets/Visita';
import Lar from './componets/Historia';
import Gallery from './componets/gallery';
import Serviços from './componets/Serviços';
import Maps from './componets/Mapa';
import Infos from './componets/infos';
import Footer from './componets/Footer';




function App() {

  return (
    <>
      <EstiloGlobal />
      <Header1 />
      <Header2 />
      <Hero  />
      <Visita />
      <Lar/>
      <Gallery/>
      <Serviços/>
      <Maps/>
      <Infos />
      <Footer />
    </>
  )
}

export default App;
