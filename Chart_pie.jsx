import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import Axios from 'Axios';

const DemoPie = () => {

  // const [repport_catagory, setRepport_catagory] = useState(0);
  // const [review_catagory, setReview_catagory] = useState(0);
  // const [research_catagory, setResearch_catagory] = useState(0);
  // const [other_catagory, setOther_catagory] = useState(0);
  const [publicatonList,setPublicatonList] = useState([]);
  //const [data,setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
        console.log('This will run after 1 second!');
        Axios.get('http://localhost:3001/show_catagory_10').then((response) => {
          //setRepport_catagory(response.data);
          //console.log(response.data[0].value)
          setPublicatonList(publicatonList => {
            return ([
                 ...publicatonList,
                {
                  type: 'รายงานทีดีอาร์ไอ',
                  value: response.data[0].value,
                },
              ])
          })
      
          
        }
        
    )
    }, 10);
    //return () => clearTimeout(timer);

    const timer1 = setTimeout(() => {
        console.log('This will run after 2 second!');
        Axios.get('http://localhost:3001/show_catagory_20').then((response) => {
          //setReview_catagory(response.data);
          setPublicatonList(publicatonList => {
            return ([
                 ...publicatonList,
                {
                  type: 'Quaterly Review',
                  value: response.data[0].value,
                },
              ])
          })
        
        }
        
    )
    }, 20);

    const timer2 = setTimeout(() => {
        console.log('This will run after 3 second!');
        Axios.get('http://localhost:3001/show_catagory_30').then((response) => {
          //setResearch_catagory(response.data);
          setPublicatonList(publicatonList => {
            return ([
                 ...publicatonList,
                {
                  type: 'งานวิจัย',
                  value: response.data[0].value,
                },
              ])
          })
        }
        
    )
    }, 30);

    const timer3 = setTimeout(() => {
        Axios.get("http://localhost:3001/show_catagory_40").then((response) => {
          //setOther_catagory(response.data);
          setPublicatonList(publicatonList => {
            return ([
                 ...publicatonList,
                {
                  type: 'อื่นๆ',
                  value: response.data[0].value,
                },
              ])
          })
        });
    },300);
    const timer4 = setTimeout(() => {
      
      
      
    },1000);


    


    return () => {
        clearTimeout(timer);
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer3);
        

    }

  }, []);

  let data = publicatonList;


  
  
  const config = {
    appendPadding: 7,
    data ,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };


  return (
    <div >
      <Pie {...config} />
      {/* <button onClick={()=>{console.log(employeeList);
      console.log(data)}
    }>hhha</button> */}
    </div>

  );
  
};


export default DemoPie;