import React, { useState } from "react";

const people = [
  {
    firstname: "Mai Thảo",

    role: "CEO",
    picture:
      "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/457461438_1027406379119513_996457766905628437_n.jpg?stp=cp6_dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=lXKxAieyOYoQ7kNvgGaoJ60&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=A28hKsJZfTRrKciuhOryboO&oh=00_AYAuVXQWDbw9J3H8CyKjUVShWqre76mvBp9JGMMbEPmrrw&oe=66EDFDA9",
    description:
      "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
    facebookURL: "https://www.facebook.com/hioreooo",
  },
  {
    firstname: "Thục Nguyên",

    role: "Co-Founder",
    picture:
      "https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-1/438240092_1488672665397221_688442610448854677_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=3PuWa4bOAcIQ7kNvgEs-PJW&_nc_ht=scontent.fsgn5-1.fna&_nc_gid=AVXRptrPodThtdUpsO3HlQz&oh=00_AYDfZZJK8Hob-XjdfOiw-phpkgGpR3-P__FGfsbvixmjrQ&oe=66EE0797",
    description:
      "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
    facebookURL: "https://www.facebook.com/tnph226",
  },
  {
    firstname: "Yến Nhi",

    role: "Co-Founder",
    picture:
      "https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-1/453279699_512310627926613_4762339555225568575_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=rp8bFMprI_MQ7kNvgFG6_WX&_nc_ht=scontent.fsgn5-1.fna&oh=00_AYAbspfbHBY5nPVXQloxq3VrytgtAohlwt6jGewg-feBAQ&oe=66EE0652",
    description:
      "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
    facebookURL: "https://www.facebook.com/profile.php?id=100074430396647",
  },
];

const TeamSection = () => {
  const [member, setMember] = useState(0);
  return (
    <div className="relative mx-auto py-10 w-full max-w-7xl bg-gray-50 text-gray-700">
      {/* :TITLE CONTAINER */}
      <div className="mb-8 flex justify-center items-center">
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        <h2 className="px-3 text-sm font-semibold uppercase">
          Đội ngũ sáng tạo của chúng tôi
        </h2>
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
      </div>

      <div className="mx-auto px-4 w-full max-w-5xl grid grid-cols-2 gap-y-4 sm:gap-y-10">
        {/* :PICTURES CONTAINER */}
        <div className="col-span-full lg:col-span-1 flex flex-col sm:flex-row justify-center items-center">
          {/* ::Team members */}
          <ul className="mb-4 sm:mb-0 px-4 flex sm:flex-col justify-center items-center space-x-3 sm:space-x-0 sm:space-y-3">
            {people.map((person, index) => (
              <li
                key={person.lastname}
                className={`w-12 h-12 rounded-full overflow-hidden filter ${
                  index !== member
                    ? "saturate-0 hover:brightness-125"
                    : "saturate-100"
                }`}
              >
                <button
                  className="w-full h-full"
                  onClick={() => setMember(index)}
                >
                  <img src={person.picture} alt="" className="object-cover" />
                </button>
              </li>
            ))}
          </ul>
          {/* ::Picture selected team member */}
          <div className="rounded overflow-hidden">
            <img
              src={people[member].picture}
              alt=""
              className="w-full max-w-xs object-cover"
            />
          </div>
        </div>

        {/* :DETAILS CONTAINER */}
        <div className="col-span-full lg:col-span-1 mx-auto lg:mx-0 max-w-lg flex flex-col justify-center space-y-4">
          {/* ::Role */}
          <span className="font-bold uppercase tracking-wider">
            {people[member].role}
          </span>
          {/* ::Name */}
          <h3 className="text-4xl sm:text-5xl font-bold space-y-2">
            <span className="block">{people[member].firstname}</span>
          </h3>
          {/* ::Description */}
          <p className="py-2 text-base">{people[member].description}</p>
          {/* ::Socials */}
          <div className="mb-4 inline-flex space-x-4">
            {/* Facebook */}
            <a
              href={people[member].facebookURL}
              className="text-gray-600 hover:text-red-600"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
