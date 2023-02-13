function Click() {
    //3
    const doSomething = color => {
        return function() {
            console.log('YES ' + color);
        }
    }

    //3.2
    const doSomething2 = color => {
        console.log('YES-2 ' + color);
    }

    //1
    const go = () => {
        console.log('GO RED!');
    }

    //2
    const goEvent = e => {
        console.log(e);
        console.log('GO RED!');
    }


    return (
        <div>
            <button className="red" onClick={go}>CLICK ME #1</button>
            <button className="red" onClick={goEvent}>CLICK ME #2 event</button>
            <button className="coral" onClick={doSomething('CORAL BUTTON')}>CLICK ME #3</button>
            <button className="red" onClick={doSomething('RED BUTTON')}>CLICK ME #3</button>
            <button className="red" onClick={() => doSomething2('RED BUTTON')}>CLICK ME #3.2</button>
            <button className="blue" onClick={() => console.log('YES BLUE!')}>One Liner #4</button>
            <button className="blue" onClick={e => console.log(e, 'YES BLUE!')}>One Liner #4 event</button>

        </div>
    );
}

export default Click