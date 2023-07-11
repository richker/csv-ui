import React, { useState } from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 95%;
`;

const DateFormatButton = styled.button`
  background-color: #8884d8;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Chart = ({ data, dateFormat }) => {


  const formattedData = data.map((item) => {
    const date = new Date(item.date);
    const formattedDate = date.toLocaleDateString(); // Format date as DD/MM/YYYY
    const monthYear = `${date.getMonth() + 1}/${date
      .getFullYear()
      .toString()
      .substr(-2)}`;

    return {
      date: formattedDate,
      monthYear: monthYear,
      recall: parseFloat(item.recall),
    };
  });



  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={formattedData}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <XAxis dataKey={dateFormat} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="recall"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Chart;
