import React from 'react';
import Layout from '../../components/Layouts/Layout';
import '../../styles/Home.css';
import Section1 from './Section1';
import Section2 from './Section2';



function Home() {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Section1 />

        {/* Home Section About */}
        <Section2 />
      </Layout>
    </>
  );
}

export default Home;