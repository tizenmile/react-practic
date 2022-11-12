import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { fetchByRegion } from 'service/country-service';
import { useEffect, useState } from 'react';

export const CountrySearch = () => {

  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    
    if (query === '') {
      
      return
    }
  setLoading(true);
    const getCountry = async query => {
      try {
        const data = await fetchByRegion(query);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCountry(query);
  }, [query]);

  const handleSubmit = value => {
    // console.log(value);
    setQuery(value)
  }
  
  return (
    <Section>
      <Container>
        {loading && (<Loader/>)}
        <SearchForm onSubmit={ handleSubmit} />
        {countries && (<CountryList countries={ countries } />)}
      </Container>
    </Section>
  );
};
