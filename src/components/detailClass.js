import { useParams } from "react-router-dom";
import { classes } from "../class/listOfClass";



function Detail() {
    const { id } = useParams();
    const data = classes.find(obj => {
        return obj.idClass === id;
    })

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-5xl font-serif text-center">{data.name}</h2>
            <div className="grid grid-cols-2 mt-8 gap-5">
                <div>
                    <h3 className="text-3xl">{data.name}</h3>
                    <p className="text-2xl mt-4 font-light">{data.detail}</p>
                    <p className="mt-4 font-serif">Instructor: {data.instructor}</p>
                    <p className="mt-4 font-serif text-xl">Price: <b>${data.price}</b></p>
                    <button className="mt-8 font-serif bg-green-400 hover:bg-yellow-200 text-white font-bold py-2 px-4 rounded-3xl w-40 h-14">Book Now</button>
                </div>
                <div>
                    <img className="w-auto h-96" src={data.img} />
                </div>
            </div>
        </div>
    );
}

export default Detail;