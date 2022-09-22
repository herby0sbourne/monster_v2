import Card from '../card/Card';
import { Monster } from '../../App';

import './card-list.css';

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
      ;
    </div>
  );
};

export default CardList;
