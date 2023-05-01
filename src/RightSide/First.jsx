import React, { useState } from "react";

const Trends = () => {
  const [isNotIntrested, setIsNotIntrested] = useState([
    {
      id: 1,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Ms Dhoni",
      totalKeywords: "8000k Tweets",
    },
    {
      id: 2,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Virat kohli",
      totalKeywords: "6000k Tweets",
    }    
  ]);

  const handleDelete = (id) => {
    const updatedTrends = isNotIntrested.filter((trend) => trend.id !== id);
    setIsNotIntrested(updatedTrends);
  };

  return (
    <>
      {isNotIntrested.map((trend) => (
        <div key={trend.id}>
          <p>{trend.country} - {trend.keyword}</p>
          <p>{trend.totalKeywords}</p>
          <button onClick={() => handleDelete(trend.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Trends;
