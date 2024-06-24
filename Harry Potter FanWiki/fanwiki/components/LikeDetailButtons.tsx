"use client"
import { addToFavouriates } from '@/session-management/actions'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'

const LikeDetailButtons = ({ _id }: { _id: string }) => {
    return (
        <div className="flex justify-around pb-3">
            <button className="text-gray-300 hover:text-white" onClick={() => addToFavouriates(_id)}>
                <FaHeart size={40} className="text-red-400 hover:text-red-500" />
            </button>
            <Link href={`/characterpage/details/${_id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Details
            </Link>
        </div>
    )
}
export default LikeDetailButtons