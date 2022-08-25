import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Navbar from "../components/Navbar";
import MentorsList from "../components/MentorsList/MentorsList";
import SearchBar from 'material-ui-search-bar';
import { Grid } from "@mui/material/node";
import SideNavbar from "../components/SideNavbar/SideNavbar";


export default function Mentors() {
 

    return (
    <>
      <Navbar />
      <Grid container sm={12}>
      <Grid item sm={3.8}>
        <div style={{margin:"3%", height:"100%"}}>
<SideNavbar />
</div>
      </Grid>
      <Grid item sm={8}>
      {/* <div style={{margin:"1%"}}> */}
      
        <MentorsList />
        
      {/* </div> */}
      </Grid>
    </Grid>
    </>
  );
};
