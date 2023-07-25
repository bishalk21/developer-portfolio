import { iconsData } from "./iconsData";

const Technologies = () => {
  return (
    <div className="bg-[#0d0e0e] text-white p-8">
      <h2 className="text-center font-extrabold pb-6">
        Technologies I am familiar with
      </h2>
      <div className="flex items-center justify-center flex-wrap gap-6">
        {iconsData.map((iconData) => {
          return (
            <img
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
              className="h-6 md:h-8"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
