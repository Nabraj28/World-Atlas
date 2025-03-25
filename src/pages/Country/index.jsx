import styles from './country.module.css';
import Card from '@/components/Card';
import { IoIosArrowRoundForward } from "react-icons/io";
import useGetCountry from '@/data/hooks/Country/useGetCountry';
import Error from '@/pages/Error';
import Loader from '@/components/Loader';
import { IoArrowUpCircleOutline, IoArrowDownCircleOutline } from "react-icons/io5";
import { useState } from 'react';
import useGetCountryByContinent from '@/data/hooks/Country/useGetCountryByContinent';


const Country = () => {

    const [continent, setContinent] = useState('');
    const { data: countryData, isLoading, error } = useGetCountry();
    const { data: continentData, isLoading: continentLoading, error: continentError } = useGetCountryByContinent(continent);

    const handleContinentChange = (e) => {
        setContinent(e.target.value);
    };


    if (error || continentError) return <Error />;
    if (isLoading || continentLoading) return <Loader />;

    const continentsList = [...new Set(
        countryData.data.map(element => element.continent)
            .filter(continent => continent != null)
    )];

    const Data = continent ? continentData?.data : countryData?.data;

    return (
        <main className={styles.countryContainer}>
            <section className={styles.filterSection}>
                <div className={styles.arrowContainer}>
                    <p><IoArrowUpCircleOutline className={styles.arrowIcon} /></p>
                    <p><IoArrowDownCircleOutline className={styles.arrowIcon} /></p>
                </div>
                <select onChange={handleContinentChange} value={continent}>
                    <option value="">All</option>
                    {continentsList.map((continent, index) => (
                        <option key={index} value={continent}>
                            {continent}
                        </option>
                    ))}
                </select>
            </section>
            <section className={styles.countrySection}>
                {Data.map(({ name, population, continent, capital, href }, index) => (
                    <Card key={index}>
                        <img src={href.flag} alt="flag" />
                        <h1>{name}</h1>
                        <p>Population:<span>{population}</span></p>
                        <p>Region:<span>{continent}</span></p>
                        <p>Capital:<span>{capital}</span></p>
                        <button className={styles.styledButton}>Read More <span><IoIosArrowRoundForward size={25} /></span></button>
                    </Card>
                ))}
            </section>
        </main>
    )
}

export default Country