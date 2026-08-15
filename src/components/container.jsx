export default function Container({ children, className, id, animation }) {
  return (
    <div
      data-aos={animation}
      className={`flex flex-col  mx-4 lg:mx-auto lg:max-w-md lg:w-full items-center justify-center mt-7 mb-7 border border-[#343A43] ${className}`}
      id={id}
    >
      {children}
    </div>
  );
}
