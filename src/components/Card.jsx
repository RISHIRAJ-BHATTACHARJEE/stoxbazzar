import { MapPin, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Card = ({ description, name, info, rating = 5 }) => {
  return (
    <div className="w-[75vw] max-w-[300px] border-2 text-black bg-white px-5 py-6 rounded-xl flex flex-col gap-6 shrink-0 my-6 lg:my-8">
      {/* Quotation mark */}
      <img src="/quote.svg" className="text-center m-auto w-12" />
      <p className="text-sm font-semibold break-words overflow-y-auto">
        {description}
      </p>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/avatar-3.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-sm">{name}</h2>
            <div className="flex items-center gap-1 text-zinc-500">
              <MapPin size={16} strokeWidth={1} />
              <p className="text-xs">{info}</p>
            </div>
            {/* ⭐ Dynamic Stars */}
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill={i < rating ? "#facc15" : "#e4e4e7"} // yellow or gray
                  stroke={i < rating ? "#facc15" : "#e4e4e7"}
                  strokeWidth={1}
                  size={16}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
