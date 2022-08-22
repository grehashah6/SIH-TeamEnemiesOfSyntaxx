import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterMentee from "./components/Register/registerMentee";
import RegisterMentor from "./components/Register/registerMentor";
import Login from "./components/Login/login";
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
import PitchDeckForm from "./components/PitchDeck/PitchDeckForm";
import VideoCall from "./components/VideoCall/VideoCall";
import AllCampaigns from "./components/AllCampaigns/AllCampaigns";
import SingleCampaign from "./components/AllCampaignsSingleCampaign/SingleCampaign";
import FullSingleCampaign from "./components/FullSingleCampaign/FullSingleCampaign";
import MyForm from "./components/Forms/Form";
import CreateProfile from "./components/CreateProfile/CreateProfile";
import Chat from "./pages/Chat";
import Gst from "./pages/Gst";
import Events from "./pages/Events";
import MentorList from "./components/MentorsList/MentorsList";
import Mentors from "./pages/Mentors";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import SingleMentor from "./components/SingleMentor/SingleMentor";
import CreateEvents from "./components/CreateEvents/CreateEvents";
import Header from "./components/Header/Header";

const languages = [
  { value: '', text: "Options" },
  { value: 'en', text: "English" },
  { value: 'hi', text: "Hindi" },
  { value: 'gu', text: "Gujarati" },
  { value: 'mr', text: "Marathi" },
  { value: 'ta', text: "Tamil" }
]

function App() {
  const { t } = useTranslation(); 
  
    const [lang, setLang] = useState('en');
  
    // This function put query that helps to 
    // change the language
    const handleChange = e => { 
        setLang(e.target.value);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + "?lng=" + e.target.value);
    }
  return (
    
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gst" element={<Gst />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerMentor" element={<RegisterMentor />} />
        <Route path="/registerMentee" element={<RegisterMentee />} />
        <Route path="/myprofile" element={<Account />} />
        <Route path="/uploadDocs" element={<UploadDocs />} />
        <Route path="/createPosts" element={<CreatePosts />} />
        <Route path="/showPosts" element={<Posts />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/news" element={<News />} />
        <Route path="/pitchdeck" element={<PitchDeck />} />
        <Route path="/pitchdeck-form" element={<PitchDeckForm />} />
        <Route path="/videocall" element={<VideoCall />} />
        <Route path="/campaigns" element={<AllCampaigns />} />
        <Route path="/form" element={<MyForm />} />
        <Route path="/singleCampaign/:id" element={<FullSingleCampaign />} />
        <Route path="/createProfile" element={<CreateProfile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/mentorlist" element={<MentorList />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/sidenavbar" element={<SideNavbar />} />
        <Route path="/singleMentor" element={<SingleMentor />} />
        <Route path="/createEvents" element={<CreateEvents />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
