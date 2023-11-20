import { useEffect, useState } from "react";

const PodcastList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://podcast-api.netlify.app/shows");
        const data = await res.json();
        setList(data);
      } catch (error) {
        console.error("Error fetching podcast data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchPodcastDetails = async (id: string) => {
    try {
      setLoading(true);
      const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
      const data = await res.json();
      // Handle the data for the second API call as needed
      console.log("Podcast Details:", data);
    } catch (error) {
      console.error("Error fetching podcast details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePodcastClick = (id: string) => {
    // Call the second API function when a podcast is clicked
    fetchPodcastDetails(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Podcast List</h2>
      <ul>
        {list.map((podcast) => (
          <li key={podcast.id} onClick={() => handlePodcastClick(podcast.id)}>
            {podcast.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;
