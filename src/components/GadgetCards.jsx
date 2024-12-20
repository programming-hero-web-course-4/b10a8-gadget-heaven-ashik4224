import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const GadgetCards = () => {
    const data = useLoaderData()
    const {category} = useParams()
    const [gadget, setGadget] = useState([])


    useEffect(() => {
        if (category === "All" || !category) {
            setGadget(data.slice(0, 12));
        } else {
            const filterByCategory = [...data].filter(gadget => gadget.category === category);
            setGadget(filterByCategory);
        }
    }, [category, data]);
    
    return (
        
        <div className="container w-12/12 px-6 lg:px-0 lg:pr-7">
            {gadget.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gadget.map(gadget => <Card key={gadget.id} gadget={gadget}></Card>)}
                </div>
            ) : (
                <div className=" flex flex-col justify-center mx-auto items-center">
                    <p className="text-center text-3xl font-bold mb-3 text-black">Product Not Found</p>
                    
                    <img src="https://i.ibb.co.com/qdF0jWR/images.png" alt="" className=" w-80 h-[300px] ml-10   rounded-xl border border-black-400" />
                </div>
            )}
        </div>
    );
};

export default GadgetCards;