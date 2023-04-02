import { useState } from "react";

function EditCalendarEvent() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState();
  const [attendees, setAttendees] = useState([]);

  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      {/* ... */}
    </>
  );
}