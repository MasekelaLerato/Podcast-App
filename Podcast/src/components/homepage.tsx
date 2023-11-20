// Homepage.tsx

import PodcastList from "./api-call";
import React from "react";

interface HomepageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: React.Dispatch<any>;
}


const Homepage:React.FC<HomepageProps> = () => {
  return (
    <div>
      <PodcastList />
    </div>
  );
};

export default Homepage;






