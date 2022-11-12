import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../service/country-service';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCountry = async name => {
      try {
        const data = await fetchCountry(name);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCountry(countryId);
  }, [countryId]);

  // if (loading) {
  //   return <Loader/>
  // }
  if (!country) {
    return;
  }
  const { flag, capital, countryName, id, languages, population } = country;

  return (
    <Section>
      <Container>
        {loading && (<Loader/>)}
        <NavLink to={location?.state?.from ?? "/"}>
          Back
        </NavLink>
        <CountryInfo
          flag={flag}
          capital={capital}
          countryName={countryName}
          id={id}
          languages={languages}
          population={population}
        />
      </Container>
    </Section>
  );
};
