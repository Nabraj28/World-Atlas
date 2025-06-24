import Card from '@/components/Card';
import styles from './countryDetails.module.css';
import { useParams } from 'react-router';
import Loader from '@/components/Loader';
import Error from '../Error';
import useGetCountryDataByName from '@/data/hooks/Country/useGetCountryByName';

const CountryDetails = () => {

    const country = useParams();
    console.log(country)
    const { data: countryData, isLoading, error } = useGetCountryDataByName(country.name);

    console.log(countryData)

    if (isLoading) return <Loader />
    if (error) return <Error />

    const {
        name,
        continents,
        capital,
        population,
        area,
        currencies,
        idd,
        flags
    } = countryData[0];

    return (
        <div className={styles.countryDetailsContainer}>
            <div className={styles.cardContainer}>
                <Card>
                    <div className={styles.contentWrapper}>
                        <div className={styles.imageContainer}>
                            <img src={flags.png} alt="flag" />
                        </div>
                        <div className={styles.contentContainer}>
                            <h2>{name.common}</h2>
                            <p>Full Name: <span>{name.official}</span></p>
                            <p>Continent: <span>{continents[0]}</span></p>
                            <p>Capital: <span>{capital[0]}</span></p>
                            <p>Population:<span>{population}</span></p>
                            <p>Size: <span>{area}</span></p>
                            <p>Currency: <span>{Object.values(currencies)[0].name}</span></p>
                            <p>Phone Code: <span>{idd.root}{idd.suffixes[0]}</span></p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default CountryDetails