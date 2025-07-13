import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { Link, X, Menu } from 'lucide-react';
const navItems = [
    {
        name:'Home',
        href:'#home',
        link:<Link to='home'/>
        

    },
     {
        name:'About',
        href:'#about'
    },
     {
        name:'Skills',
        href:'#skill'
    },
      {
        name:'Projects',
        href:'#project'
    },
      {
        name:'Contact',
        href:'#contact'
    },
];
console.log(navItems);
const user = {name:'john',age:30};
const {name,city}=user
console.log(name);
console.log(city);

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false)
    useEffect(()=>{
        const handleScroll = () =>{
            setIsScroll(window.screenY > 10);
        };

        window.addEventListener('scroll', handleScroll());

        return window.removeEventListener('scroll', handleScroll());
    },[]);

    const ToggleState = ()=>{
        setMenuOpen((prev)=>!prev);
    }
  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
        isScroll ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
        <div className='container flex items-center justify-between'>
            <a href="#hero" className='hidden md:flex text-[30px] font-bold text-primary  items-center'>
                <span className='relative z-10'>
                    <span className='text-glow text-foreground'>Blise~Tech</span>{' '}
                    Portfolio
                </span>

            </a>
      
        <div className='hidden md:flex space-x-8'>
            {
            navItems.map((items, key)=>
                
        <a key={key} href={items.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'>{items.name}</a>
    
            )}
        </div>

        <button className='p-2 text-foreground z-50'
        aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}>
            {menuOpen ? <X className='md:hidden' onClick={()=>ToggleState()} size={24}/> : <Menu className='md:hidden' onClick={()=>ToggleState()} size={24}/>}
        </button>

        <div className={cn('fixed insert-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center', 
            'transition-all duration-300 md:hidden',
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}>
          <div className='space-y-8 flex flex-col text-xl mt-80'>
            {
            navItems.map((items, key)=>
                
        <a key={key} href={items.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'>{items.name}</a>
    
            )}
        </div>
        </div>

        
        </div>
    </nav>
  )
}

export default Navbar;
