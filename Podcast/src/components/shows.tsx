
interface ShowsItem {
    title: string;
    image: string;
    seasons: number;
    description: string;
    id: string;
    updated: string;
  }
  
  interface ShowsProps {
    item: ShowsItem;
    handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  }
  
  

 export const formattedDate =(dateString:string|Date) =>{
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
  
    return `${year} ${month}(${date.getDate()})`;
  }
  
    
 const Shows = (props: ShowsProps) => {
      const { item, handleClick } = props;
  

      return (
          <>
          <div className ="show" id={item.id} onClick={handleClick}>
          <img srcSet={item.image}  className="show-image"/>
          <div className="show-info">
            <p className="show-title">{item.title}</p>
            <div className="show-season">Seasons: {item.seasons}</div>
            <p className="updated">Updated: {formattedDate(item.updated)}</p>
            </div> 
            </div>
          </>  
      )
  }
  
  export default Shows
  
  
  
  
  
