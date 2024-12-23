// import React from "react";
// import Header from "./components/Header";
// import Inlinie_if_else from "./components/inlinie_if_else";
// import IIF from "./components/IIF";
// import Map from "./components/Map";
// import Index from "./components/card/index";
import Data from "./components/mapping_data/data.json";
import Index2 from "./components/mapping_data/index";

const App = () => {
  let items = [];
  // for(let x=0;x<Data.length;x++)
  // {
  //   items.push(<Index2 titleText={Data[3].title} descText={Data[x].desc} />)
  // }
   
  return (
    <div>
      {Data.map((item,index)=><Index2 key={index} titleText={item.title} descText={item.desc} />)}
    </div>
  );
};

export default App;
