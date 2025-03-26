import styles from './country.module.css';
import Card from '@/components/Card';
import { IoIosArrowRoundForward } from "react-icons/io";
import useGetCountry from '@/data/hooks/Country/useGetCountry';
import Error from '@/pages/Error';
import Loader from '@/components/Loader';
import { useState } from 'react';
import useGetCountryByContinent from '@/data/hooks/Country/useGetCountryByContinent';
import CustomSelect from '@/components/CustomSelect';
import useGetCountryByName from '@/data/hooks/Country/useGetCountryByName';

const Country = () => {
    const [continent, setContinent] = useState('');
    const [country, setCountry] = useState('');
    const { data: countriesData, isLoading, error } = useGetCountry();
    const { data: continentData, isLoading: continentLoading, error: continentError } = useGetCountryByContinent(continent);
    const { data: countryData, isLoading: countryLoading, error: countryError } = useGetCountryByName(country);

    if (error || continentError || countryError) return <Error />;
    if (isLoading || continentLoading || countryLoading) return <Loader />;

    const continentsList = [...new Set(
        countriesData.data.map(element => element.continent).filter(continent => continent != null)
    )];

    const countrylist = continent
        ? continentData.data.map(element => element.name)
        : countriesData.data.map(element => element.name);

    const Data = country
        ? [countryData.data]
        : continent
            ? continentData.data
            : countriesData.data;

    const handleContinentChange = (newContinent) => {
        setContinent(newContinent);
        setCountry('');
    };

    return (
        <main className={styles.countryContainer}>
            <section className={styles.filterSection}>
                <CustomSelect
                    placeholder={'Select Country'}
                    options={countrylist}
                    onChange={setCountry}
                    value={country}
                />
                <CustomSelect
                    placeholder={'Select Continent'}
                    options={continentsList}
                    onChange={handleContinentChange}
                    value={continent}
                />
            </section>
            <section className={styles.countrySection}>
                {Data.map(({ name, population, continent, capital, href }, index) => (
                    <Card key={index}>
                        <img src={href.flag} alt="flag" />
                        <h1>{name}</h1>
                        <p>Population:<span>{population}</span></p>
                        <p>Region:<span>{continent}</span></p>
                        <p>Capital:<span>{capital}</span></p>
                        <button className={styles.styledButton}>
                            Read More <span><IoIosArrowRoundForward size={25} /></span>
                        </button>
                    </Card>
                ))}
            </section>
        </main>
    )
}

export default Country;