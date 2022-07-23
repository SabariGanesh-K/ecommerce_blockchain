import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main/Main';
import { MoralisProvider } from 'react-moralis';
import { AppProvider } from './context/AppContext';
import { ProductsList } from './components/products/ProductsList';
import { Header } from './components/HeaderAndFooter/Header';
import { Footer } from './components/HeaderAndFooter/Footer';
import {isMobile} from 'react-device-detect';

function App() {
  console.log(process.env.REACT_APP_APPID)
  if (isMobile){
    return(
      <div className='h-screen bg-black text-white text-4xl text-center font-mono ' >Kindly use a desktop/laptop browser</div>
    )
  }
  
  else{
    return (
   
      <MoralisProvider appId= {process.env.REACT_APP_APPID} serverUrl= {process.env.REACT_APP_SERVERURL}  >
        <AppProvider>
           <Main/> 
    </AppProvider>
      </MoralisProvider> 
      
    );  
  }

}

export default App;
