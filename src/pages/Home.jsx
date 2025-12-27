import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const joinRoom = () => {
    if (!roomId.trim()) return;
    navigate(`/${roomId}`);
  };

  const createRoom = () => {
    const randomRoom = crypto.randomUUID();
    navigate(`/${randomRoom}`);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Meet.abcd.tech</h1>

      <input
        className="px-4 py-2 text-black rounded w-72 mb-4"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />

      <button
        onClick={joinRoom}
        className="bg-blue-600 px-6 py-2 rounded mb-3 w-72"
      >
        Join Room
      </button>

      <button
        onClick={createRoom}
        className="bg-green-600 px-6 py-2 rounded w-72"
      >
        Create New Room
      </button>
    </div>
  );
}

export default Home;
