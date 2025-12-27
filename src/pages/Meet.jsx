import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function Meet() {
  const { roomId } = useParams();
  const jitsiContainer = useRef(null);

  useEffect(() => {
    if (!window.JitsiMeetExternalAPI || !roomId) return;

    const domain = "meet.jit.si";

    const options = {
      roomName: roomId,
      parentNode: jitsiContainer.current,
      width: "100%",
      height: "100%",

      configOverwrite: {
        prejoinPageEnabled: false,
        disableDeepLinking: true,
      },

      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
      },

      userInfo: {
        displayName: "Guest User",
      },
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => api.dispose();
  }, [roomId]);

  return <div ref={jitsiContainer} className="h-screen w-screen" />;
}

export default Meet;
