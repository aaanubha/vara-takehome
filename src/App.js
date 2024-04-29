import React, { useState, useEffect } from 'react';
import { LineChart } from '@tremor/react';
import * as XLSX from 'xlsx';

//importing data
import excelData from './data.xlsx';

//importing styles
import './App.css'; 


function App() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(excelData);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = (e) => {
          const binaryString = e.target.result;
          const workbook = XLSX.read(binaryString, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

          //extracting headers
          const headers = data[0].slice(1); 
          const values = data.slice(1).map((row) => {
            return row.slice(1); 
          });

          //transposing values
          const transposedValues = headers.map((_, index) => {
            return values.map((row) => row[index]);
          });

          //mapping to line chart
          const chartData = transposedValues.map((column, index) => {
            return {
              month: headers[index],
              ...Object.fromEntries(column.map((value, i) => [data[i][0], value])),
            };
          });

          console.log('Parsed Chart Data:', chartData); 
          setChartData(chartData);
        };
        reader.readAsBinaryString(blob);
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      }
    };

    fetchData();
  }, []);

  //dataformatter
  const dataFormatter = (number) => `$${Intl.NumberFormat('us').format(number).toString()}`;

  return (
    <div>

      <br />

      <h1 className="heading">Monthly Consumption Data</h1>
      <p className="description">This chart displays monthly consumption data for various categories.</p>

      <br /><br />

      <br /><br />
      {chartData.length > 0 && (
        <LineChart
          data={chartData} //passing data
          index="month" //keys for xaxis
          categories={[
            'Water consumption (m3)',
            'Natural gas consumption (m3)',
            'Grid Electricity Consumption (KWh)',
            'Steam Consumption (Tons)',
            'Food waste (Kg)',
            'Solar KWh',
            'Water Reycled (m3)',
          ]} 
          colors={['blue', 'green', 'orange', 'red', 'purple', 'yellow', 'cyan']} //formatting 
          valueFormatter={dataFormatter} 
          yAxisWidth={60} //setting yaxis
          onValueChange={(v) => console.log(v)} 
        />
      )}
    </div>
  );
}

export default App;
