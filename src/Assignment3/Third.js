import React, { useState } from 'react';
import styles from './Third.module.css'; 

function Third() {
    const [greet, setGreet] = useState(['Happy Birthday','Happy Anneversary', 'Good Morning','Good Afternoon','Good Evening'])
    const [currentNum, setCurrentNum] = useState(0)
    
    const handleGreet = () => {
        setCurrentNum(currentNum + 1)
    }
     
    return (
        <div>
            <h1 style={{backgroundColor:'yellow'}} className={styles.greetings}>Greetings : {greet[currentNum]}</h1> {/* Use class name from module CSS */}
            <button onClick={handleGreet}>Greet</button>
        </div>
    )
}

export default Third;
