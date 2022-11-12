import { Grid, GridItem } from 'components';
import { NavLink } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  return (
    <>
      <Grid>
        {countries.map(({ id, country, flag }) => (
          <GridItem key={id}>
            <NavLink to={`/country/${id}`}>
              <img src={flag} alt={country}></img>
            </NavLink>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
