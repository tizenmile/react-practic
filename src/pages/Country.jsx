import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountry = async name => {
      try {
        const data = await fetchCountry(name);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getCountry(countryId);
  }, [countryId]);
  if (!country) {
    return;
  }
  const { flag, capital, countryName, id, languages, population } = country;

  return (
    <Section>
      <Container>
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
