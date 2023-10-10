import Card from './Card';
import './Cards.css';

const Cards = ({ characters, onClose }) => {
  return (
    <div className='cards-container'>
      {characters.map(({ id, name, image, gender }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            image={image}
            gender={gender}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

export default Cards;
