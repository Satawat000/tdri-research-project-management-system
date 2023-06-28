import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import Axios from 'Axios';

const Chart_pie_project = () => {

  
  const [employeeList,setEmployeeList] = useState([]);
  //const [data,setData] = useState([]);
  const [projectList,setProjectList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
        console.log('This will run after 1 second!');
        Axios.get('http://localhost:3001/show_project_status_00').then((response) => {
          //setRepport_catagory(response.data);
          //console.log(response.data[0].value)
          setProjectList(projectList => {
            return ([
                 ...projectList,
                {
                  type: 'งานวิจัยสมบูรณ์',
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
        Axios.get('http://localhost:3001/show_project_status_01').then((response) => {
          //setReview_catagory(response.data);
          setProjectList(projectList => {
            return ([
                 ...projectList,
                {
                  type: 'กำลังดำเนินการ',
                  value: response.data[0].value,
                },
              ])
          })
        
        }
        
    )
    }, 20);

    


    


    return () => {
        clearTimeout(timer);
        clearTimeout(timer1);
        
        

    }

  }, []);

  let data = projectList;


  
  
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


export default Chart_pie_project;