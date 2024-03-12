import teamMembers from '../assets/Teammembers'
const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
                <p className="text-lg text-gray-700 mb-10">
                Welcome to DietWell, where we are dedicated to
          empowering individuals to achieve optimal health and wellness through
          personalized nutrition guidance. Our team of passionate dietitians is
          committed to helping you navigate your journey towards a healthier
          lifestyle.
                </p>

                {/* Vision, Mission, Values */}
                <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Vision */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
                        <p className="text-gray-700">To be recognized as leaders in our industry, inspiring change and fostering a culture of integrity and excellence.</p>
                    </div>
                    {/* Mission */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
                        <p className="text-gray-700">To deliver unparalleled service and innovative solutions that empower our clients and contribute to their success.</p>
                    </div>
                    {/* Values */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Values</h2>
                        <p className="text-gray-700">Integrity, Commitment, Collaboration, Innovation, Excellence.</p>
                    </div>
                </div>

                {/* Team Members */}
                <div className="mt-10">
                    <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                                <img src={member.imageUrl} alt={"not found"} className="rounded-full h-32 w-32 object-cover mb-4"/>
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
  );
};
export default About;
