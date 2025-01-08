import { useState, useEffect } from 'react';

interface Location {
  ip: string;
  country_name: string;
  country_code: string;
  city: string;
  region: string;
  timezone: string;
}

export const useLocationData = () => {
  const [location, setLocationData] = useState<Location | null>(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    let timeInterval: ReturnType<typeof setInterval>;

    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data: Location = await response.json();
        setLocationData(data);

        const updateTime = () => {
          const options: Intl.DateTimeFormatOptions = { 
            timeZone: data.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          };
          setTime(new Date().toLocaleTimeString('en-US', options));
        };

        updateTime();
        timeInterval = setInterval(updateTime, 1000);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();

    return () => {
      if (timeInterval) clearInterval(timeInterval);
    };
  }, []);

  return { location, time };
};
