
import Image from "next/image";

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
    className="flex w-[400px] h-[200px] justify-center items-center gap-7 p-6 border border-transparent hover:border hover:border-[#525252] rounded-2xl transition duration-300 ease-in-out"
  >
    <Image
      src={user.img}
      alt={user.firstName}
      width={150}
      height={150}
      className="rounded-full border border-[#525252]"
    />
    <div className="pr-4">
      <h3 className="text-2xl font-bold">
        {user.firstName} {user.lastName}
      </h3>
      <p>{user.city}, {user.country}</p>
    </div>
  </div>
);
