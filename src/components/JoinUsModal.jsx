import { useState } from "react";
import { X } from "lucide-react";

export default function JoinUsModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    enrollmentNumber: "",
    semester: "",
    division: "",
    branch: "",
    batch: "",
    contactNumber: "",
    emailId: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        enrollmentNumber: "",
        semester: "",
        division: "",
        branch: "",
        batch: "",
        contactNumber: "",
        emailId: ""
      });
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-lg shadow-2xl p-8 animate-in fade-in duration-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {!submitted ? (
          <>
            <h2 className="text-3xl font-bold text-[#05877a] mb-2">
              Join SRL
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out the form to join the Students Research Lab
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name of Student <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#05877a] focus:ring-2 focus:ring-[#05877a]/20 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Enrollment Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Enrollment Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="enrollmentNumber"
                  value={formData.enrollmentNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#05877a] focus:ring-2 focus:ring-[#05877a]/20 transition-all"
                  placeholder="Enter your enrollment number"
                />
              </div>

              {/* Semester & Division */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Semester <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#05877a] focus:ring-2 focus:ring-[#05877a]/20 transition-all"
                  >
                    <option value="">Select Semester</option>
                    <option value="1">1st Semester</option>
                    <option value="2">2nd Semester</option>
                    <option value="3">3rd Semester</option>
                    <option value="4">4th Semester</option>
                    <option value="5">5th Semester</option>
                    <option value="6">6th Semester</option>
                    <option value="7">7th Semester</option>
                    <option value="8">8th Semester</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Division <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#05877a] focus:ring-2 focus:ring-[#05877a]/20 transition-all"
                  >
                    <option value="">Select Division</option>
                    <option value="A">Division A</option>
                    <option value="B">Division B</option>
                    <option value="C">Division C</option>
                    <option value="D">Division D</option>
                  </select>
                </div>
              </div>

              {/* Branch & Batch */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Branch <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#05877a] focus:ring-2 focus:ring-[#05877a]/20 transition-all"
                  >
                    <option value="">Select Branch</option>
                    <option value="CSE">Computer Science Engineering</option>
                    <option value="IT">Information Technology</option>
                    <option value="ECE">Electronics & Communication Engineering</option>
                    <option value="EEE">Electrical Engineering</option>
                    <option value="MECH">Mechanical Engineering</option>
                    <option value="CIVIL">Civil Engineering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Batch <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#05877a] focus:ring-2 focus:ring-[#05877a]/20 transition-all"
                    placeholder="e.g., 2022-2026"
                  />
                </div>
              </div>

              {/* Contact Number & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#05877a] focus:ring-2 focus:ring-[#05877a]/20 transition-all"
                    placeholder="Enter your contact number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="emailId"
                    value={formData.emailId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#05877a] focus:ring-2 focus:ring-[#05877a]/20 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#05877a] text-white font-semibold rounded-lg hover:bg-[#046b66] transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Successfully Submitted!
            </h3>
            <p className="text-gray-600 text-center">
              Thank you for joining SRL. We'll be in touch soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
