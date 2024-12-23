import React from "react";

const Map = () => {
  const city = ["Dhaka", "Sunamganj", "Khulna", "Kustia", "Cumilla"];
  return (
    <div>
      <ul>
        {city.map((item, i) => {
          return <li key={i}> {item}</li>;
        })}
      </ul>
    </div>
  );
  
};

export default Map;
// let status = false
//   return (
//     <div>
//       {status && <button>Logout</button>}
//     </div>
//   );
