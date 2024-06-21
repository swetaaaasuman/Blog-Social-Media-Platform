import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sideb from "./components/Sideb";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");

  return (
    <PostListProvider>
      <div className="bgg">
        <div className="app-container">
          <Sideb selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content">
            <Header />
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
            <Footer />
          </div>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
