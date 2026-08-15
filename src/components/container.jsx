export default function Container({ children, className, id, animation }) {
  return (
    <div
      data-aos={animation}
      className={`flex flex-col justify-center mx-4 lg:mx-22 xl:mx-44 items-center mt-10 lg:mt-20 ${className}`}
      id={id}
    >
      {children}
    </div>
  );
}
