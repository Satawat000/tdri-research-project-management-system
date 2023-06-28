import React, { useState, useEffect } from 'react';
import Axios from 'Axios';
import { Column } from '@ant-design/plots';
//import Button from '@mui/material/Button';
import {  DatePicker, Space  } from 'antd';
import Typography from '@mui/material/Typography';





const Bar_chart_Pub_SL_yaer = () => {


    const [publicationList,setPublicationList] = useState([]);


  







  useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!');
            Axios.get('http://localhost:3001/show_Chart_pie_publication_10').then((response) => {
              //setRepport_catagory(response.data);
              //console.log(response.data)
              //setProjectList(response.data);
              for(let i = 0 ; i < response.data.length;i++){
                //setMemberList(items =>[...items, response.data[i].ml_name]);
                if(response.data[i].month == '1'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Jan.'
                }
                if(response.data[i].month == '2'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Feb.'
                }
                if(response.data[i].month == '3'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Mar.'
                }
                if(response.data[i].month == '4'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Apr.'
                }
                if(response.data[i].month == '5'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'May.'
                }
                if(response.data[i].month == '6'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Jun.'
                }
                if(response.data[i].month == '7'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Jul.'
                }
                if(response.data[i].month == '8'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Aug.'
                }
                if(response.data[i].month == '9'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Sep.'
                }
                if(response.data[i].month == '10'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Oct.'
                }
                if(response.data[i].month == '11'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Nov.'
                }
                if(response.data[i].month == '12'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Dec.'
                }
                setPublicationList(publicationList => {
                  return ([
                       ...publicationList,
                      {
                        name: 'รายงานทีดีอาร์ไอ',
                        month: response.data[i].month,
                        value: response.data[i].total,
  
                      },
                    ])
                })
              }


                       
            }         
        )
        }, 10);

        const timer1 = setTimeout(() => {
            console.log('This will run after 1 second!');
            Axios.get('http://localhost:3001/show_Chart_pie_publication_20').then((response) => {
              //setRepport_catagory(response.data);
              //console.log(response.data)
              //setProjectList(response.data);
              for(let i = 0 ; i < response.data.length;i++){
                //setMemberList(items =>[...items, response.data[i].ml_name]);
                if(response.data[i].month == '1'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Jan.'
                }
                if(response.data[i].month == '2'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Feb.'
                }
                if(response.data[i].month == '3'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Mar.'
                }
                if(response.data[i].month == '4'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Apr.'
                }
                if(response.data[i].month == '5'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'May.'
                }
                if(response.data[i].month == '6'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Jun.'
                }
                if(response.data[i].month == '7'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Jul.'
                }
                if(response.data[i].month == '8'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Aug.'
                }
                if(response.data[i].month == '9'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Sep.'
                }
                if(response.data[i].month == '10'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Oct.'
                }
                if(response.data[i].month == '11'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Nov.'
                }
                if(response.data[i].month == '12'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Dec.'
                }
                setPublicationList(publicationList => {
                  return ([
                       ...publicationList,
                      {
                        name: 'Quaterly Review',
                        month: response.data[i].month,
                        value: response.data[i].total,
  
                      },
                    ])
                })
              }


                       
            }         
        )
        }, 20);

        const timer2 = setTimeout(() => {
            console.log('This will run after 1 second!');
            Axios.get('http://localhost:3001/show_Chart_pie_publication_30').then((response) => {
              //setRepport_catagory(response.data);
              //console.log(response.data)
              //setProjectList(response.data);
              for(let i = 0 ; i < response.data.length;i++){
                //setMemberList(items =>[...items, response.data[i].ml_name]);
                if(response.data[i].month == '1'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Jan.'
                }
                if(response.data[i].month == '2'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Feb.'
                }
                if(response.data[i].month == '3'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Mar.'
                }
                if(response.data[i].month == '4'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Apr.'
                }
                if(response.data[i].month == '5'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'May.'
                }
                if(response.data[i].month == '6'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Jun.'
                }
                if(response.data[i].month == '7'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Jul.'
                }
                if(response.data[i].month == '8'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Aug.'
                }
                if(response.data[i].month == '9'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Sep.'
                }
                if(response.data[i].month == '10'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Oct.'
                }
                if(response.data[i].month == '11'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Nov.'
                }
                if(response.data[i].month == '12'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Dec.'
                }
                setPublicationList(publicationList => {
                  return ([
                       ...publicationList,
                      {
                        name: 'งานวิจัย',
                        month: response.data[i].month,
                        value: response.data[i].total,
  
                      },
                    ])
                })
              }


                       
            }         
        )
        }, 30);

        const timer3 = setTimeout(() => {
            console.log('This will run after 1 second!');
            Axios.get('http://localhost:3001/show_Chart_pie_publication_40').then((response) => {
              //setRepport_catagory(response.data);
              //console.log(response.data)
              //setProjectList(response.data);
              for(let i = 0 ; i < response.data.length;i++){
                //setMemberList(items =>[...items, response.data[i].ml_name]);
                if(response.data[i].month == '1'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Jan.'
                }
                if(response.data[i].month == '2'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Feb.'
                }
                if(response.data[i].month == '3'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Mar.'
                }
                if(response.data[i].month == '4'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Apr.'
                }
                if(response.data[i].month == '5'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'May.'
                }
                if(response.data[i].month == '6'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Jun.'
                }
                if(response.data[i].month == '7'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Jul.'
                }
                if(response.data[i].month == '8'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Aug.'
                }
                if(response.data[i].month == '9'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Sep.'
                }
                if(response.data[i].month == '10'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Oct.'
                }
                if(response.data[i].month == '11'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Nov.'
                }
                if(response.data[i].month == '12'){
                  
                  //console.log(response.data[i].total)
                  response.data[i].month = 'Dec.'
                }
                setPublicationList(publicationList => {
                  return ([
                       ...publicationList,
                      {
                        name: 'อื่นๆ',
                        month: response.data[i].month,
                        value: response.data[i].total,
  
                      },
                    ])
                })
              }


                       
            }         
        )
        }, 40);



        return () => {
            clearTimeout(timer);
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            // clearTimeout(timer1);
        }
    
      }, []);

      //console.log(projectList);




  let data = publicationList;
  // const data = [
  //   {
  //     name: 'London',
  //     月份: 'Jan.',
  //     月均降雨量: 18.9,
  //   },
  //   {
  //     name: 'London',
  //     月份: 'Feb.',
  //     月均降雨量: 28.8,
  //   },
  //   {
  //     name: 'London',
  //     月份: 'Mar.',
  //     月均降雨量: 39.3,
  //   },
  //   {
  //     name: 'London',
  //     月份: 'Apr.',
  //     月均降雨量: 81.4,
  //   },
  //   {
  //     name: 'London',
  //     月份: 'May',
  //     月均降雨量: 47,
  //   },
  //   {
  //     name: 'London',
  //     月份: 'Jun.',
  //     月均降雨量: 20.3,
  //   },
  //   {
  //     name: 'London',
  //     月份: 'Jul.',
  //     月均降雨量: 24,
  //   },
  //   {
  //     name: 'London',
  //     月份: 'Aug.',
  //     月均降雨量: 35.6,
  //   },
  //   {
  //     name: 'Berlin',
  //     月份: 'Jan.',
  //     月均降雨量: 12.4,
  //   },
  //   {
  //     name: 'Berlin',
  //     月份: 'Feb.',
  //     月均降雨量: 23.2,
  //   },
  //   {
  //     name: 'Berlin',
  //     月份: 'Mar.',
  //     月均降雨量: 34.5,
  //   },
  //   {
  //     name: 'Berlin',
  //     月份: 'Apr.',
  //     月均降雨量: 99.7,
  //   },
  //   {
  //     name: 'Berlin',
  //     月份: 'May',
  //     月均降雨量: 52.6,
  //   },
  //   {
  //     name: 'Berlin',
  //     月份: 'Jun.',
  //     月均降雨量: 35.5,
  //   },
  //   {
  //     name: 'Berlin',
  //     月份: 'Jul.',
  //     月均降雨量: 37.4,
  //   },
  //   {
  //     name: 'Berlin',
  //     月份: 'Aug.',
  //     月均降雨量: 42.4,
  //   },
  // ];

  const onChange = (date, dateString) => {
    //console.log(date.$y);
    if(date == null || date == undefined){
      console.log("null");
      setPublicationList([]);
    }else{
      console.log(date.$y);
      setPublicationList([]);

      Axios.post('http://localhost:3001/post_Chart_pie_publication_10',{
            year:date.$y
        }).then((response)=>{
            //console.log("response _ 00");
            //console.log(response.data);
            for(let i = 0 ; i < response.data.length;i++){
              
              if(response.data[i].month == '1'){
                  
                
                response.data[i].month = 'Jan.'
              }
              if(response.data[i].month == '2'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Feb.'
              }
              if(response.data[i].month == '3'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Mar.'
              }
              if(response.data[i].month == '4'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Apr.'
              }
              if(response.data[i].month == '5'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'May.'
              }
              if(response.data[i].month == '6'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Jun.'
              }
              if(response.data[i].month == '7'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Jul.'
              }
              if(response.data[i].month == '8'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Aug.'
              }
              if(response.data[i].month == '9'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Sep.'
              }
              if(response.data[i].month == '10'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Oct.'
              }
              if(response.data[i].month == '11'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Nov.'
              }
              if(response.data[i].month == '12'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Dec.'
              }
              setPublicationList(publicationList => {
                return ([
                     ...publicationList,
                    {
                      name: 'รายงานทีดีอาร์ไอ',
                      month: response.data[i].month,
                      value: response.data[i].total,

                    },
                  ])
              })
            }
      })
      //----------------------------
      Axios.post('http://localhost:3001/post_Chart_pie_publication_20',{
            year:date.$y
        }).then((response)=>{
            //console.log("response _ 00");
            //console.log(response.data);
            for(let i = 0 ; i < response.data.length;i++){
              
              if(response.data[i].month == '1'){
                  
                
                response.data[i].month = 'Jan.'
              }
              if(response.data[i].month == '2'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Feb.'
              }
              if(response.data[i].month == '3'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Mar.'
              }
              if(response.data[i].month == '4'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Apr.'
              }
              if(response.data[i].month == '5'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'May.'
              }
              if(response.data[i].month == '6'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Jun.'
              }
              if(response.data[i].month == '7'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Jul.'
              }
              if(response.data[i].month == '8'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Aug.'
              }
              if(response.data[i].month == '9'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Sep.'
              }
              if(response.data[i].month == '10'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Oct.'
              }
              if(response.data[i].month == '11'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Nov.'
              }
              if(response.data[i].month == '12'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Dec.'
              }
              setPublicationList(publicationList => {
                return ([
                     ...publicationList,
                    {
                      name: 'Quaterly Review',
                      month: response.data[i].month,
                      value: response.data[i].total,

                    },
                  ])
              })
            }
      })
      //---------------------------
      Axios.post('http://localhost:3001/post_Chart_pie_publication_30',{
            year:date.$y
        }).then((response)=>{
            //console.log("response _ 00");
            //console.log(response.data);
            for(let i = 0 ; i < response.data.length;i++){
              
              if(response.data[i].month == '1'){
                  
                
                response.data[i].month = 'Jan.'
              }
              if(response.data[i].month == '2'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Feb.'
              }
              if(response.data[i].month == '3'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Mar.'
              }
              if(response.data[i].month == '4'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Apr.'
              }
              if(response.data[i].month == '5'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'May.'
              }
              if(response.data[i].month == '6'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Jun.'
              }
              if(response.data[i].month == '7'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Jul.'
              }
              if(response.data[i].month == '8'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Aug.'
              }
              if(response.data[i].month == '9'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Sep.'
              }
              if(response.data[i].month == '10'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Oct.'
              }
              if(response.data[i].month == '11'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Nov.'
              }
              if(response.data[i].month == '12'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Dec.'
              }
              setPublicationList(publicationList => {
                return ([
                     ...publicationList,
                    {
                      name: 'งานวิจัย',
                      month: response.data[i].month,
                      value: response.data[i].total,

                    },
                  ])
              })
            }
      })
      //--------------------------------
      Axios.post('http://localhost:3001/post_Chart_pie_publication_40',{
            year:date.$y
        }).then((response)=>{
            //console.log("response _ 00");
            //console.log(response.data);
            for(let i = 0 ; i < response.data.length;i++){
              
              if(response.data[i].month == '1'){
                  
                
                response.data[i].month = 'Jan.'
              }
              if(response.data[i].month == '2'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Feb.'
              }
              if(response.data[i].month == '3'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Mar.'
              }
              if(response.data[i].month == '4'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Apr.'
              }
              if(response.data[i].month == '5'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'May.'
              }
              if(response.data[i].month == '6'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Jun.'
              }
              if(response.data[i].month == '7'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Jul.'
              }
              if(response.data[i].month == '8'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Aug.'
              }
              if(response.data[i].month == '9'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Sep.'
              }
              if(response.data[i].month == '10'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Oct.'
              }
              if(response.data[i].month == '11'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Nov.'
              }
              if(response.data[i].month == '12'){
                
                //console.log(response.data[i].total)
                response.data[i].month = 'Dec.'
              }
              setPublicationList(publicationList => {
                return ([
                     ...publicationList,
                    {
                      name: 'อื่นๆ',
                      month: response.data[i].month,
                      value: response.data[i].total,

                    },
                  ])
              })
            }
      })
      

      
    }
  };


  const config = {
    data,
    isGroup: true,
    xField: 'month',
    yField: 'value',
    seriesField: 'name',

    /** 设置颜色 */
    color: ['#ff0000','#00ff00','#0000ff','#fff000'],

    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'bottom',
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return (<>
    <Typography  noWrap component="div">
        โปรดระบุปีที่ต้องการแสดงจำนวนผลงาน
    </Typography>
    <DatePicker onChange={onChange} picker="year" size='Large' style={{marginTop:17}} placeholder={'2022'}/>
    <br/>
    

    
  
    <Column {...config} />
    <div>
      
      <div>
      
        
      </div>
      
      
      
    
    
    </div>
    </>
  
  
  

  )
  
};


export default Bar_chart_Pub_SL_yaer;