
import Image from "next/image";
import { FaFilePen, FaRegTrashCan } from "react-icons/fa6";

interface UserProps {
  user: {
    id: string;
    img: string;
    firstName: string;
    lastName: string;
    city: string;
    country: string;
  }
}

export const UserCard = ({ user }: UserProps) => (
  <div
    key={user.id}
    className="flex relative bg-[#765086] w-[400px] h-[200px] justify-center items-center gap-7 p-6 border border-transparent rounded-2xl hover:border hover:border-[#52525270] hover:shadow-lg/30
  transition duration-300 ease-in-out"
  >
    <div className="absolute top-5 right-5 flex gap-0.5">
      <button className="bg-[#765086] hover:bg-[#483353] cursor-pointer transition duration-300 ease-in-out p-1.5 pl-2 rounded-xl">
        <FaFilePen color="white" size={16} />
      </button>
      <button className="bg-[#765086] hover:bg-[#483353] cursor-pointer transition duration-300 ease-in-out p-1.5 rounded-xl">
        <FaRegTrashCan color="white" size={16} />
      </button>
    </div>
    <Image
      src={user.img}
      alt={user.firstName}
      width={150}
      height={150}
      className="rounded-full bg-amber-100"
    />
    <div className="pr-4">
      <h3 className="text-xl font-bold text-white">
        {user.firstName} {user.lastName}
      </h3>
      <p className="text-white">{user.city}, {user.country}</p>
    </div>
  </div >
);
