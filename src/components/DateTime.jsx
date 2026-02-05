import React, { useState, useEffect } from "react";

const formatDateTime = (date) => {
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  const time = date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  return `${weekday} ${month} ${day} ${time}`;
};

const DateTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    
    return () => clearInterval(id);
  }, []);

  return <div style={{cursor:"default"}} className="date-time">{formatDateTime(now)}</div>;
};

export default DateTime;
