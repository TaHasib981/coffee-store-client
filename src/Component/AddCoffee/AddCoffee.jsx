const AddCoffee = () => {
    const backgroundImageUrl = 'https://i.ibb.co/b26XpY1/11.png'
    const handleAddCoffee = (e) =>{
        e.preventDefault()
        const name = e.target.Name.value
        const chef = e.target.Chef.value 
        const supplier = e.target.Supplier.value 
        const taste = e.target.Taste.value 
        const category = e.target.Category.value 
        const details = e.target.Details.value 
        const photo = e.target.Photo.value 
        const newCoffee = {name, chef, supplier, taste, category, details, photo}
        
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('coffee added')
            }
        })
    }
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%'
            }}>
            <div className="bg-backgroundcolor w-[75%] mx-auto pt-24">
                <h1 className="text-center font-extrabold text-5xl text-third text-shadow-2xl">Add New Coffee</h1>
                <p className="w-[75%] mx-auto text-third">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <div className="mt-5 w-[90%] mx-auto">
                    <form onSubmit={handleAddCoffee}>
                        <div className="flex">
                            <div className="form-control md:w-1/2 mr-2">
                                <label className="label">
                                    <span className="label-text text-2xl text-third font-bold">Name</span>
                                </label>
                                <label className="input-group">
                                    <input  type="text" name="Name" placeholder="enter coffe name" className="input input-bordered w-full bg-[#FFFFFF] outline-none border-none" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-2xl text-third font-bold">Chef</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="Chef" placeholder="enter chef name" className="input input-bordered w-full bg-[#FFFFFF] outline-none border-none" />
                                </label>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="form-control md:w-1/2 mr-2">
                                <label className="label">
                                    <span className="label-text text-2xl text-third font-bold">Supplier</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="Supplier" placeholder="enter supplier name" className="input input-bordered w-full bg-[#FFFFFF] outline-none border-none" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-2xl text-third font-bold">Taste</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="Taste" placeholder="enter about taste" className="input input-bordered w-full bg-[#FFFFFF] outline-none border-none" />
                                </label>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="form-control md:w-1/2 mr-2">
                                <label className="label">
                                    <span className="label-text text-2xl text-third font-bold">Category</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="Category" placeholder="enter category name" className="input input-bordered w-full bg-[#FFFFFF] outline-none border-none" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-2xl text-third font-bold">Details</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="Details" placeholder="enter Details name" className="input input-bordered w-full bg-[#FFFFFF] outline-none border-none" />
                                </label>
                            </div>
                        </div>
                        <div className="">
                            <div className="form-control mr-2">
                                <label className="label">
                                    <span className="label-text text-2xl text-third font-bold">Photo</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="Photo" placeholder="enter photo url" className="input input-bordered w-full bg-[#FFFFFF] outline-none border-none" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Add Coffee" className=" btn-block bg-first text-third font-bold text-2xl py-2 mt-4 mb-5" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;