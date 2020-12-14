import React from 'react';
import Register from '../Presentational/Register';
import { useJwt } from "react-jwt";
const token = localStorage.getItem('token');

const Home = () => {
    const { decodedToken } = useJwt(token);
    return (
        <div className="container">
            { !decodedToken ? <Register /> :
                null}
            <div className="row mt-3 p-5 text-center justify-content-center">
                <h4>This website is not affiliated with King County Metro. It uses GFTS data to help users find and save bus stops. For more information check out the King County Metro Website below:</h4>
                <br />
                <a href="https://kingcounty.gov/depts/transportation/metro.aspx" className="btn btn-danger btn-raised btn-lg mt-3"><i className="fa fa-play"></i> Go To King County Metro Website</a>
            </div>
        </div >
    );
}

export default Home;