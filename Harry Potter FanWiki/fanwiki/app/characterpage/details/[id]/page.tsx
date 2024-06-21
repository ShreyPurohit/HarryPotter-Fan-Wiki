"use client"
import dynamic from "next/dynamic";
// import DetailCard from "@/components/DetailCard";
const DetailCard = dynamic(() => import('@/components/DetailCard'))
// import Loader from "@/components/Loader";
const Loader = dynamic(() => import('@/components/Loader'))
import { ICharacters } from "@/models/charactersModel";
import { viewDetails } from "@/session-management/actions";
import { useEffect, useState } from "react";

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