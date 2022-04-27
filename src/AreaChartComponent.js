import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "Jan",
        buy: 4000,
        sell: 2400,
    },
    {
        name: "Feb",
        buy: 3000,
        sell: 1398,
    },
    {
        name: "Mar",
        buy: 2000,
        sell: 9800,
    },
    {
        name: "Apr",
        buy: 2780,
        sell: 3908,
    },
    {
        name: "May",
        buy: 1890,
        sell: 4800,
    },
    {
        name: "Jun",
        buy: 2390,
        sell: 3800,
    },
    {
        name: "Jul",
        buy: 3490,
        sell: 4300,
    },
    {
        name: "Aug",
        buy: 3490,
        sell: 4300,
    },
    {
        name: "Sep",
        buy: 3490,
        sell: 4300,
    },
    {
        name: "Oct",
        buy: 3490,
        sell: 4300,
    },
    {
        name: "Nov",
        buy: 3490,
        sell: 4300,
    },
    {
        name: "Dec",
        buy: 3490,
        sell: 4300,
    }
];

const AreaChartComponent = (props) => {
    return (
        <>
            <div>
                <div class="ml-5 row d-flex justify-content-center text-center">
                    <h1>React Area Chart - technostuf.com</h1>
                    <hr />
                    <div className="col-md-8">
                        <ResponsiveContainer width={500} height={400}>
                            <AreaChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="sell" name="Sell" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="buy" name="Buy" stroke="#ffc658" fill="#ffc658" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AreaChartComponent;