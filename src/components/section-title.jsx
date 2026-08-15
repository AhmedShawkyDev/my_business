export default function SectionTitle({ title, motion }) {
  return (
    <div data-aos={motion} className="flex flex-row items-center gap-5 w-full">
      <h1 className="text-4xl text-foreground font-semibold flex gap-2 items-center w-full xl:w-1/4 ">
        <span className="text-primary ">#</span> {title}
      </h1>
      <div className="w-full h-px  bg-primary hidden xl:block"></div>
    </div>
  );
}
