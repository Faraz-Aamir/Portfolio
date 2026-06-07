'use client';

import { useState, useEffect } from 'react';

export function usePakistanTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const pkt = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Karachi' }));
      const hours = String(pkt.getHours()).padStart(2, '0');
      const minutes = String(pkt.getMinutes()).padStart(2, '0');
      const seconds = String(pkt.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
