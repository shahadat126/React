const users = [
    

    {
      id: "1",
      title: "todo 1",
      desc: "todo 1 description",
      phone:[
        {home:"01568570470"},
        {office:"01615999159"},
      ]
    },
    {
      id: "2",
      title: "todo 2",
      desc: "todo 2 description",
      phone:[
        {home:"01568570470"},
        {office:"01615999159"},
      ]
    },
    {
      id: "3",
      title: "todo 3",
      desc: "todo 3 description",
      phone:[
        {home:"01568570470"},
        {office:"01615999159"},
      ]
    },
    {
      id: "4",
      title: "todo 4",
      desc: "todo 4 description",
      phone:[
        {home:"01568570470"},
        {office:"01615999159"},
      ]
    },
  ];

    
  const Nested_List = () => {
    return (
        <div>
            <h1>Nested list</h1>
            {
                users.map((user,index) => {
                    return (
                        <article key={index}>
                            <h1>{user.title}</h1>
                            <h1>{user.desc}</h1>
                            <div>
                                {
                                user.phone.map((phones,index)=> {
                                    return (
                                        <div key={index}>
                                            
                                            {phones.home && <p>Home: {phones.home}</p>}
                                            {phones.office && <p>Office: {phones.office}</p>}
                                        </div>
                                    )
                                })
                            }
                            </div>
                            
                        </article>
                    )
                })
            }

            
        </div>
    );
  };
  
  export default Nested_List;