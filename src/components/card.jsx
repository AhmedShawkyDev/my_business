import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
export default function Card({
  title,
  videoEmbedUrl,
  image,
  description,
  tools,
  github,
  linkedin,
}) {
  return (
    <div className="flex flex-col border border-grey ">
      <div className="w-full h-fit lg:h-56">
        {image && (
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full  object-cover "
          />
        )}
        {videoEmbedUrl && (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoEmbedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <div className="w-full h-px bg-grey"></div>
      <p className="font-medium text-lg text-primary-text py-2 px-2 ">
        {tools}
      </p>
      <div className="w-full h-px bg-grey"></div>
      <div className="flex flex-col py-4 px-4 gap-4 h-fit ">
        <p className="text-2xl text-foreground">{title}</p>
        <p className="text-sm font-medium lg text-primary-text line-clamp-3 min-h-20">
          {description}
        </p>
        <Link
          href={github}
          target="_blank"
          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          <FaGithub className="text-lg" /> GitHub
        </Link>
        <Link
          href={linkedin}
          target="_blank"
          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          <FaLinkedin className="text-lg" />
          LinkedIn
        </Link>
      </div>
    </div>
  );
}
