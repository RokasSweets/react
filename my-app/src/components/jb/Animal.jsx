import rand from '../../functions/rand' 
import ShowName from './ShowName';

function Animal({color, animalName, h1Class}) {
return ( 
        <h1 style={{
            color,
            backgroundColor: 'skyblue',
            padding: '8px 30px',
            fontSize: rand(20, 50) + 'px',
            letterSpacing: rand(0, 1) ? '5px' : null,
            fontFamily: 'monospace'
            }}><ShowName animalName={animalName} /> No: {
                
                rand(11, 15)
                
                }</h1>
    )
}


export default Animal;