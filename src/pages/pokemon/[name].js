import React from "react";

const PokeDetails = () => {

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-gray-200 my-8">
                    
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">

                        <div className="group bg-slate-50 rounded-lg overflow-hidden">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white xl:aspect-h-8 xl:aspect-w-7 p-1">
                                <img
                                    alt={"bulbasaur"}
                                    src={`https://img.pokemondb.net/artwork/${"bulbasaur"}.jpg`}
                                    className="h-56 m-auto	object-cover object-center group-hover:opacity-75 px-8 py-2"
                                />
                            </div>
                            <h3 className="mt-4 text-cyan-900 px-2 mb-8 text-xl capitalize font-bold">{"bulbasaur"}</h3>


                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokeDetails;
