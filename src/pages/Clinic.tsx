import {
    IconEye,
    IconUsers,
    IconHeart,
    IconStar,
    IconActivity,
    IconPhoto,
} from "@tabler/icons-react";

const content = [
    {
        title: "แผนกจักษุ",
        description: "ดูแลสุขภาพดวงตาแบบครบวงจร",
        icon: <IconEye size={48} stroke={1.5} className="text-indigo-600" />,
    },
    {
        title: "แผนกกุมารเวชกรรม",
        description: "ดูแลเด็กและวัยรุ่น",
        icon: <IconUsers size={48} stroke={1.5} className="text-pink-500" />,
    },
    {
        title: "คลินิกหัวใจ",
        description: "ตรวจและรักษาโรคหัวใจ",
        icon: <IconHeart size={48} stroke={1.5} className="text-red-500" />,
    },
    {
        title: "สูติ-นรีเวช",
        description: "ดูแลคุณแม่และสตรีทุกวัย",
        icon: <IconStar size={48} stroke={1.5} className="text-yellow-500" />,
    },
    {
        title: "ออร์โธปิดิกส์",
        description: "รักษากระดูกและข้อ",
        icon: <IconActivity size={48} stroke={1.5} className="text-green-500" />,
    },
    {
        title: "คลินิกผิวหนัง",
        description: "การดูแลผิวหนังและความงาม",
        icon: <IconPhoto size={48} stroke={1.5} className="text-purple-500" />,
    },
];


export default function DepartmentSection() {
    return (
        <section className="text-gray-600 body-font bg-linear-to-br from-blue-50 to-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="text-3xl font-semibold mb-2 text-gray-900">
                        แผนกและศูนย์บริการของโรงพยาบาล
                    </h1>
                    <p className="lg:w-1/2 w-full text-gray-500">
                        ให้บริการโดยทีมแพทย์ผู้เชี่ยวชาญ พร้อมเครื่องมือและเทคโนโลยีทันสมัย
                    </p>
                </div>

                <div className="flex flex-wrap -m-4">
                    {content.map((item, index) => (
                        <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition">

                                <div className="w-20 h-20 mx-auto flex justify-center items-center mb-6 bg-gray-100 rounded-full">
                                    {item.icon}
                                </div>

                                <h2 className="text-lg font-medium title-font text-gray-900 mb-2 text-center">
                                    {item.title}
                                </h2>

                                <p className="leading-relaxed text-base text-center">
                                    {item.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center py-8">
                    <button className="flex mx-auto mt-16 text-white bg-indigo-100 px-8 py-4 rounded-lg hover:bg-indigo-200 text-lg font-medium transition">
                        ดูทั้งหมด
                    </button>
                </div>

            </div>
        </section>
    );
}
