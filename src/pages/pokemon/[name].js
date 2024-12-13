import React, { useEffect, useState } from "react";
import "../../app/globals.css";

const PokeDetails = () => {

    const [pokemonName, setPokemonName] = useState("");

    const handlePokemonName = () => {
        const path = window.location.pathname.split("/")
        const name = path[path.length - 1]
        setPokemonName(name)
    }

    useEffect(() => {
        handlePokemonName()
    }, [])

    console.log(pokemonName, "pokemonName====>")

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-gray-200 my-8">

                    <div className="flex justify-center">

                        <div className="group rounded-lg overflow-hidden bg-yellow-400 w-80">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white xl:aspect-h-8 xl:aspect-w-7 p-1">
                                <img
                                    alt={pokemonName}
                                    src={`https://img.pokemondb.net/artwork/${pokemonName}.jpg`}
                                    className="h-56 m-auto	object-cover object-center group-hover:opacity-75 px-8 py-2"
                                />
                            </div>
                            <div className="mt-4 mb-8">
                                <h3 className=" text-cyan-900 px-4  text-sm capitalize font-bold">Name: <span className="font-thin">{pokemonName}</span></h3>
                                <h3 className=" text-cyan-900 px-4 text-sm capitalize font-bold">Type: <span className="font-thin">{"grass"}</span></h3>
                                <h3 className=" text-cyan-900 px-4 text-sm capitalize font-bold">Stats: <span className="font-thin">{"hp ,attch"}</span></h3>
                                <h3 className=" text-cyan-900 px-4 text-sm capitalize font-bold">Abilities: <span className="font-thin">{"blaze, jungle"}</span></h3>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokeDetails;
