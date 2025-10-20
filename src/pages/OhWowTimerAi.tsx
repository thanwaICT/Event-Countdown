import { useState } from "react";
import CountdownTimer2 from "../components/TimerClaudeAi";
import { EventResponse } from "../models/index";

export default function TimerAi() {
  const [targetDate] = useState<Date>(
    new Date(Date.now() + 3 * 1000) // 15 seconds from now for demo
  );

  const eventData: EventResponse = {
    id: "1",
    title: "Meet and Greet Event",
    description: "Join us for meeting the biggest Singer of the year!",
    targetDate: targetDate,
    categoryId: 1,
    categoryName: "Music",
    imageUrl: null,
    maxQueueSize: 1000
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Event Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-purple-600/30 rounded-full text-sm font-medium mb-4">
            {eventData.categoryName}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {eventData.title}
          </h1>
          <p className="text-xl text-gray-300 mb-2">{eventData.description}</p>
          <p className="text-lg text-gray-400">📅 {formatDate(eventData.targetDate)}</p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <CountdownTimer2 targetDate={targetDate} />
        </div>

        {/* Info Footer */}
        <div className="mt-8 text-center">
          <p className="text-green-400 text-sm">✨ No page reload needed - timer updates automatically</p>
          <p className="text-gray-400 text-xs mt-2">Queue capacity: {eventData.maxQueueSize} people</p>
        </div>
      </div>
    </div>
  );
}
