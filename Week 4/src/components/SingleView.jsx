const SingleView = (props) => {
  const {item, setItem} = props;
  if (!item) return null;

  return (
    <dialog open className="modal" onClick={() => setItem(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button id="closeButton" onClick={() => setItem(null)}>
          X
        </button>
        <h3>{item?.title}</h3>

        {item.media_type.startsWith('image') ? (
          <img
            id="image"
            src={item?.filename}
            alt={item?.title}
            style={{maxWidth: '100%'}}
          />
        ) : (
          <video id="video" controls width="100%">
            <source src={item?.filename} type={item.media_type} />
            Your browser does not support the video tag.
          </video>
        )}

        <p>{item.description ? item.description : 'No description'}</p>
      </div>
    </dialog>
  );
};

export default SingleView;
