import React, { useEffect, useState } from 'react';

interface Podcast {
  id: string;
  title: string;
  description: string;
  image: string;
  seasons: number;
  genres: number[];
  updated: string;
}

const PodcastList: React.FC = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const URL = 'https://podcast-api.netlify.app/shows';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(`Network response was not ok, status code: ${response.status}`);
        }

        const data = await response.json();
        setPodcasts(data);
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
   
      <div className="podcasts">
        {podcasts.map((podcast) => (
          <div key={podcast.id} className="show--item">
            <img src={podcast.image} className="podcast--image"/>
            <h3>{podcast.title}</h3>
           
            {/* <p>{podcast.description}</p> */}
            {/* <p>Seasons: {podcast.seasons}</p> */}
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastList;