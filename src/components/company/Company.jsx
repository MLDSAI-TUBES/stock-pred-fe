import React from 'react'
import './company.css'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
  } from '@chakra-ui/react'

export default function Company({ticker, prediction_date, price, return_pct}) {
    return (
        <div>
            <Stat className='containerCompany'>
                <StatLabel className="ticker">
                    {ticker}
                </StatLabel>
                <StatHelpText className="date">
                    Prediction date: {prediction_date}
                </StatHelpText>
                <StatNumber className="price">
                    IDR {price}
                </StatNumber>
                {
                    (return_pct.startsWith('-')) ? (
                        <StatHelpText className='pct'>
                            <StatArrow type='decrease' className='arrowDec'/>
                            {return_pct}
                        </StatHelpText>
                    ) : (
                        <StatHelpText className='pct'>
                            <StatArrow type='increase' className='arrowInc'/>
                            {return_pct}
                        </StatHelpText>
                    )
                }
                
            </Stat>   
        </div>
        
    )
}
