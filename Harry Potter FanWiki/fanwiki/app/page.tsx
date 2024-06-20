import Image from "next/image";
import HomeWallpaper from '../images/HomeWallpaper.jpg'
import CharacterComponent from "@/components/Characters";
import SearchBar from "@/components/SearchBar";
const Home = () => {
  return (
    <>
      <div className=" mt-28 md:mt-16">
        {/* <div className="invisible 2xl:visible">
          <Image src={HomeWallpaper} alt="HomeWallpaper" placeholder="blur" quality={80} fill style={{ zIndex: "-1", opacity: "0.4", height: "100%" }} />
        </div> */}
        <SearchBar />
        <CharacterComponent />
      </div>
    </>
  );
}

export default Home
