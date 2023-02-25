import React, { useRef } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { saveAs } from "file-saver";
import logo from "../../../assets/images/logo.png";
import { useSelector } from "react-redux";
import {
  selectDetailTransfer,
  selectOptionTransfer,
} from "../../../state-management/Dashboard/services/transfer/transfer.selector";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import Button from "../../../components/UI/Button/Button";

const TransferPDF = () => {
  const detailTransfer = useSelector(selectDetailTransfer);
  const currentUserData = useSelector(selectCurrentUser);
  const option = useSelector(selectOptionTransfer);
  const { address, country, first_name, last_name, mobile } =
    currentUserData.userDetail;
  const { date, details, transfer } = detailTransfer;

  const generatePDF = () => {
    const doc = new jsPDF("landscape");

    // Add logo
    doc.addImage(logo, "JPEG", 10, 10, 50, 20);

    // Add bank name, address and phone number
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Bank Name", 280, 20, null, null, "right");

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Bank Address, City, Country", 280, 30, null, null, "right");
    doc.text("Phone: 1234567890", 280, 40, null, null, "right");

    // Add line separating header
    doc.setLineWidth(0.5);
    doc.line(10, 50, 280, 50);

    // Add customer details as row
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Customer Details", 20, 60);

    const customerData = [
      ["Name:", `${first_name} ${last_name}`],
      ["Address:", `${address}`],
      ["Phone:", `${mobile}`],
      ["Email:", `${currentUserData.email}`],
      [
        "Country:",
        `${`${country}`.charAt(0).toUpperCase() + `${country}`.slice(1)}`,
      ],
    ];

    doc.autoTable({
      startY: 70,
      head: false,
      body: customerData,
    });

    // Add transfer details as table
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Transfer Details", 20, doc.autoTable.previous.finalY + 10);

    const transferData = [
      ["Amount:", `${transfer}`],
      ["Currency:", `${`${option.account}`.toUpperCase()}`],
      ["Commission:", "3.23%"],
      ["Date:", `${date}`],
      ["Message:", `${details}`],
    ];

    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 20,
      head: false,
      body: transferData,
    });

    // Add generic bank statement with signature
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(
      "For questions or concerns, please contact us at 555-555-5555.",
      160,
      doc.autoTable.previous.finalY + 20
    );

    doc.save("transfer_statement.pdf");
  };
  return (
    <>
      <Button
        onClick={generatePDF}
        label="Download PDF"
        size="md"
        primary="primary"
      />
    </>
  );
};

export default TransferPDF;
