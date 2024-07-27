import React from 'react';
import { AdWords, Footer, VideoPoster, Hero, Products, StarterPack, Welcome, Zooming } from './components';

export const adData1 = [
  { title: "ÉDITION LIMITÉE" },
  { title: "FESTIVAL STARTER PACK" },
  { title: "COLLECTION CAPSULE" },
  { title: "ÉDITION LIMITÉE" },
  { title: "FESTIVAL STARTER PACK" },
  { title: "COLLECTION CAPSULE" },
  { title: "ÉDITION LIMITÉE" },
  { title: "FESTIVAL STARTER PACK" },
  { title: "COLLECTION CAPSULE" },
  { title: "ÉDITION LIMITÉE" },
  { title: "FESTIVAL STARTER PACK" },
  { title: "COLLECTION CAPSULE" },
  { title: "ÉDITION LIMITÉE" },
  { title: "FESTIVAL STARTER PACK" },
  { title: "COLLECTION CAPSULE" },
  { title: "ÉDITION LIMITÉE" },
  { title: "FESTIVAL STARTER PACK" },
  { title: "COLLECTION CAPSULE" },
  { title: "ÉDITION LIMITÉE" },
  { title: "FESTIVAL STARTER PACK" },
  { title: "COLLECTION CAPSULE" },
];

const App = () => {
  return (
    <div className='w-full bg-blue overflow-x-clip'>
      <div className="overflow-x-clip">
        <Hero />
      </div>

      {/* blue ad words */}
      <AdWords right={true} color={"#37bff3"} adData={adData1} />
      <StarterPack />
      <Products />
      
      {/* dark pink ad words */}
      <AdWords right={true} color={"#A564A8"} adData={adData1} />
      
      <Welcome />
      
      {/* dark pink ad words */}
      <AdWords right={true} color={"#A564A8"} adData={adData1} />
    
      <VideoPoster />

      <div className="bg-blue/80 py-32">
        <Zooming />
      </div>
<div className="bg-blue/80 h-80" />
<div className='h-[1300px] '>
        <Footer />
      </div>
    </div>
  )
}

export default App;
