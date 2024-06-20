import Loadingsvg from '../images/loading.svg'
import Image from 'next/image'
const Loader = () => {
    return (
        <>
            <span>Loading.....</span>
            <div className='flex justify-center align-middle animate-bounce '>
                <Image src={Loadingsvg} width={200} alt='loading' />
            </div>
        </>
    )
}

export default Loader