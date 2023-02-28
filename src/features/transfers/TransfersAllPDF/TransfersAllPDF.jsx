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
import { accounts, date } from "./../../../utils/data/dummyData";

function TransfersAllPDF() {
  const transfers = useSelector(selectTransferArr);
  const userData = useSelector(selectCurrentUser);
  const option = useSelector(selectOptionTransfer);
  const balance =
    option?.account === "ron"
      ? `${userData?.account[0]?.balance} RON`
      : `${userData?.account[1]?.balance} EUR`;

  const name = `${userData.name} ${userData.userDetail.last_name}`;

  console.log(userData);

  const arrayOfArrays = transfers?.map(
    ({ transfer, date, details, to_receiver_name }) => [
      transfer,
      date,
      details,
      to_receiver_name,
    ]
  );

  const generatePDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add the bank name and address
    doc.setFontSize(16);
    doc.text(`My Bank`, 15, 10);
    doc.setFontSize(12);
    doc.text(`123 Main St`, 15, 17);
    doc.text(`Anytown, USA`, 15, 23);

    // Define the PDF header and styling
    doc.setFontSize(22);
    doc.setTextColor("#333333");
    doc.setFont("helvetica", "bold");
    doc.text("Transfers Statement", 15, 45);

    // Add logo
    doc.addImage(logo, "JPEG", 150, 5, 50, 20);

    // Add the user's name and account number
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Name: ${name}`, 15, 65);
    doc.text(`Account Number: 1234567890`, 100, 65);

    // Add the balance and styling
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Current Balance: ${balance}`, 15, 80);

    // Add the statement period
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Statement Period`, 15, 95);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`From: 01/01/2023`, 15, 105);
    doc.text(`To: ${date.toLocaleDateString()}`, 80, 105);

    // Add the table with transaction details
    const headers = [["Amount", "Date", "Details", "Name"]];
    const data = arrayOfArrays;

    doc.autoTable({
      head: headers,
      body: data,
      startY: 115,
      margin: { top: 10 },
      styles: { fontSize: 12, fontStyle: "normal", cellPadding: 5 },
    });

    // Add a footer message and styling
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(
      `For questions or concerns, please contact us at 555-555-5555.`,
      15,
      doc.autoTable.previous.finalY + 40
    );

    // Save the PDF file using the file-saver library
    doc.save(`${name}_Bank_Statement.pdf`);
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
