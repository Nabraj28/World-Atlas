import Card from '@/components/Card';
import styles from './countryDetails.module.css';
import { useParams } from 'react-router';
import useGetCountryByName from '@/data/hooks/Country/useGetCountryByName';
import Loader from '@/components/Loader';
import Error from '../Error';

const CountryDetails = () => {

    const { name } = useParams();
    const { data: countryData, isLoading, error } = useGetCountryByName(name);

    if (isLoading) return <Loader />
    if (error) return <Error />

    const {
        name: countryName,
        full_name,
        continent,
        capital,
        population,
        size,
        currency,
        phone_code,
        href
    } = countryData.data;

    return (
        <div className={styles.countryDetailsContainer}>
            <div className={styles.cardContainer}>
                <Card>
                    <div className={styles.contentWrapper}>
                        <div className={styles.imageContainer}>
                            <img src={href.flag} alt="flag" />
                        </div>
                        <div className={styles.contentContainer}>
                            <h2>{countryName}</h2>
                            <p>Full Name: <span>{full_name}</span></p>
                            <p>Continent: <span>{continent}</span></p>
                            <p>Capital: <span>{capital}</span></p>
                            <p>Population:<span>{population}</span></p>
                            <p>Size: <span>{size}</span></p>
                            <p>Currency: <span>{currency}</span></p>
                            <p>Phone Code: <span>{phone_code}</span></p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default CountryDetails