export default function SkillsCard({ data, name }) {
  return (
    <div className="border border-primary-text h-full w-[90%] lg:w-full ">
      <p className="p-2 text-foreground text-lg font-semibold">{name}</p>
      <div className="w-full h-px bg-grey"></div>

      <ul className="flex flex-wrap ">
        {data.map((item) => (
          <li
            key={item.id}
            className="p-2 text-primary-text text-lg font-medium"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
