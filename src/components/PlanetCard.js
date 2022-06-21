import React from 'react';
import PropTypes from 'prop-types';

class PlanetCards extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const descricao = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card">
        <img src={ planetImage } alt={ descricao } />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCards.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCards;
