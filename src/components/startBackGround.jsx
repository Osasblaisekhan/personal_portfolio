import React, { useEffect, useState } from 'react'

const StartBackGround = () => {
    const [stars, setStars] = useState([]);
    const [meteos, setMeteos] = useState([]);

    console.log(stars);

       useEffect(()=>{
        generateStars();
        generateMeteos();

        const handleResize = ()=>{
            generateStars();
            generateMeteos();
        }

        window.addEventListener('resize', handleResize());

        return ()=> window.removeEventListener('resize', handleResize());
    },[])

    const generateStars = () =>{
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight)/(10000));
        
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++){
        newStars.push({
            id:i,
            size: Math.random()*3 + 1,
            x: Math.random()*100,
            y:Math.random()*100,
            opacity: Math.random()* 0.5 + 0.5,
            animationDuration: Math.random()* 4 + 2
        });

        setStars(newStars);
    }}


     const generateMeteos= () =>{
        const numberOfMeteos = 8;
        
    const newMeteos = [];

    for (let i = 0; i < numberOfMeteos; i++){
        newMeteos.push({
            id:i,
            size: Math.random()*6 + 1,
            x: Math.random()*100,
            y:Math.random()*10,
            delay: Math.random()* 15,
            animationDuration: Math.random()* 3 + 3
        });
    }

    setMeteos(newMeteos);

    };
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0' >
      {stars.map((star)=>
      <div key={star.id} className='star animate-pulse-subtle' style={{
        width: star.size + "px",
        height: star.size + "px",
        left: star.x + "%",
        top: star.y + "%",
        opacity: star.opacity,
        animationDuration: star.animationDuration + "s",
      }}>

    </div>
    )}


     {meteos.map((meteo)=>
      <div key={meteo.id} className='meteor animate-meteor' style={{
        width: meteo.size*50 + "px",
        height: meteo.size*2 + "px",
        left: meteo.x + "%",
        top: meteo.y + "%",
        animationDelay: meteo.opacity,
        animationDuration: meteo.animationDuration + "s",
      }}>

    </div>
    )}
    </div>
  )
}

export default StartBackGround;
