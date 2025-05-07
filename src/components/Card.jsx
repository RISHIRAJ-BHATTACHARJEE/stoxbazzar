import { MapPin, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Card = () => {
  return (
    <div className="w-[75vw] max-w-[300px] border-2 text-black bg-white px-5 py-6 rounded-xl flex flex-col gap-6 shrink-0 my-6 lg:my-8">
      <p className="text-sm font-semibold break-words overflow-y-auto">
        Lorem ipsum dolor sit amet consectetur. Magna a pretium sociis dictum
        neque vitae. Scelerisque fames tellus aliquet lectus nunc sed semper
        enim. Lorem ipsum dolor sit amet consectetur. Magna a pretium
      </p>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/avatar-3.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-sm">Ricardo</h2>
            <div className="flex items-center gap-1 text-zinc-500">
              <MapPin size={16} strokeWidth={1} />
              <p className="text-xs">NV</p>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              fill="#dadada"
              strokeWidth={1}
              size={16}
              strokeOpacity={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
