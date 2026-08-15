import Container from "@/components/container";
export default function Home() {
  return (
    <Container className=" text-primary-text rounded-lg p-8 shadow-lg ">
      <h1 className="text-4xl font-bold ">
        Welcome to My Digital Business Card
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        This is a simple digital business card built with Next.js.
      </p>
    </Container>
  );
}

