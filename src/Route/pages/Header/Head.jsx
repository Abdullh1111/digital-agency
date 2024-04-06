
import { GrStar } from "react-icons/gr";
const Head = () => {
    return (
        <div>
            <img src="../../../../public/Vector 1.svg" className="absolute top-56 left-[800px]" alt="" />
            <img src="../../../../public/Sketch-annotation-element-stroke-abstract--highlight-bling-line-2.svg" className="absolute top-[200px] left-[475px]" alt="" />
            <img className='absolute top-[270px] left-[362px]' src="../../../../public/World Class.svg" alt="" />
            <img className='absolute top-60 left-80' src="../../../../public/Sketch-annotation-element-stroke-line-highlight-scribble-rectangle-1.svg" alt="" />
            <GrStar className='text-8xl absolute top-60 left-4'></GrStar>
            <div className='flex justify-end'>
                
            <GrStar className='text-6xl absolute right-72 top-40'></GrStar>
            </div>
        <div className='flex justify-center pt-16 gap-4'>
            <p><span className='relative top-20 left-40 text-[#66B5C2] text-[150px] font-bold text-end'>Digital</span><br />
            <span className='text-[#FFC93E] text-[150px] font-bold'>Agency</span></p>
            <img className='relative top-72 h-[475px] rounded-3xl' src="../../../../public/download.jpeg" alt="" />
        </div>
        </div>
    );
};

export default Head;