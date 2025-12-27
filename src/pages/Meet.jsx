import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function Meet() {
  const { roomId } = useParams();
  const jitsiContainer = useRef(null);

  useEffect(() => {
    if (!window.JitsiMeetExternalAPI) return;

    const domain = "meet.jit.si";
    const options = {
      roomName: roomId,
      parentNode: jitsiContainer.current,
      width: "100%",
      height: "100%",
      userInfo: {
        displayName: "Guest User",
      },
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => api.dispose();
  }, [roomId]);

  return (
    <div className="h-screen w-screen">
      <div ref={jitsiContainer} className="h-full w-full" />
    </div>
  );
}

export default Meet;
