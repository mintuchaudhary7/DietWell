import teamMembers from "../assets/Teammembers";
const About = () => {
  return (
    <div className="bg-[#233037] min-h-screen p-5 pt-20 ">
      <div className=" max-w-4xl mx-auto ">
        <h1 className="text-4xl text-white font-bold text-center mb-4">About Us</h1>
        <p className="text-lg text-white mb-10">
          Welcome to DietWell, where we are dedicated to empowering individuals
          to achieve optimal health and wellness through personalized nutrition
          guidance. Our team of passionate dietitians is committed to helping
          you navigate your journey towards a healthier lifestyle.
        </p>

        {/* Vision, Mission, Values */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Vision */}
          <div className="shadow-2xl bg-[#4a5976] p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 cursor-pointer">
            <h2 className="text-white text-2xl font-bold mb-2">Our Vision</h2>
            <p className=" text-white">
              To be recognized as leaders in our industry, inspiring change and
              fostering a culture of integrity and excellence.
            </p>
          </div>
          {/* Mission */}
          <div className="shadow-2xl bg-[#4a5976] p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 cursor-pointer">
            <h2 className="text-2xl text-white font-bold mb-2">Our Mission</h2>
            <p className="text-white">
              To deliver unparalleled service and innovative solutions that
              empower our clients and contribute to their success.
            </p>
          </div>
          {/* Values */}
          <div className="shadow-2xl bg-[#4a5976] p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 cursor-pointer">
            <h2 className="text-2xl text-white font-bold mb-2">Values</h2>
            <p className="text-white">
              Integrity, Commitment, Collaboration, Innovation, Excellence.
            </p>
          </div>
        </div>

        {/* Team Members */}
        {/* here we are using map function to get rid or hardcoding data   if we have to add a member ve simply add data of team member to out asser/teammember file*/}
        <div className="mt-10">
          <h2 className="text-3xl text-white font-bold text-center mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#4a5976]  p-4 rounded-lg shadow-lg flex flex-col items-center"
              >
                <img
                  src={member.imageUrl}
                  alt={"not found"}
                  className="rounded-full h-32 w-32 object-cover mb-4"
                />
                <h3 className="text-xl text-white font-bold">{member.name}</h3>
                <p className="text-white">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
