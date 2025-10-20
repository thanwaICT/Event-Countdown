Event Countdown Timer
A modern, real-time event countdown timer built with React and TypeScript. Features a sleek UI with gradient effects, automatic updates without page reloads, and celebration animations when events begin.

🚀 Features

Real-time Countdown: Precise countdown timer that updates every second
No Page Reload Required: Timer continues running without interruption
Reset Functionality: Ability to restart the countdown
Type-Safe: Built with TypeScript for better code quality

🛠️ Tech Stack

React 18+ - UI library
TypeScript - Type safety and better developer experience
Tailwind CSS - Utility-first CSS framework for styling
Vite - Fast build tool and development server

#
📋 Prerequisites

Node.js (v16 or higher)
npm or yarn

Installation

Clone the repository

git clone https://github.com/thanwaICT/Event-Countdown.git
cd Event-Countdown

Install dependencies

npm install
or
yarn install

Start the development server

npm run dev
or
yarn dev

Open your browser and navigate to http://localhost:5173

#
🎯 How It Works
The countdown timer calculates the time difference between the current time and a target date/time, then updates every second using React's useEffect and setInterval. When the countdown reaches zero, it triggers a celebration animation and stops the timer.
Key implementation details:

Uses useRef to store interval reference for proper cleanup
Implements useEffect for side effects management
Handles timezone calculations automatically
Prevents memory leaks by clearing intervals on unmount

🎨 Customization
You can customize the event details in App.tsx:
typescript
const eventData: EventResponse = {
id: "1",
title: "Your Event Name",
description: "Your event description",
targetDate: new Date("2025-12-31T23:59:59Z"), // Set your target date
categoryId: 1,
categoryName: "Category",
imageUrl: null,
maxQueueSize: 1000
};

👤 Author
GitHub: @thanwaICT

🙏 Acknowledgments

Built as a portfolio project to demonstrate React and TypeScript skills
