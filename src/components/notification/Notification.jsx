import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./notification.css";

function Notification() {
  return (
    <div className="notification">
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Notification;
