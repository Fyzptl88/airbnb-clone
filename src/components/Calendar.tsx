"use client";

import { useState } from "react";

export default function Calendar() {
  const [startDate, setStartDate] = useState<Date | null>(new Date(2026, 9, 15));
  const [endDate, setEndDate] = useState<Date | null>(new Date(2026, 9, 20));

  // For demonstration, use a fixed "today" to avoid hydration mismatch
  // Normally you'd sync this on the client-side or use a prop
  const today = new Date(2026, 9, 15); // Oct 15, 2026
  today.setHours(0, 0, 0, 0);

  const handleDateClick = (date: Date) => {
    if (date < today) return; // Block past dates
    
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderMonth = (year: number, month: number, monthName: string) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];

    // Empty slots for days before the 1st
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-12 h-12"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isPast = date < today;
      const isSelected =
        (startDate && date.getTime() === startDate.getTime()) ||
        (endDate && date.getTime() === endDate.getTime());
      
      const isBetween =
        startDate &&
        endDate &&
        date > startDate &&
        date < endDate;

      let baseClass = "w-12 h-12 flex items-center justify-center rounded-full text-sm font-semibold transition-colors";
      
      if (isPast) {
        baseClass += " text-text-tertiary line-through cursor-not-allowed font-normal";
      } else if (isSelected) {
        baseClass += " bg-text-primary text-white";
      } else if (isBetween) {
        baseClass += " bg-bg-secondary text-text-primary";
      } else {
        baseClass += " text-text-primary hover:border hover:border-text-primary cursor-pointer";
      }

      days.push(
        <button
          key={i}
          disabled={isPast}
          onClick={() => handleDateClick(date)}
          className={baseClass}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="w-[336px]"> {/* 7 * 48px = 336px width */}
        <h3 className="text-base font-semibold text-center mb-4">{monthName} {year}</h3>
        <div className="grid grid-cols-7 gap-y-1 mb-2">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div key={day} className="text-xs text-text-secondary font-semibold text-center w-12">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {days}
        </div>
      </div>
    );
  };

  // Determine header text
  let headerTitle = "Select check-in date";
  let headerSubtitle = "Add your travel dates for exact pricing";

  if (startDate && endDate) {
    const nights = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    headerTitle = `${nights} nights in Candolim`;
    headerSubtitle = `${startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${endDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
  }

  return (
    <div>
      {/* Dynamic Header */}
      <div className="mb-6">
        <h2 className="text-[22px] font-semibold mb-1">{headerTitle}</h2>
        <div className="text-sm text-text-secondary">{headerSubtitle}</div>
      </div>

      {/* Calendar Grids */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
        {renderMonth(2026, 9, "October")}
        <div className="hidden md:block">
          {renderMonth(2026, 10, "November")}
        </div>
      </div>

      {/* Footer Controls */}
      <div className="flex justify-start md:justify-end mt-4">
        <button
          onClick={handleClear}
          className="text-sm font-semibold underline cursor-pointer text-text-primary hover:text-text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-2"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
}
