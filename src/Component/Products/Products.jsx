import { BeakerIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Coffee from '../Coffee/Coffee';

const Products = () => {
    const loadedCoffees = useLoaderData()
const [coffees, setCoffees] = useState(loadedCoffees)
   

    const backgroundImageUrl = 'https://i.ibb.co/6Hq9f3d/1.png'
    return (
        <div className="bg-second"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%'
            }}>
            <div >
                <h1 className="text-center text-third text-4xl font-extrabold py-16">Our Popular Products
                    <div className="flex justify-center items-center mt-3">
                        <button className="bg-first rounded-md text-2xl font-bold  py-1 px-3  border-2 flex items-center ">
                            <Link to="/addcoffee">Add Coffee</Link>
                            <BeakerIcon className="h-6 w-6 ml-2 text-blue-500" />
                        </button>
                    </div>
                </h1>
                <div className='grid grid-cols-2 gap-5 w-11/12 mx-auto'>
                    {
                        coffees.map(coffee => <Coffee
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        ></Coffee>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
