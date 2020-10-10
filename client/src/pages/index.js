import React,{useState,useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ThemeApi from "../services/Theme"
import Header from '../components/Header';
import NewChallengeForm from '../components/NewChallengeForm';


export default function Router() {
  const [darkTheme,setDarkTheme] = useState(false)
  useEffect(() => {
  
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setDarkTheme(true)
    }
    

  }, [])

  return (
    <ThemeApi.Provider value={{darkTheme,setDarkTheme}}>
    <BrowserRouter >
      <Header />
      <Switch>
        <Route path="/addChallenge">
          <NewChallengeForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
     </ThemeApi.Provider>


  );
}
