import React from 'react';
import Banner from '../../Components/Banner/Banner';
import LatestBooks from '../../Components/LatestBook/LatestBook';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestBooks></LatestBooks>
        </div>
    );
};

export default Home;