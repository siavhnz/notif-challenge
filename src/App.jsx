import Notification from "./pages/Notification";
import NotificationContextProvider from "./store/Notification/notification-context";

function App() {
  return (
    <NotificationContextProvider>
      <Notification />
    </NotificationContextProvider>
  );
}

export default App;
