import 'remixicon/fonts/remixicon.css'
import RightCard from "./RightCard";


export default function RightContent(props){
        return <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
            {props.solutions.map(function(elem,idx){
                
                return <RightCard key={idx} color={elem.color} intro={elem.intro} id={idx} img={elem.img} tag={elem.tag} />
            })}

        </div>
      

}