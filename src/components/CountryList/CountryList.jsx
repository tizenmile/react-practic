import { Grid, GridItem } from 'components';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <>
      <Grid>
        {countries.map(({ id, country, flag }) => (
          <GridItem key={id}>
            <NavLink to={`/country/${id}`} state={{from:location}}>
              <img src={flag} alt={country}></img>
            </NavLink>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
