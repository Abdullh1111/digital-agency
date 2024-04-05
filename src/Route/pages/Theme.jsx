import './Theme.css';
import { FaSun, FaMoon } from "react-icons/fa";
const Theme = ({handletheme,theme}) => {
    
    // console.log(theme)
    return (
        <div>
            <button onClick={handletheme} className='bg-[#d9d9d933] flex text-xl rounded-lg text-black'>
                <span className={theme ? '' : 'bg-white pr-2 rounded-full'} ><FaSun ></FaSun></span>
                <span className={theme ? 'bg-white pl-2 rounded-full' : ''}><FaMoon></FaMoon></span>
            </button>
        </div>
    );
};

export default Theme;