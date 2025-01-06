// import React from "react";
// import Header from "./components/Header";
// import Inlinie_if_else from "./components/inlinie_if_else";
// import IIF from "./components/IIF";
// import Map from "./components/Map";
// import Index from "./components/card/index";
import Card from "./components/Class/Class_c";
import Class_c from "./components/Class/Class_c";
import Data from "./components/mapping_data/data.json";
import Index2 from "./components/mapping_data/index";
import Nested_List from "./components/mapping_data/Nested_List";
import UniqueId from "./components/mapping_data/unique_id";
import EventBinding from "./components/State/EventBinding";
import EventHandler from "./components/State/EventHandler";
import State from "./components/State/state";
import StateMinClass from "./components/State/StateMinClass";
import UpdateState from "./components/State/UpdateState";
import UseState from "./components/State/UseState";


const App = () => {
  // let items = [];
  // for(let x=0;x<Data.length;x++)
  // {
  //   items.push(<Index2 titleText={Data[3].title} descText={Data[x].desc} />)
  // }

  return (
    <div>
      {/* <UniqueId/>
      <Nested_List/> */}
      <Card name="SK" title="Eng" />
      <State />
      <EventHandler />
      <EventBinding />
      <StateMinClass />
      <UseState/>
      <UpdateState/>
    </div>
  );
};

export default App;
