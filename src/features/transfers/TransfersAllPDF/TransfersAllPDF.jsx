import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { saveAs } from "file-saver";
import Button from "../../../components/UI/Button/Button";
import { useSelector } from "react-redux";
import { selectOptionTransfer } from "../../../state-management/Dashboard/services/transfer/transfer.selector";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import { selectTransferArr } from "./../../../state-management/Dashboard/services/transfer/transfer.selector";
import logo from "../../../assets/images/logo.png";
import { selectCardArr } from "./../../../state-management/Dashboard/cards/cards.selector";
import { accounts } from "./../../../utils/data/dummyData";

function TransfersAllPDF() {
  const transfers = useSelector(selectTransferArr);
  const userData = useSelector(selectCurrentUser);
  const option = useSelector(selectOptionTransfer);
  const balance =
    option.account === "ron"
      ? `${userData.account[0].balance} RON`
      : `${userData.account[1].balance} EUR`;

  console.log(userData.account);

  const arrayOfArrays = transfers.map(
    ({ id, transfer, date, details, to_receiver_name }) => [
      id,
      transfer,
      date,
      details,
      to_receiver_name,
    ]
  );

  const generatePDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Define the PDF header and styling
    doc.setFontSize(22);
    doc.setTextColor("#333333");
    doc.setFont("helvetica", "bold");
    doc.text("Bank Account Statement", 15, 15);

    // Add the bank name and address
    doc.setFontSize(16);
    doc.text(`My Bank`, 15, 35);
    doc.setFontSize(12);
    doc.text(`123 Main St`, 15, 42);
    doc.text(`Anytown, USA`, 15, 48);

    // Add logo
    doc.addImage(logo, "JPEG", 150, 30, 50, 20);

    // Add the user's name and account number
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Name: John Smith`, 15, 65);
    doc.text(`Account Number: 1234567890`, 100, 65);

    // Add the statement period
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Statement Period`, 15, 80);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`From: 01/01/2023`, 15, 90);
    doc.text(`To: 01/31/2023`, 80, 90);

    // Add the table with transaction details
    const headers = [["ID", "Amount", "Date", "Details", "Name"]];
    const data = arrayOfArrays;

    doc.autoTable({
      head: headers,
      body: data,
      startY: 100,
      margin: { top: 10 },
      styles: { fontSize: 12, fontStyle: "normal", cellPadding: 5 },
    });

    // Add the balance and styling
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(
      `Current Balance: ${balance}`,
      15,
      doc.autoTable.previous.finalY + 20
    );

    // Add a footer message and styling
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(
      `For questions or concerns, please contact us at 555-555-5555.`,
      15,
      doc.autoTable.previous.finalY + 40
    );

    // Save the PDF file using the file-saver library
    doc.save("bank_statement.pdf");
  };
  return (
    <Button
      onClick={generatePDF}
      size="md"
      label="Download"
      primary="primary"
    />
  );
}

export default TransfersAllPDF;
