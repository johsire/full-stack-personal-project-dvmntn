import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * Component Imports
 */
import Header from '../header';

/**
 * Style imports
 */

import { Wrapper, Title, MiniTitle, HeroSection, Color, Error, WeatherInput, SearchButton } from './styles';

const Landing = ({ onFormSubmit, updatedLocation, location, message, showForm, errorMessage }) => (
     <Wrapper>
      <Header />
      <HeroSection>
        {showForm && (
          <Fragment>
            <Title>Where are you visiting us from?</Title>
            {errorMessage && <Error>{errorMessage === 'Nothing to geocode' ? 'Please enter a city' : errorMessage}</Error>}
            <form onSubmit={onFormSubmit}>
                <WeatherInput type="text" placeholder="What city are you in?" name="location" value={location} onChange={updatedLocation} />
                <SearchButton type="submit" disabled={location.length < 0}>Search</SearchButton>
            </form>
          </Fragment>
        )}
        {!showForm && (
          <Fragment>
            <Title>Hmmm {message} in <Color>{location}</Color>? Perfect time for an Avacado Toast!</Title>
            <Link to="/products">
              <MiniTitle>Order Today</MiniTitle>
            </Link>
          </Fragment>
        )}
      </HeroSection>
     </Wrapper>
   );

export default Landing;
