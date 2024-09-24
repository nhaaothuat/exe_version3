import React, { useState } from "react";
import { motion } from "framer-motion";
import test from "/thucnguyen.jpg";
// Danh sách các nhân vật
const people = [
  {
    name: "Thục Nguyên",
    role: "Co-Founder",
    picture:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fossimlabs-minion&psig=AOvVaw1CJGg49Hdcbda_GuSMAkRW&ust=1727272985536000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjzpb7f24gDFQAAAAAdAAAAABAR",
    description: "A master of elemental magic.",
    specialAbility: "Fireball",
    facebookURL: "https://www.facebook.com/tnph226",
  },
  {
    name: "Mai Thảo",
    role: "CEO",
    picture:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fminion-kevin-pro&psig=AOvVaw1CJGg49Hdcbda_GuSMAkRW&ust=1727272985536000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjzpb7f24gDFQAAAAAdAAAAABAE",
    description: "A strong and fearless warrior.",
    specialAbility: "Sword Mastery",
    facebookURL: "https://www.facebook.com/hioreooo",
  },
  {
    name: "Yến Nhi",
    role: "Co-Founder",
    picture:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmytour.vn%2Fvi%2Fblog%2Fbai-viet%2Fanh-dai-dien-minion-tinh-nghich-hai-huoc-de-thuong.html&psig=AOvVaw1CJGg49Hdcbda_GuSMAkRW&ust=1727272985536000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjzpb7f24gDFQAAAAAdAAAAABAJ",
    description: "A sharp-eyed archer.",
    specialAbility: "Precision Shot",
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
          Choose Your Character
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
              <div className="relative overflow-hidden rounded-full h-full w-full">
                <img
                  src={person.picture}
                  alt={person.name}
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-full"
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
              Special Ability:{" "}
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
