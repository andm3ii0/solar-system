import React from 'react';
import './solarSystem.css';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="sistema" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets">
          {planets.map((planet) => (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
