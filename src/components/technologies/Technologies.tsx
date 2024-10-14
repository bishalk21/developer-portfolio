import { iconsData } from "./iconsData";

const Technologies = () => {
  return (
    <section className="backdrop-blur-sm w-full">
      <div className="p-5">
        <h2 className="text-center font-extrabold pb-6">
          Technologies I am familiar with
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-6">
          {iconsData.map((iconData) => {
            return (
              <img
                key={iconData.id.toString()}
                src={iconData.icon}
                alt={iconData.name}
                title={iconData.name}
                className="h-6 md:h-8"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
