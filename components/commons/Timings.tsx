import {
  CalendarDays,
  Clock9,

} from "lucide-react";
const Timings = () => {
  return (
    <>
      <ul
        className="
          flex 
          flex-col 
          gap-2
          text-sm
          "
      >
        <li
          className="
            font-semibold 
            text-lg
            "
        >
          Timings
        </li>
        <li
          className="
            flex
            items-center
            gap-2"
        >
          <CalendarDays size={20} />
          Monday-Sunday
        </li>
        <li className="flex items-center gap-2">
          <Clock9 size={20} />
          9:00 AM to 8:00 PM
        </li>
      </ul>
    </>
  );
}

export default Timings