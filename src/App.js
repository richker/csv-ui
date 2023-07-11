import React, { useState } from "react";
import styled from "styled-components";
import DateInput from "./components/DateInput/DateInput";
import Chart from "./components/Chart/Chart";
import DateFormatButton from "./components/DateFormatButton/DateFormatButton";
import useFetchData from "./hooks/useFetchData";
import formatData from "./utils/formatData";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f2f2f2;
  min-height: 95vh;
`;

const DateContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

function App() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const { data, error } = useFetchData(fromDate, toDate);
  const [dateFormat, setDateFormat] = useState("monthYear"); // Default to MM/YY

  const formattedData = formatData(data);

  const handleFromDateChange = (e) => setFromDate(e.target.value);
  const handleToDateChange = (e) => setToDate(e.target.value);
  const toggleDateFormat = () => {
    setDateFormat(dateFormat === "monthYear" ? "date" : "monthYear");
  };

  return (
    <AppContainer>
      <Title>Recall Trends Over Time</Title>
      <DateContainer>
        <DateInput value={fromDate} onChange={handleFromDateChange} />
        <DateInput value={toDate} onChange={handleToDateChange} />
      </DateContainer>
      <DateFormatButton onClick={toggleDateFormat} />
      {error ? <ErrorMessage>{error}</ErrorMessage> : <Chart data={formattedData} dateFormat={dateFormat} />}
    </AppContainer>
  );
}

export default App;
