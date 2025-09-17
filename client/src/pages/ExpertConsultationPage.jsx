import React, { useState, useEffect } from "react";
// In a real app, you would uncomment this:
// import { io } from "socket.io-client";

const experts = [
  { id: 1, name: "Dr. Sarah Chen", domain: "Crop Management", status: "online", rating: 4.8, consultations: 342, avatar: "SC" },
  { id: 2, name: "Prof. Raj Kumar", domain: "Soil Science", status: "online", rating: 4.9, consultations: 289, avatar: "RK" },
  { id: 3, name: "Dr. Emily Watson", domain: "Plant Pathology", status: "offline", rating: 4.7, consultations: 201, avatar: "EW" },
  { id: 4, name: "Mr. Ahmad Hassan", domain: "Irrigation Systems", status: "online", rating: 4.6, consultations: 156, avatar: "AH" },
  { id: 5, name: "Dr. Maria Garcia", domain: "Organic Farming", status: "online", rating: 4.9, consultations: 423, avatar: "MG" },
  { id: 6, name: "Prof. Li Wei", domain: "Agricultural Economics", status: "offline", rating: 4.5, consultations: 178, avatar: "LW" },
];

const ExpertConsultation = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [typing, setTyping] = useState(false);
  // New state: 'intro', 'consultation', 'registration'
  const [appState, setAppState] = useState('intro'); 
  const [registrationData, setRegistrationData] = useState({
    name: "",
    domain: "",
    role: "expert", // Default to expert for the registration form
  });

  // Fake socket (replace with actual server connection: const socket = io("YOUR_SERVER_URL"))
  const socket = {
    emit: (event, data) => {
      console.log("Socket emit:", event, data);
      if (event === "send_message") {
        setTyping(true);
        setTimeout(() => {
          const responses = [
            "That's a great question! Let me help you.",
            "Based on your description, I’d recommend crop rotation.",
            "The soil conditions indicate irrigation improvements.",
            "Consider adjusting your planting schedule for optimal yield."
          ];
          setMessages((prev) => [
            ...prev,
            { sender: "expert", text: responses[Math.floor(Math.random() * responses.length)], time: new Date().toLocaleTimeString() },
          ]);
          setTyping(false);
        }, 2000);
      } else if (event === "register_user") {
        console.log("Simulating registration for:", data);
        alert(`Registration successful! Welcome, ${data.name} as a ${data.role}. Your application will be reviewed.`);
        setAppState('intro'); // Go back to intro after registration
        setRegistrationData({ name: "", domain: "", role: "expert" }); // Reset form
      }
    },
  };

  const sendMessage = () => {
    if (!messageInput.trim()) return;
    const newMsg = { sender: "farmer", text: messageInput, time: new Date().toLocaleTimeString() };
    setMessages((prev) => [...prev, newMsg]);
    socket.emit("send_message", newMsg);
    setMessageInput("");
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    socket.emit("register_user", registrationData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-6 font-sans flex flex-col">
      {/* Header - Always visible */}
      <div className="bg-white shadow-md rounded-xl mb-6 p-4 flex justify-between items-center z-10">
        <div className="flex items-center gap-3 text-2xl font-bold text-green-700">
          <div className="bg-gradient-to-tr from-green-600 to-green-400 w-12 h-12 flex items-center justify-center rounded-lg text-white">
            🌾
          </div>
          AgriExpert
        </div>
        <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
          <span>Farmer John</span> {/* This would be dynamic based on login */}
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Farmer</span>
        </div>
      </div>

      {/* Conditional Rendering based on appState */}
      {appState === 'intro' && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-2xl w-full">
            <h1 className="text-4xl font-bold text-green-800 mb-6">Welcome to AgriExpert!</h1>
            <p className="text-lg text-gray-700 mb-8">
              Connect with agricultural experts or share your knowledge with farmers.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button
                onClick={() => setAppState('consultation')}
                className="bg-green-600 text-white text-xl py-4 px-8 rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-105"
              >
                Consult an Expert
              </button>
              <button
                onClick={() => setAppState('registration')}
                className="bg-blue-600 text-white text-xl py-4 px-8 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
              >
                Become an Expert
              </button>
            </div>
          </div>
        </div>
      )}

      {appState === 'registration' && (
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center max-w-xl w-full">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Expert Registration</h2>
            <p className="text-gray-600 mb-6 text-center">
              Join our network of agricultural specialists and help farmers thrive.
            </p>
            <form onSubmit={handleRegistrationSubmit} className="w-full">
              <div className="mb-5">
                <label className="block text-gray-700 font-semibold mb-2 text-left">Your Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={registrationData.name}
                  onChange={handleRegistrationChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 outline-none text-lg"
                  placeholder="e.g., Dr. Jane Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2 text-left">Your Expertise Domain</label>
                <input
                  type="text"
                  name="domain"
                  value={registrationData.domain}
                  onChange={handleRegistrationChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 outline-none text-lg"
                  placeholder="e.g., Soil Science, Pest Management"
                  required
                />
                 <p className="text-sm text-gray-500 mt-2 text-left">
                    Specify your primary area of agricultural knowledge.
                 </p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-xl py-4 rounded-full shadow-md hover:bg-blue-700 transition font-bold"
              >
                Submit Application
              </button>
              <button
                type="button"
                onClick={() => setAppState('intro')}
                className="w-full mt-4 text-blue-700 hover:underline text-md"
              >
                Back to Home
              </button>
            </form>
          </div>
        </div>
      )}

      {appState === 'consultation' && (
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-6 flex-1">
          {/* Experts Panel */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-col">
            <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-4 rounded-t-2xl font-semibold flex justify-between items-center">
              <span>👥 Agricultural Experts</span>
              <button
                onClick={() => setAppState('intro')}
                className="bg-green-500 text-white text-xs px-3 py-1 rounded-full hover:bg-green-400 transition"
              >
                ← Back
              </button>
            </div>
            <div className="p-3 border-b">
              <input
                type="text"
                placeholder="Search experts..."
                className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>
            <div className="overflow-y-auto flex-1 p-3">
              {experts.map((expert) => (
                <div
                  key={expert.id}
                  onClick={() => {
                    setSelectedExpert(expert);
                    setMessages([
                      {
                        sender: "expert",
                        text: `Hello! I'm ${expert.name}, specializing in ${expert.domain}. How can I help you today?`,
                        time: new Date().toLocaleTimeString(),
                      },
                    ]);
                  }}
                  className={`p-4 mb-3 rounded-xl border cursor-pointer transition hover:shadow-md ${
                    selectedExpert?.id === expert.id ? "bg-blue-50 border-green-600" : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-green-400 to-green-700 text-white font-bold">
                      {expert.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{expert.name}</div>
                      <div className="text-sm text-gray-500">{expert.domain}</div>
                      <div className="flex items-center text-xs gap-1">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            expert.status === "online" ? "bg-green-500" : "bg-gray-400"
                          }`}
                        ></span>
                        {expert.status}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500 flex gap-4">
                    ⭐ {expert.rating} • 💬 {expert.consultations}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              {selectedExpert ? (
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 text-white font-bold">
                    {selectedExpert.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{selectedExpert.name}</div>
                    <div className="text-sm text-gray-500">{selectedExpert.domain}</div>
                  </div>
                </div>
              ) : (
                <div className="text-gray-500">Select an expert to start consultation</div>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
              {!selectedExpert && (
                <div className="text-center text-gray-500 mt-20">
                  <div className="text-5xl mb-3">💬</div>
                  <h2 className="text-xl font-semibold">Welcome to AgriExpert Consultation</h2>
                  <p>Select an expert to begin</p>
                </div>
              )}
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex mb-4 ${msg.sender === "farmer" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[70%] px-4 py-2 rounded-2xl shadow ${
                      msg.sender === "farmer"
                        ? "bg-green-600 text-white rounded-br-sm"
                        : "bg-white border rounded-bl-sm"
                    }`}
                  >
                    <div>{msg.text}</div>
                    <div className="text-xs opacity-70 mt-1">{msg.time}</div>
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex items-center gap-2 text-sm text-gray-500 italic">
                  {selectedExpert?.name} is typing
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            {selectedExpert && (
              <div className="p-4 border-t flex gap-3">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-2 border rounded-full focus:ring-2 focus:ring-green-400 outline-none"
                />
                <button
                  onClick={sendMessage}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white text-lg hover:scale-105 transition"
                >
                  ➤
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertConsultation;