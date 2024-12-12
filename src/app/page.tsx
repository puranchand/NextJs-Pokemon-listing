'use client';

import axios from "axios";
// import Image from "next/image";
import { useEffect, useState } from "react";
// import ArrowIcon from "./icons/icons-arrow.png"
import Link from 'next/link'


export default function Home() {

  const [results, setResults] = useState([])

  const getPokemonDetails = async () => {
    await axios.get("https://pokeapi.co/api/v2/pokemon/").then((res: any) => {
      console.log(res.data.results, "list===>")
      if (res.data.results) {
        setResults(res.data.results)
      }
    })
  }

  useEffect(() => {
    getPokemonDetails()
  }, [])

  console.log(results, "results---->")

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-gray-200 my-8">
        <div className="ma zp zu amm arx mb-8">
          <div className="hb ud vb">
            <div>
              {/* <label htmlFor="location" className="lx axf axm axx azd">Location</label> */}
              <select id="location" name="location" className="px-2.5 py-2 pr-8 border border-inherit	rounded-lg">
                <option>United States</option>
                <option>Mexico</option>
              </select>
            </div>
            <div className="mt-4">
            <input type="text" placeholder="Search..." className="px-2.5 py-2 border border-inherit	rounded-lg rounded-e-none" />
            <button className="px-2.5 py-2 bg-cyan-800 text-white rounded-r-lg">Search</button>
            </div>
            
          </div>
        </div>
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {results.length ? results.map((pokemon: any) => (
            <div className="group bg-slate-50 rounded-lg overflow-hidden">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-white xl:aspect-h-8 xl:aspect-w-7 p-1">
                <img
                  alt={pokemon.name}
                  src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
                  className="h-56 m-auto	object-cover object-center group-hover:opacity-75 px-8 py-2"
                />
              </div>
              <h3 className="mt-4 text-cyan-900 px-2 mb-8 text-xl capitalize font-bold">{pokemon.name}</h3>
             

              <Link href={`/pokemon/${pokemon.name}`}>
          
            <div className="px-2 mt-1 text-lg font-medium text-gray-900 mb-4 text-cyan-700 text-sm cursor-pointer">{"Details ->"}
                {/* <img src={ArrowIcon} alt="arrow-icon" /> */}
              </div>
          </Link>
            </div>
          )) : ""}
        </div>
      </div>
    </div>
  );
}
