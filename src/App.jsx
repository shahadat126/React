// import React from "react";
// import Header from "./components/Header";
// import Inlinie_if_else from "./components/inlinie_if_else";
// import IIF from "./components/IIF";
// import Map from "./components/Map";
// import Index from "./components/card/index";
import Data from "./components/mapping_data/data.json";
import Index2 from "./components/mapping_data/index";
import Nested_List from "./components/mapping_data/Nested_List";
import UniqueId from "./components/mapping_data/unique_id";

const App = () => {
  
  // let items = [];
  // for(let x=0;x<Data.length;x++)
  // {
  //   items.push(<Index2 titleText={Data[3].title} descText={Data[x].desc} />)
  // }
   
  return (
    <div>
      <UniqueId/>
      <Nested_List/>
       
     </div>
   );
};

export default App;
