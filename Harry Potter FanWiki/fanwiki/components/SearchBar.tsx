"use client"

import { useEffect, useState } from "react"
import { getCharacterNames } from "@/session-management/actions"
import Link from "next/link"

interface ICharacterName {
    _id: string,
    name: string
}

const SearchBar = () => {
    const [name, setName] = useState("")
    const [dbNames, setDbNames] = useState<ICharacterName[]>([])
    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            if(name.trim() === "") {
                setDbNames([])
                return
            }
            if (name) {
                const { characterNames } = await getCharacterNames(name);
                setDbNames(characterNames);
            } else {
                setDbNames([]);
            }
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [name]);

    return (
        <>
            <div className="flex justify-center sticky">
                <input
                    list="characters"
                    name="searchbarname"
                    className="rounded-l w-3/5 px-2 md:w-2/4 lg:w-1/4 md:px-4 placeholder:text-lg py-2 border-t border-b border-l border-black outline-none"
                    placeholder="Search Your Favorite Character"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off"
                />
                <datalist id="characters">
                    {dbNames.map((name) => (
                        <option value={name.name} key={name._id} >{name.name}</option>
                    ))}
                </datalist >
                <Link href={`/characterpage/${name}`} className="py-2 bg-slate-200 px-3 rounded-r hover:bg-slate-400 border-t border-b border-r border-black">Search</Link>
            </div>
        </>
    )
}
export default SearchBar