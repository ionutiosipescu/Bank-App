import React, { useRef } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { saveAs } from "file-saver";
import logo from "../../assets/images/logo.png";

const TransferPDF = ({ transfer }) => {
  // const generatePDF = () => {
  //   // Create a new jsPDF instance
  //   const doc = new jsPDF();

  //   // Define the PDF header and styling
  //   doc.setFontSize(22);
  //   doc.setTextColor("#333333");
  //   doc.setFont("helvetica", "bold");
  //   doc.text("My Bank Account Statement", 15, 25);

  //   // Add the user's name and account number
  //   doc.setFontSize(14);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(`Name: John Smith`, 15, 45);
  //   doc.text(`Account Number: 1234567890`, 100, 45);

  //   // Add the bank name and address
  //   doc.setFontSize(12);
  //   doc.text(`My Bank`, 15, 60);
  //   doc.text(`123 Main St`, 15, 65);
  //   doc.text(`Anytown, USA`, 15, 70);

  //   // Add the statement period
  //   doc.setFontSize(14);
  //   doc.setFont("helvetica", "bold");
  //   doc.text(`Statement Period`, 15, 90);
  //   doc.setFontSize(12);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(`From: 01/01/2023`, 15, 100);
  //   doc.text(`To: 01/31/2023`, 80, 100);

  //   // Add the table with transaction details
  //   const headers = [["Date", "Description", "Amount"]];
  //   const data = [
  //     ["01/03/2023", "Deposit", "$1,000.00"],
  //     ["01/05/2023", "Check #123", "-$100.00"],
  //     ["01/10/2023", "ATM Withdrawal", "-$200.00"],
  //     ["01/15/2023", "Online Payment", "-$50.00"],
  //     ["01/25/2023", "Deposit", "$500.00"],
  //     ["01/29/2023", "Check #124", "-$75.00"],
  //   ];

  //   doc.autoTable({
  //     head: headers,
  //     body: data,
  //     startY: 120,
  //     margin: { top: 10 },
  //     styles: { fontSize: 12, fontStyle: "normal", cellPadding: 5 },
  //   });

  //   // Add the balance and styling
  //   const balance = "$1,100.00";
  //   doc.setFontSize(14);
  //   doc.setFont("helvetica", "bold");
  //   doc.text(`Current Balance: ${balance}`, 15, 240);

  //   // Add a footer message and styling
  //   doc.setFontSize(12);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(
  //     `For questions or concerns, please contact us at 555-555-5555.`,
  //     15,
  //     265
  //   );

  //   // Save the PDF file using the file-saver library
  //   doc.save("bank_statement.pdf");
  // };
  const generatePDF = () => {
    // Create a new jsPDF instance with landscape orientation
    const doc = new jsPDF({
      orientation: "landscape",
    });

    // Load your logo image into the PDF document
    const logoImg = new Image();
    logoImg.src = "../../assets/images/logo.png";
    logoImg.onload = function () {
      // Add the logo to the top right corner of the PDF
      doc.addImage(logoImg, "PNG", 230, 10, 70, 20);
    };

    // Define the PDF header and styling
    doc.setFontSize(22);
    doc.setTextColor("#333333");
    doc.setFont("helvetica", "bold");
    doc.text("My Bank Transfer Receipt", 15, 25);

    // Add the bank name and address
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text(`My Bank`, 15, 45);
    doc.setFontSize(12);
    doc.text(`123 Main St`, 15, 50);
    doc.text(`Anytown, USA`, 15, 55);

    // Add the user's name and account number
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Name: John Smith`, 15, 75);
    doc.text(`Account Number: 1234567890`, 100, 75);

    // Add the transfer details
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Transfer Details`, 15, 95);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Date: 02/24/2023`, 15, 105);
    doc.text(`Amount: $500.00`, 80, 105);
    doc.text(`Recipient: Jane Doe`, 15, 115);
    doc.text(`Account Number: 9876543210`, 80, 115);
    doc.text(`Memo: Rent Payment`, 15, 125);

    // Add a footer message and styling
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(
      `For questions or concerns, please contact us at 555-555-5555.`,
      15,
      265
    );

    // Save the PDF file using the file-saver library
    doc.save("bank_transfer_receipt.pdf");
  };
  return (
    <>
      <button onClick={generatePDF}>Download PDF</button>
    </>
  );
};

export default TransferPDF;
