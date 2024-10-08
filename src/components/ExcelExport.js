import React from 'react';
import * as XLSX from 'xlsx';

function ExcelExport({ transactions }) {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');
    XLSX.writeFile(workbook, 'transactions.xlsx');
  };

  return (
    <button onClick={exportToExcel}>Export to Excel</button>
  );
}

export default ExcelExport;
