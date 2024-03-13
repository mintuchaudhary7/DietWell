import React, { useState } from 'react';

const Profile = ()=>{
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [activityLevel, setActivityLevel] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the data to your backend or perform any other action
  };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="height" className="block text-lg font-semibold mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                className="w-full px-3 py-2 border rounded-md"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-lg font-semibold mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                className="w-full px-3 py-2 border rounded-md"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="weight" className="block text-lg font-semibold mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                className="w-full px-3 py-2 border rounded-md"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-lg font-semibold mb-2">
                Gender
              </label>
              <select
                id="gender"
                className="w-full px-3 py-2 border rounded-md"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="activityLevel" className="block text-lg font-semibold mb-2">
                Activity Level
              </label>
              <select
                id="activityLevel"
                className="w-full px-3 py-2 border rounded-md"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                required
              >
                <option value="">Select Activity Level</option>
                <option value="sedentary">Sedentary (little to no exercise)</option>
                <option value="lightlyActive">Lightly Active (light exercise/sports 1-3 days/week)</option>
                <option value="moderatelyActive">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
                <option value="veryActive">Very Active (hard exercise/sports 6-7 days a week)</option>
                <option value="extraActive">Extra Active (very hard exercise/sports & physical job or 2x training)</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Save
            </button>
          </form>
        </div>
      </div> 
    )
}
export default Profile