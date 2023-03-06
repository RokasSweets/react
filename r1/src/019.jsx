import './App.scss';
import { useState } from 'react';
import { useSimpleState } from './Components/019/useSimpleState';
import { useLocalStorage } from './Components/019/useLocalStorage';
import { useAdd23 } from './Components/019/useAdd23';

function App() {

    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useSimpleState(10);
    const [count3, setCount3] = useLocalStorage(24, 'counter123');
    const [count4, setCount4] = useAdd23(42);

    return (
            <div className="App">
                <header className="App-header">
                    <h1>{count1}</h1>
                    <h1>{count2}</h1>
                    <h1>{count3}</h1>
                    <h1>{count4}</h1>


                    <div className='sq-bin'>
                    <button className='red' onClick={() => setCount1(c => c + 1)}>+1</button>
                    <button className='blue' onClick={() => setCount2(c => c + 1)}>+1</button>
                    <button className='coral' onClick={() => setCount3(c => c + 1)}>+1</button>
                    <button className='red' onClick={() => setCount4(c => !c)}>+23</button>
                    </div>
                </header>
            </div>
    );

}

export default App;