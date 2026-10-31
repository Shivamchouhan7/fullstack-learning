export default function RightCard(props) {
    return (
        <div className="h-full w-full bg-amber-50 rounded-4xl p-6 flex gap-8">

            
            <div className="w-1/4">
                <h1 className="bg-gray-200 text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
                    {props.id + 1}
                </h1>
            </div>

            
            <div className="w-3/4 flex flex-col">

                <img
                    className="w-full h-48 object-cover rounded-2xl"
                    src={props.img}
                    alt=""
                />

                <p className="text-xl leading-relaxed text-black mt-4 mb-8">
                    {props.intro}
                </p>

                <div className="flex justify-between items-center mt-auto">
                    <button
                        style={{ backgroundColor: props.color }}
                        className="text-white font-medium px-8 py-2 rounded-full"
                    >
                        {props.tag}
                    </button>

                    <button className="text-black font-medium px-3 py-2 rounded-full">
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>

            </div>
        </div>
    );
}