import './index.css';
import Header from '../src/components/Header/Header.jsx'
import Main from '../src/components/Main/Main.jsx';
import Statics from './components/Statics/Statics';
import Advanced from './components/Advanced/Advanced';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import grafic from './assets/img/main/icon-brand-recognition.svg';
import detail from './assets/img/main/icon-detailed-records.svg';
import fully from '../../challenge/src/assets/img/main/icon-fully-customizable.svg';


export default function App() {
  
  return (
    <>
      <Header />
      <Main />
      <Advanced />
      <div className="AdvancedStatistics">
          <Statics 
            src={grafic}
            text="Brand Recognition"
            mainText="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />
          <Statics
            src={detail}
            text="Detailed Records"
            mainText="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <Statics 
            src={fully}
            text="Fully Customizable"
            mainText="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
      </div>
      <Boost />
      <Footer />
    </>
  );
}