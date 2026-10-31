import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function Page2Content(props){
    return <div className='pb-16 pt-6  flex items-center gap-10 h-[90vh]  px-18'>
        <LeftContent/>
        <RightContent  solutions={props.solutions} />
        
    </div>

}