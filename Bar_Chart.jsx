import React, { useState, useEffect } from 'react';

import { Column } from '@ant-design/plots';
import Axios from 'Axios';
import Typography from '@mui/material/Typography';
const Demo1 = () => {

    const [projectList,setProjectList] = useState([]);





    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!');
            Axios.get('http://localhost:3001/show_year_project').then((response) => {
              //setRepport_catagory(response.data);
              //console.log(response.data[0].value)
              setProjectList(response.data);         
            }         
        )
        }, 10);
        return () => {
            clearTimeout(timer);
        }
    
      }, []);






//   const data = [
//     {
//       type: '家具家电',
//       sales: 38,
//     },
//     {
//       type: '粮油副食',
//       sales: 52,
//     },
//     {
//       type: '生鲜水果',
//       sales: 61,
//     },
//     {
//       type: '美容洗护',
//       sales: 145,
//     },
//     {
//       type: '母婴用品',
//       sales: 48,
//     },
//     {
//       type: '进口食品',
//       sales: 38,
//     },
//     {
//       type: '食品饮料',
//       sales: 38,
//     },
//     {
//       type: '家庭清洁',
//       sales: 38,
//     },
//   ];

  let data = projectList;

  console.log(data);



  const config = {
    data,
    xField: 'year',
    yField: 'จำนวน',

    color: '#33ccff',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };
  return (
  <div>
    <Typography  noWrap component="div">
        กราฟแสดงจำนวนโครงงานในแต่ละปี
    </Typography>
    <br/><br/>
    <Column {...config} />
  </div>);
  
};

export default Demo1;