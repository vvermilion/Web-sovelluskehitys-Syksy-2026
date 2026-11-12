 const SingleView = (props) => {
   const {item, setItem} = props;
   return (
     // TODO: Add JSX for displaying a mediafile here
     // - use e.g. a <dialog> element for creating a modal
     // - use item prop to render the media item details
     // - use img tag for displaying images
     // - use video tag for displaying videos
     <dialog open onClick={() => setItem(null)}>
       <button id="closeButton" onClick={() => close}>
         X
       </button>
       <h3>{item?.title}</h3>
       {item.media_type.startsWith('image') ? (
         <img id='image' src={item?.thumbnail}></img>
       ) : (
         <video id='video'>
           <source src={item?.filename} />
         </video>
       )}
       <p>{item.description ? item.description : 'No description' }</p>
     </dialog>
   );
 };
 export default SingleView;

