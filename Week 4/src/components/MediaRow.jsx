import PropTypes from 'prop-types';

const MediaRow = (props) => {
  const {item, setItem} = props;
  return (
    <tr key={item.media_id}>
      <td>
        <img src={item.thumbnail} alt={item.title}></img>
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td id="mediaDate">
        {new Date(item.created_at).toLocaleString('fi-FI')}
      </td>
      <td>{item.filesize}</td>
      <td id="mediaType">{item.media_type}</td>
      <td>
        <button onClick={() => setItem(item)}>View</button>
      </td>
    </tr>
  );
};
MediaRow.propTypes = {
  item: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    filesize: PropTypes.number.isRequired, // Changed from string to number
    media_type: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  setItem: PropTypes.func.isRequired, // Added setItem validation
};

export default MediaRow;
