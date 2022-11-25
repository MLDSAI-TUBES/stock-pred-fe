import React from 'react'
import { LineChart, Line, XAxis, YAxis, 
    CartesianGrid, Tooltip, Legend, ResponsiveContainer } 
    from 'recharts';
import { ResponsiveLine } from '@nivo/line'
import './priceChart.css'

const data = [
    {
      "id": "japan",
      "color": "hsl(172, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 210
        },
        {
          "x": "helicopter",
          "y": 80
        },
        {
          "x": "boat",
          "y": 223
        },
        {
          "x": "train",
          "y": 36
        },
        {
          "x": "subway",
          "y": 99
        },
        {
          "x": "bus",
          "y": 68
        },
        {
          "x": "car",
          "y": 157
        },
        {
          "x": "moto",
          "y": 93
        },
        {
          "x": "bicycle",
          "y": 167
        },
        {
          "x": "horse",
          "y": 280
        },
        {
          "x": "skateboard",
          "y": 31
        },
        {
          "x": "others",
          "y": 131
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(221, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 0
        },
        {
          "x": "helicopter",
          "y": 13
        },
        {
          "x": "boat",
          "y": 210
        },
        {
          "x": "train",
          "y": 10
        },
        {
          "x": "subway",
          "y": 42
        },
        {
          "x": "bus",
          "y": 82
        },
        {
          "x": "car",
          "y": 292
        },
        {
          "x": "moto",
          "y": 252
        },
        {
          "x": "bicycle",
          "y": 293
        },
        {
          "x": "horse",
          "y": 123
        },
        {
          "x": "skateboard",
          "y": 127
        },
        {
          "x": "others",
          "y": 208
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(190, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 59
        },
        {
          "x": "helicopter",
          "y": 27
        },
        {
          "x": "boat",
          "y": 137
        },
        {
          "x": "train",
          "y": 173
        },
        {
          "x": "subway",
          "y": 11
        },
        {
          "x": "bus",
          "y": 219
        },
        {
          "x": "car",
          "y": 286
        },
        {
          "x": "moto",
          "y": 82
        },
        {
          "x": "bicycle",
          "y": 270
        },
        {
          "x": "horse",
          "y": 277
        },
        {
          "x": "skateboard",
          "y": 122
        },
        {
          "x": "others",
          "y": 284
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(341, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 48
        },
        {
          "x": "helicopter",
          "y": 133
        },
        {
          "x": "boat",
          "y": 54
        },
        {
          "x": "train",
          "y": 29
        },
        {
          "x": "subway",
          "y": 290
        },
        {
          "x": "bus",
          "y": 61
        },
        {
          "x": "car",
          "y": 70
        },
        {
          "x": "moto",
          "y": 156
        },
        {
          "x": "bicycle",
          "y": 104
        },
        {
          "x": "horse",
          "y": 178
        },
        {
          "x": "skateboard",
          "y": 45
        },
        {
          "x": "others",
          "y": 54
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(94, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 206
        },
        {
          "x": "helicopter",
          "y": 281
        },
        {
          "x": "boat",
          "y": 107
        },
        {
          "x": "train",
          "y": 107
        },
        {
          "x": "subway",
          "y": 178
        },
        {
          "x": "bus",
          "y": 247
        },
        {
          "x": "car",
          "y": 199
        },
        {
          "x": "moto",
          "y": 230
        },
        {
          "x": "bicycle",
          "y": 299
        },
        {
          "x": "horse",
          "y": 182
        },
        {
          "x": "skateboard",
          "y": 52
        },
        {
          "x": "others",
          "y": 253
        }
      ]
    }
  ]

export default function PriceChart() {
  return (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    
  )
}
