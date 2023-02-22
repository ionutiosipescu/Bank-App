import React from "react";
import RecentUsers from "./TransfersComponents/RecentUsers";
import TransfersListCard from "./TransfersComponents/TransfersListCard";

function HisotryViewTransfers({ dataServices }) {
  return (
    <>
      <RecentUsers dataServices={dataServices} />
      <TransfersListCard />
    </>
  );
}

export default HisotryViewTransfers;
