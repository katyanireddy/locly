import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";
import { Splash } from "./screens/auth/Splash";
import { Welcome } from "./screens/auth/Welcome";
import { Login } from "./screens/auth/Login";
import { OTP } from "./screens/auth/OTP";
import { LocationPermission } from "./screens/auth/LocationPermission";
import { ProfileSetup } from "./screens/auth/ProfileSetup";
import { Interests } from "./screens/auth/Interests";
import { MainLayout } from "./MainLayout";
import { Home } from "./screens/main/Home";
import { Discovery } from "./screens/main/Discovery";
import { SearchResults } from "./screens/main/SearchResults";
import { Communities } from "./screens/main/Communities";
import { CreateHub } from "./screens/main/CreateHub";
import { CreatePost } from "./screens/main/CreatePost";
import { CreateActivity } from "./screens/main/CreateActivity";
import { CreateCommunity } from "./screens/main/CreateCommunity";
import { ChatDetail } from "./screens/main/ChatDetail";
import { CommunityDetail } from "./screens/main/CommunityDetail";
import { Notifications } from "./screens/main/Notifications";
import { Chats } from "./screens/main/Chats";
import { Profile } from "./screens/main/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Splash },
      { path: "welcome", Component: Welcome },
      { path: "login", Component: Login },
      { path: "otp", Component: OTP },
      { path: "interests", Component: Interests },
      { path: "location", Component: LocationPermission },
      { path: "setup", Component: ProfileSetup },
      {
        path: "app",
        Component: MainLayout,
        children: [
          { path: "home", Component: Home },
          { path: "discover", Component: Discovery },
          { path: "search", Component: SearchResults },
          { path: "communities", Component: Communities },
          { path: "create", Component: CreateHub },
          { path: "create/post", Component: CreatePost },
          { path: "create/activity", Component: CreateActivity },
          { path: "create/community", Component: CreateCommunity },
          { path: "chat/:id", Component: ChatDetail },
          { path: "community/:id", Component: CommunityDetail },
          { path: "notifications", Component: Notifications },
          { path: "chats", Component: Chats },
          { path: "profile", Component: Profile },
        ],
      },
    ],
  },
]);