import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className='category-container-item'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Show now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
