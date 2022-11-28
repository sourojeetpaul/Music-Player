import {
  ChartBarIcon,
  ClockIcon,
  DotsHorizontalIcon,
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
} from "@heroicons/react/solid";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

function Sidebar() {

  // const spotifyApi = useSpotify();
  // const {data: sessions, status} = useSession();
  // const [playlist, setPlaylists] = useState();

  // useEffect(() => {
  //   if(spotifyApi.getAccessToken()){
  //     spotifyApi.getUserPlaylists().then((data) =>{
  //       setPlaylists(data.body.items);
  //     });
  //   }
  // }, [session, spotifyApi]);
  return (
    <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
      <Image
        src="https://rb.gy/xkacau"
        width={56}
        height={56}
        objectFit="contain"
      />
      <div className="flex flex-col space-y-8">
        <button><HomeIcon className="sidebarIcon hover: text-white" /></button>
        <button><RiCompassFill className="sidebarIcon text-2xl hover:text-white" /></button>
        <button><ChartBarIcon className="sidebarIcon ml-1 hover:text-white" /></button>
        <button><PlusCircleIcon className="sidebarIcon hover:text-white" /></button>
        <button><HeartIcon className="sidebarIcon hover:text-white" /></button>
        <button><RssIcon className="sidebarIcon hover:text-white" /></button>
        
      </div>
    </section>
  );
}

export default Sidebar;
