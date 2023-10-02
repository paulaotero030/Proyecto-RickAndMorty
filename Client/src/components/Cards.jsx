import Card from './Card';

const Cards = ({ characters, onCLouse})=> {
   return(
    <div>
        {
         characters.map(({id, name, status, species, gender, origin, image}) =>{
           return (
             <Card 
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={onCLouse}
           />
           )
         })
        }
    </div>
)}

export default Cards