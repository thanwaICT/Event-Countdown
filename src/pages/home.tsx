import CountdownTimer from "../components/timer";
import { EventResponse } from "../models/index";
import { NavLink } from "react-router-dom";

export default function Home() {
  const eventData: EventResponse = {
    id: "1",
    title: "Me Meeting",
    description: "test description",
    targetDate: new Date(Date.now() + 10 * 1000), // 10 seconds from now for demo
    categoryId: 1,
    categoryName: "Music",
    imageUrl: null,
    maxQueueSize: 1000
  };

  return (
    <>
      <div className="mt-20">
        <div className="pb-5">
          <h1 className="pb-2 font-semibold">{eventData.title}</h1>
          <p className="text-[40px] font-medium">Event Countdown</p>
        </div>
        <div>
          <CountdownTimer targetDate={eventData.targetDate} />
        </div>

        {/* Info Footer */}
        <div className="mt-8 text-center">
          <p className="text-red-400 text-sm">** No page reload needed - Page will updates automatically **</p>
          <p className="text-gray-400 text-xs mt-2">Queue capacity: {eventData.maxQueueSize} people</p>
        </div>

        <div className="pt-5">
          <NavLink to="/AhThisIsAi">Want to see what ai should be??</NavLink>
        </div>
      </div>
    </>
  );
}
