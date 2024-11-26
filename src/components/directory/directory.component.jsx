import { DirectoryMenuContainer } from './directory.styles.jsx';
import CategoryItem from '../directory-item/directory-item.component';

const Directory = ({ categories }) => {
  return (
    <DirectoryMenuContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
