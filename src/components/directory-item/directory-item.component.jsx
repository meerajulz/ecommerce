import { Link } from 'react-router-dom';
import {
  CategoryContainer,
  BackgroundImage,
  CategoryBodyContainer,
  CategoryTitle,
} from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <CategoryContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CategoryBodyContainer>
        <CategoryTitle>{title}</CategoryTitle>
        <Link to={`/shop/${title}`}>
          <p>Show now</p>
        </Link>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default DirectoryItem;
