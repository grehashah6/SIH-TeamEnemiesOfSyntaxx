import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterMentee from "./components/Register/registerMentee";
import RegisterMentor from "./components/Register/registerMentor";
import LoginMentee from "./components/Login/loginMentee";
import LoginMentor from "./components/Login/loginMentor";
import Account from "./pages/Account";
import "./static/css/login.css";
import { UploadDocs } from "./pages/UploadDocs";
import Home from "./pages/Home";
import CreatePosts from "./components/CreatePosts/CreatePosts";
import Posts from "./components/Posts/Post";
import Post from "./components/Posts/Post";
import Feed from "./components/Feed/Feed";
import News from "./components/News/News";
import { PitchDeck } from "./components/PitchDeck/PitchDeck";
import VideoCall from "./components/VideoCall/VideoCall";
import AllCampaigns from "./components/AllCampaigns/AllCampaigns";
import SingleCampaign from "./components/AllCampaignsSingleCampaign/SingleCampaign";
import FullSingleCampaign from "./components/FullSingleCampaign/FullSingleCampaign";
import MyForm from "./components/Forms/Form";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginMentee" element={<LoginMentee />} />
        <Route path="/registerMentor" element={<RegisterMentor />} />
        <Route path="/loginMentor" element={<LoginMentor />} />
        <Route path="/registerMentee" element={<RegisterMentee />} />
        <Route path="/myprofile" element={<Account />} />
        <Route path="/uploadDocs" element={<UploadDocs />} />
        <Route path="/createPosts" element={<CreatePosts />} />
        <Route path="/showPosts" element={<Posts />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/news" element={<News />} />
        <Route path="/pitchdeck" element={<PitchDeck />} />
        <Route path="/videocall" element={<VideoCall />} />
        <Route path = "/campaigns" element={<AllCampaigns />} />
        <Route path = "/form" element={<MyForm />} />
        <Route path = "/singleCampaign/:id" element={<FullSingleCampaign />} />
      </Routes>
    </Router>
  );
}

export default App;