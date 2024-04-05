import  { useState } from 'react';
import Nav from './Nav';
// import Theme from './Theme';
import './Main.css'

const Main = () => {
    const [theme,settheme]=useState()
    const data = (data) =>{
        settheme(data);
    }
    return (
        <div className={theme ? 'dark' : 'light'}>
            <Nav data={data}></Nav>
            hel
        </div>
    );
};

export default Main;