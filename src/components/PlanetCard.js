import React from 'react';
import PropTypes from 'prop-types';
import './planetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const descricao = `Planeta ${planetName}`;
    return (
      <div className="PlanetCard" data-testid="planet-card">
        <img src={ planetImage } alt={ descricao } />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
