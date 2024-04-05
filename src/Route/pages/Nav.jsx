import  { useState } from 'react';
import './Nav.css';
import Theme from './Theme';
const Nav = ({data}) => {
    const [theme, setTheme] = useState(true);
    const handletheme=() =>{
        setTheme(!theme)
    }
    data(theme)
    return (
        <div className={theme ? 'bg-gradient-to-r from-[#7b3eff50] via-[#0A142F] to-[#be229c36]' : ''}>
            
            <img className={`absolute ${theme ? 'opacity-50' : 'opacity-0'}`} src="../../../public/430076393_836341161866186_8150816279921766384_n.png" alt="" />
        <div className='flex justify-around items-center pt-3'>
            <h1 className='text-4xl font-bold'>Shera <span className='bg-gradient-to-t from-[#63b5c6] to-[#F8B549] text-transparent bg-clip-text'>Web</span></h1>
            <p className='text-lg font-medium'>About us</p>
            <p className='text-lg font-medium'>What We do</p>
            <p className='text-lg font-medium'>Our work</p>
            <p className='text-lg font-medium'>Blog</p>
            <p className='text-lg font-medium'>Say hi</p>
            <div className='flex gap-4 items-center'>
                <h4>Language <span className='px-6 py-2 bg-white rounded-lg text-black'>English</span></h4>
            <Theme handletheme={handletheme} theme={theme}></Theme>
            </div>
        </div>
        </div>
    );
};

export default Nav;