import { useState } from "react";
import { LineChart } from '@tremor/react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <br /><br />
      <LineChartHero /> {/* Render the LineChartHero component */}
    </div>
  );
}

const chartdata = [
  {
    "month": "Jan 2023",
    "Water consumption (m3)": 4.5,
    "Natural gas consumption (m3)": 500,
    "Grid Electricity Consumption (KWh)": 3000,
    "Steam Consumption (Tons)": 10,
    "Food waste (Kg)": 100,
    "Solar KWh": 500,
    "Water Reycled (m3)": 2
  },
  {
    "month": "Feb 2023",
    "Water consumption (m3)": 5,
    "Natural gas consumption (m3)": 475,
    "Grid Electricity Consumption (KWh)": 2800,
    "Steam Consumption (Tons)": 9.8,
    "Food waste (Kg)": 95,
    "Solar KWh": 550,
    "Water Reycled (m3)": 2.3
  },
  {
    "month": "March 2023",
    "Water consumption (m3)": 5.2,
    "Natural gas consumption (m3)": 450,
    "Grid Electricity Consumption (KWh)": 2500,
    "Steam Consumption (Tons)": 9.7,
    "Food waste (Kg)": 120,
    "Solar KWh": 800,
    "Water Reycled (m3)": 2.5
  },
  {
    "month": "April 2023",
    "Water consumption (m3)": 5,
    "Natural gas consumption (m3)": 465,
    "Grid Electricity Consumption (KWh)": 2450,
    "Steam Consumption (Tons)": 9.6,
    "Food waste (Kg)": 110,
    "Solar KWh": 850,
    "Water Reycled (m3)": 2.2
  },
  {
    "month": "May 2023",
    "Water consumption (m3)": 4.8,
    "Natural gas consumption (m3)": 485,
    "Grid Electricity Consumption (KWh)": 2500,
    "Steam Consumption (Tons)": 9.9,
    "Food waste (Kg)": 90,
    "Solar KWh": 900,
    "Water Reycled (m3)": 1.9
  },
  {
    "month": "June 2023",
    "Water consumption (m3)": 4,
    "Natural gas consumption (m3)": 300,
    "Grid Electricity Consumption (KWh)": 2900,
    "Steam Consumption (Tons)": 10.2,
    "Food waste (Kg)": 150,
    "Solar KWh": 1000,
    "Water Reycled (m3)": 2.1
  },
  {
    "month": "July 2023",
    "Water consumption (m3)": 4,
    "Natural gas consumption (m3)": 300,
    "Grid Electricity Consumption (KWh)": 2800,
    "Steam Consumption (Tons)": 9.9,
    "Food waste (Kg)": 180,
    "Solar KWh": 1000,
    "Water Reycled (m3)": 2
  },
  {
    "month": "August 2023",
    "Water consumption (m3)": 5.1,
    "Natural gas consumption (m3)": 350,
    "Grid Electricity Consumption (KWh)": 2800,
    "Steam Consumption (Tons)": 9.7,
    "Food waste (Kg)": 200,
    "Solar KWh": 950,
    "Water Reycled (m3)": 2.2
  },
  {
    "month": "September 2023",
    "Water consumption (m3)": 4.8,
    "Natural gas consumption (m3)": 450,
    "Grid Electricity Consumption (KWh)": 2750,
    "Steam Consumption (Tons)": 10,
    "Food waste (Kg)": 250,
    "Solar KWh": 850,
    "Water Reycled (m3)": 2.3
  },
  {
    "month": "October 2023",
    "Water consumption (m3)": 4.7,
    "Natural gas consumption (m3)": 475,
    "Grid Electricity Consumption (KWh)": 2500,
    "Steam Consumption (Tons)": 9.2,
    "Food waste (Kg)": 100,
    "Solar KWh": 800,
    "Water Reycled (m3)": 3
  },
  {
    "month": "November 2023",
    "Water consumption (m3)": 5.5,
    "Natural gas consumption (m3)": 490,
    "Grid Electricity Consumption (KWh)": 2800,
    "Steam Consumption (Tons)": 9.3,
    "Food waste (Kg)": 120,
    "Solar KWh": 700,
    "Water Reycled (m3)": 5
  },
  {
    "month": "December 2023",
    "Water consumption (m3)": 5.4,
    "Natural gas consumption (m3)": 550,
    "Grid Electricity Consumption (KWh)": 2750,
    "Steam Consumption (Tons)": 10,
    "Food waste (Kg)": 95,
    "Solar KWh": 500,
    "Water Reycled (m3)": 2.5
  }


];

// Define dataFormatter function
const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

// Define LineChartHero component
function LineChartHero() {
  return (
    <LineChart
      data={chartdata} // Pass the data array containing the chart data
      index="month" // Specify the key for the x-axis values
      categories={[
        'Water consumption (m3)', 
        'Natural gas consumption (m3)', 
        'Grid Electricity Consumption (KWh)', 
        'Steam Consumption (Tons)', 
        'Food waste (Kg)', 
        'Solar KWh', 
        'Water Reycled (m3)'
      ]} // Specify the categories to be plotted on the chart
      colors={['blue', 'green', 'orange', 'red', 'purple', 'yellow', 'cyan']} // Set colors for each category
      valueFormatter={dataFormatter} // Apply dataFormatter to format y-axis values
      yAxisWidth={60} // Set yAxisWidth if necessary
      onValueChange={(v) => console.log(v)} // Add onValueChange if needed
    />
  );
}

export default App;
