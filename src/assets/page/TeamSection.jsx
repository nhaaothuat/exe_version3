import React, { useState } from "react";
import { motion } from "framer-motion";
import test from "/minion.png";
// Danh sách các nhân vật
const people = [
  {
    name: "Hồng Ngọc",
    role: "CMO ",
    picture:""
     ,
    description: "Tôi đam mê với định hướng của dự án này và cam kết thúc đẩy sự phát triển mạnh mẽ cho StarHub.",
    specialAbility: "Với vai trò CMO, tôi mong muốn nâng cao sự hiện diện của thương hiệu StarHub và đóng góp vào thành công liên tục của công ty.",
    facebookURL: "https://www.facebook.com/profile.php?id=100074430396647",
  },
  
  
  {
    name: "Yến Nhi",
    role: "Co-Founder",
    picture:
      test,
    description: "Tôi cảm thấy dự án này vô cùng thú vị và cam kết định hình sự thành công trong tương lai của nó.",
    specialAbility: "Là một trong những người sáng lập, tôi tập trung vào việc thúc đẩy đổi mới và mở rộng tầm ảnh hưởng của StarHub trên thị trường.",
    facebookURL: "https://www.facebook.com/profile.php?id=100074430396647",
  },
  {
    name: "Mai Thảo",
    role: "CEO",
    picture:
     test,
    description: "Dự án này khiến tôi phấn khích vì nó mang lại tiềm năng lớn cho sự phát triển và đổi mới. Tôi cam kết phát triển chiến lược cho nó.",
    specialAbility: "Với vai trò CEO, tôi quyết tâm dẫn dắt StarHub vươn tới những tầm cao mới thông qua tầm nhìn và sự lãnh đạo.",
    facebookURL: "https://www.facebook.com/hioreooo",
  },
  {
    name: "Thục Nguyên",
    role: "Co-Founder",
    picture:
      test,
    description: "Tôi rất hào hứng với những khả năng mà dự án này mang lại và hoàn toàn tận tâm với sự phát triển của nó.",
    specialAbility: "Trong vai trò Co-Founder, tôi hướng tới việc thúc đẩy phát triển và mở rộng StarHub thông qua các chiến lược đổi mới.",
    facebookURL: "https://www.facebook.com/tnph226",
  },
  {
    name: "Minh Thư",
    role: "CCO",
    picture:
    test,
    description: "Tôi rất vui khi được tham gia vào dự án này và cam kết đóng góp vào thành công của nó thông qua sự lãnh đạo vững mạnh và quản lý chiến lược.",
    specialAbility: "Với vai trò CCO, tôi tập trung vào việc đảm bảo rằng các hoạt động của StarHub diễn ra suôn sẻ và hiệu quả.",
    facebookURL: "https://www.facebook.com/profile.php?id=100074430396647",
  },
];

const TeamSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center text-blue-600"
        >
          Đội ngũ của chúng tôi
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {people.map((person, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedCharacter(person)}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-white rounded-full shadow-lg overflow-hidden w-48 h-48 cursor-pointer transition-all ${
                selectedCharacter?.name === person.name
                  ? "ring-4 ring-blue-500 scale-110"
                  : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-full h-full w-full ">
                <img
                  src={person.picture}
                  alt={person.name}
                  className="object-cover w-full h-full  transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-full"
                />
              </div>

              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {person.name}
                </h3>
                <p className="text-blue-500">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedCharacter && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 p-6 bg-white rounded-lg shadow-lg text-center max-w-2xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-gray-800">
              {selectedCharacter.name}
            </h3>
            <p className="text-blue-500 text-xl mb-4">
              {selectedCharacter.role}
            </p>
            <p className="text-gray-600">{selectedCharacter.description}</p>
            <p className="text-gray-600 mt-2">
              
              <span className="text-blue-600">
                {selectedCharacter.specialAbility}
              </span>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
