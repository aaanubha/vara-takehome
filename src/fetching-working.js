import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import excelData from './data.xlsx'; // Assuming data.xlsx is your Excel file in the src directory

function ExcelImporter() {
  const [parsedData, setParsedData] = useState(null);

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
          console.log('Parsed Data:', data); // Debugging: Log parsed data to console
          setParsedData(data);
        };
        reader.readAsBinaryString(blob);
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {parsedData && (
        <table>
          <thead>
            <tr>
              {parsedData[0].map((cell, index) => (
                <th key={index}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {parsedData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

}

export default ExcelImporter;
