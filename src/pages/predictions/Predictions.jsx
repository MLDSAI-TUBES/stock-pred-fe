import React from 'react'
import "./predictions.css"
import Company from '../../components/company/Company'
import {StatGroup} from '@chakra-ui/react'
import axios from 'axios';

export default function Predictions() {
  const [data, setData] = React.useState({
    tlkm: {
        price: '0',
        prediction_date: '00-00-000',
        return_pct: '0'
    }, 
    isat: {
        price: '0',
        prediction_date: '00-00-000',
        return_pct: '0'
    },
    fren: {
        price: '0',
        prediction_date: '00-00-000',
        return_pct: '0'
    },
    excl: {
        price: '0',
        prediction_date: '00-00-000',
        return_pct: '0'
    },
    DataisLoaded: false
  });

  React.useEffect(() => {
    axios.get(`/predict-next-day/all`).then((response) => {
      setData({
          tlkm: {
              price: response.data.tlkm.price,
              prediction_date: response.data.tlkm.prediction_date,
              return_pct: response.data.tlkm.return_pct
          }, 
          isat: {
              price: response.data.isat.price,
              prediction_date: response.data.isat.prediction_date,
              return_pct: response.data.isat.return_pct
          },
          fren: {
              price: response.data.fren.price,
              prediction_date: response.data.fren.prediction_date,
              return_pct: response.data.fren.return_pct
          },
          excl: {
              price: response.data.excl.price,
              prediction_date: response.data.excl.prediction_date,
              return_pct: response.data.excl.return_pct
          },
          DataisLoaded: true
      });
    });
  }, []);

  console.log(data)

  const DataisLoaded = data.DataisLoaded;
  if (!DataisLoaded) return (
      <div className='predPage'>
          <p> Loading.... </p> 
      </div>)

  return (
    <div className="predPage">
      <h2>Predictions</h2>
      <p className='currDate'>Current Date: {new Date().toLocaleString("en-US", {dateStyle: 'medium'}) + ""}</p>
      <div className='predictions'>
        
        <StatGroup>
            <Company ticker='TLKM.JK' prediction_date={data.tlkm.prediction_date} price={data.tlkm.price} return_pct={data.tlkm.return_pct}/>
            <Company ticker='ISAT.JK' prediction_date={data.isat.prediction_date} price={data.isat.price} return_pct={data.isat.return_pct}/>
            <Company ticker='FREN.JK' prediction_date={data.fren.prediction_date} price={data.fren.price} return_pct={data.fren.return_pct}/>
            <Company ticker='EXCL.JK' prediction_date={data.excl.prediction_date} price={data.excl.price} return_pct={data.excl.return_pct}/>
        </StatGroup>
      </div>
    </div>
  )
}
