export default function HeroText(){
    return <div>
        <div className='h-150 flex flex-col justify-between  '>
            <h3 className='text-white font-bold text-4xl m-10 p-1 grid justify-items-start gap-1 w-fit text-left '>
                <span>Tailored </span>
                <span className="text-5xl text-indigo-300 justify-self-center font-serif italic my-1">Financial</span>
                <span>Infrastructure </span>
            </h3>
            <p className='text-white text-xl w-full font-medium  '>Addressing the unique friction points of every customer segment. From alternative credit scoring for the underbanked to low-fee global transfers and automated wealth tools, our platform builds inclusion and drives sustained financial growth</p>
            <i className="ri-arrow-right-up-line text-8xl  "></i>
        </div>
    </div>
}