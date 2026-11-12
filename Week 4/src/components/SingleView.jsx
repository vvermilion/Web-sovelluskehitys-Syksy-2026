 const SingleView = (props) => {
   const {item, setItem} = props;
   return (
     // TODO: Add JSX for displaying a mediafile here
     // - use e.g. a <dialog> element for creating a modal
     // - use item prop to render the media item details
     // - use img tag for displaying images
     // - use video tag for displaying videos
     <dialog open onClick={() => setItem(null)}>
       <h3>Title: {item?.title}</h3>
     </dialog>
   );
 };
 export default SingleView;

