import React from 'react';
import Banner from '../../Components/Banner/Banner';
import LatestBooks from '../../Components/LatestBook/LatestBook';
import Coverage from '../../Components/Coverage/Coverage';
import WhyChoose from '../../Components/WhyChoose/WhyChoose';
import TrustedBy from '../../Components/TrustedBy/TrustedBy';
import QualityTrust from '../../Components/QualityTrust/QualityTrust';
import Features from '../../Components/Features/Features';
import Services from '../../Components/Services/Services';
import Highlights from '../../Components/Highlights/Highlights';
import Newsletter from '../../Components/NewsLetter/NewsLetter';
import FAQ from '../../Components/FAQ/FAQ';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestBooks></LatestBooks>
            <Coverage></Coverage>
            <WhyChoose></WhyChoose>
            <Features></Features>
            <Highlights></Highlights>
            <QualityTrust></QualityTrust>
            <TrustedBy></TrustedBy>
            <Services></Services>
            <Newsletter></Newsletter>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;