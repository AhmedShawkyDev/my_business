import Container from "@/components/container";
import Image from "next/image";
import profilePic from "../app/hero.png"; // تأكد من مسار الصورة
import {
  Phone,
  Mail,
  Linkedin,
  Facebook,
  MapPin,
  ChevronRight,
} from "lucide-react"; // استيراد الأيقونات

export default function Test() {
  // بيانات جهات الاتصال لتسهيل عمل Loop
  // const contactLinks = [
  //   { icon: Phone, title: "Call me", detail: "+1-212-456-7890" },
  //   { icon: Facebook, title: "Follow me", detail: "@ava.mitchell" },
  //   {
  //     icon: MapPin,
  //     title: "Visit my office",
  //     detail: "2093 Philadelphia Pike...",
  //   },
  //   { icon: Mail, title: "Email me", detail: "ava.mitchell@gmail.com" },
  //   { icon: Linkedin, title: "Follow my LinkedIn", detail: "ava.mitchell" },
  // ];

  return (
    // الخلفية الرئيسية هنا غامقة لكي يظهر تأثير البلور
    <Container className="p-8 bg-gray-950 min-h-screen flex items-center justify-center">
      {/* الكونتينر الأبيض الكبير المحيط بالبطاقة */}
      <div className="bg-white rounded-3xl p-6 shadow-2xl w-full max-w-sm">
        <div className="flex flex-col items-center w-full h-full">
          {/* صورة الملف الشخصي */}
          <div className="flex flex-col items-center justify-center mb-6">
            <Image
              src={profilePic}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-gray-100 shadow-md"
              width={160} // أبعاد محددة أفضل
              height={160}
            />
          </div>

          {/* الاسم والوظيفة */}
          <div className="flex flex-col items-center justify-center text-center w-full mb-8">
            <h1 className="text-3xl font-extrabold mb-1 text-gray-900">
              Ahmed Shawky
            </h1>
            <p className="text-lg text-gray-600 font-medium">Data Analyst</p>
          </div>

          {/* زر حفظ جهة الاتصال */}
          <button className="w-full bg-gray-600/20 backdrop-blur-sm text-gray-800 font-semibold py-3 px-6 rounded-xl border border-gray-200/50 mb-6 hover:bg-gray-600/30 transition shadow-sm">
            Save Contact
          </button>

          {/* قائمة جهات الاتصال - هنا يكمن السر */}
          {/* نطبق تأثير البلور على الكونتينر المحيط بالقائمة بأكملها */}
          <div className="w-full space-y-3 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-inner">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white/40 backdrop-blur-sm p-3 rounded-xl border border-white/20 shadow-sm hover:bg-white/60 transition cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    {/* خلفية الأيقونة البيضاء */}
                    <div className="bg-white p-2.5 rounded-full shadow-sm flex items-center justify-center">
                      <Icon
                        className="w-5 h-5 text-gray-700"
                        strokeWidth={1.5}
                      />
                    </div>
                    {/* النصوص */}
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900">
                        {link.title}
                      </span>
                      <span className="text-xs text-gray-600">
                        {link.detail}
                      </span>
                    </div>
                  </div>
                  {/* سهم جهة اليمين */}
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
