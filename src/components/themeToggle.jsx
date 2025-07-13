import React, {useEffect, useState} from 'react';

import { Sun,Moon } from 'lucide-react';
import { cn } from '../lib/utils';

const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
        const getTheme = localStorage.getItem('theme');
        if(getTheme === 'dark'){
            setIsDarkMode(true);
             document.documentElement.classList.add('dark');
        }else{
            setIsDarkMode(!true)
            document.documentElement.classList.remove('dark');
        }

    },[]);

    const toggleState = () => {
       if(isDarkMode){
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme','light');
        setIsDarkMode(false)
       }else{
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme','dark');
        setIsDarkMode(!false)
       }
    }
  return (
    <div>
      <button className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )} onClick={()=>toggleState()}>
        {''}
        {
            isDarkMode ? <Sun className='h-6 w-6 text-yellow-300'/>: <Moon className='h-6 w-6 text-blue-900'/>
        }
      </button>
    </div>
  )
}

export default ThemeToggle;
