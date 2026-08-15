import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

export default function ContactsContainer({ ref, title }) {
  return (
    <div className="flex space-x-4 bg-white/10 backdrop-blur-xl rounded-lg px-4 py-2 w-full justify-between shadow-lg">
      <a href={ref} className="w-full flex items-center justify-start gap-5">
        {title === "Call Me" && (
          <IoIosCall className="w-8 h-8 text-white rounded-xl" />
        )}
        {title === "What's App" && (
          <FaWhatsapp className="w-8 h-8 text-white rounded-xl" />
        )}
        {title === "Portfolio" && (
          <IoIosHome className="w-8 h-8 text-white rounded-xl" />
        )}
        {title === "Email Me" && (
          <MdEmail className="w-8 h-8 text-white rounded-xl" />
        )}
        {title === "GitHub" && (
          <FaGithub className="w-8 h-8 text-white rounded-xl" />
        )}
        {title === "LinkedIn" && (
          <FaLinkedin className="w-8 h-8 text-white rounded-xl" />
        )}

        {/* تم تعديل text-bold إلى font-bold */}
        <span className="text-white text-xl ">{title}</span>

        {/* السر هنا: إضافة ml-auto للسهم */}
        <FaAngleRight className="w-8 h-8 text-white rounded-xl ml-auto" />
      </a>
    </div>
  );
}
