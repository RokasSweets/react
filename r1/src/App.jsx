import { useState } from 'react';
import './App.scss';
import BoxLarge from './Components/018/BoxLarge';
import GlobalSqContext from './Components/018/GlobalSqContext';
import rand from './Functions/rand';
import GlobalUserContext from './Components/018/GlobalUserContext';


const users = ['Bebras','Zebras', 'Udra'];

function App() {

    const [sq1, setSq1] = useState([]);
    const [sq2, setSq2] = useState([]);

    const [user, setUser] = useState(users[rand(0, 2)]);

    const addSq1 = _ => {
        setSq1(s => [ ...s, rand(100, 999)]);
    }

    const addSq2 = _ => {
        setSq2(s => [...s, rand(100, 999)]);
    }

    return (
        <GlobalUserContext.Provider value={{user}}>

        <GlobalSqContext.Provider value={
            {
                sq1: sq1,
                sq2
            }
            }>
            <div className="App">
                <header className="App-header">


                    <BoxLarge />


                    <button className="coral" onClick={addSq1}>add</button>
                    <button className="blue" onClick={addSq2}>add</button>
                    <button className="red" onClick={() => setUser(users[rand(0, 2)])}>user</button>

                </header>
            </div>
        </GlobalSqContext.Provider>
        </GlobalUserContext.Provider>
    );

}

export default App;