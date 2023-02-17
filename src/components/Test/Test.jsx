import React, { useRef } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const TransferPDF = ({ transfer }) => {
  const canvasRef = useRef(null);

  const transfers = [
    {
      date: "01/01/2022",
      description: "Transfer to John Doe",
      amount: "$100.00",
    },
    {
      date: "01/02/2022",
      description: "Transfer to Jane Doe",
      amount: "$200.00",
    },
    {
      date: "01/03/2022",
      description: "Transfer to Bob Smith",
      amount: "$300.00",
    },
  ];

  const downloadPDF = () => {
    const doc = new jsPDF();
    console.log(transfers); // add this line

    const columns = ["Date", "Description", "Amount"];
    const data = transfers.map((transfer) => [
      transfer.date,
      transfer.description,
      transfer.amount,
    ]);

    doc.autoTable({
      html: canvasRef.current,
      startY: 20,
      tableLineColor: [189, 195, 199],
      tableLineWidth: 0.75,
      styles: {
        cellPadding: 10,
        fontSize: 10,
        halign: "center",
        valign: "middle",
      },
      columnStyles: {
        0: { halign: "left" },
        1: { halign: "left" },
        2: { halign: "right" },
      },
      head: [columns],
      body: data,
    });

    doc.save("transfers.pdf");
  };

  return (
    <>
      <button onClick={downloadPDF}>Download PDF</button>
      <canvas ref={canvasRef} />
    </>
  );
};

export default TransferPDF;
