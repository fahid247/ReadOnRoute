import React from 'react';
import Banner from '../../Components/Banner/Banner';
import LatestBooks from '../../Components/LatestBook/LatestBook';
import Coverage from '../../Components/Coverage/Coverage';
import WhyChoose from '../../Components/WhyChoose/WhyChoose';
import TrustedBy from '../../Components/TrustedBy/TrustedBy';
import QualityTrust from '../../Components/QualityTrust/QualityTrust';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestBooks></LatestBooks>
            <Coverage></Coverage>
            <WhyChoose></WhyChoose>
            <QualityTrust></QualityTrust>
            <TrustedBy></TrustedBy>
        </div>
    );
};

export default Home;