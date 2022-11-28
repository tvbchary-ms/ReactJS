import React from 'react'
import styled from 'styled-components';
import Chart from '../components/charts/Chart';
import FeaturedInfo from '../components/Featured/Featured';
import { userData } from "../dummyData";

const Container = styled.div`
   flex: 4;
   background-color: white;
`;

const Home = () => {
  return (
    <Container>
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
    </Container>
    
  )
}

export default Home