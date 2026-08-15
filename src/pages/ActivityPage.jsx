import React, { useEffect } from 'react';
import { ActivitySection } from '../components/activity/ActivitySection';

export const ActivityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-20 animate-fadeIn">
      <ActivitySection />
    </div>
  );
};

export default ActivityPage;
