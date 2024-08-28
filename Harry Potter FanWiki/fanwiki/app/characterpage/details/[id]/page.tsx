"use client"
import dynamic from "next/dynamic";
const DetailCard = dynamic(() => import('@/components/DetailCard'))
const Loader = dynamic(() => import('@/components/Loader'))
import { useEffect, useState } from "react";

import { ICharacters } from "@/models/charactersModel";
import { viewDetails } from "@/session-management/actions";

const CharacterDetail = ({ params }: { params: { id: string } }) => {
    const { id } = params
    const [data, setData] = useState<ICharacters>()
    useEffect(() => {
        async function getDetails() {
            const { characterDetail } = await viewDetails(id)
            setData(characterDetail)
        }
        getDetails()
    }, [])
    if (!data) {
        return <Loader />
    }
    
    return (
        <div id="hpCard" className="w-3/4 m-auto">
            <DetailCard character={data} />
        </div>
    )
}

export default CharacterDetail