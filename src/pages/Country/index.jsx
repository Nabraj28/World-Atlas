import styles from './country.module.css';
import Card from '@/components/Card';
import { IoIosArrowRoundForward } from "react-icons/io";
import useGetCountry from '@/data/hooks/Country/useGetCountry';
import Error from '@/pages/Error';
import Loader from '@/components/Loader';
import { IoArrowUpCircleOutline, IoArrowDownCircleOutline } from "react-icons/io5";
import { useState } from 'react';


const Country = () => {

    const { data, isLoading, error } = useGetCountry();

    if (error) return <Error />;
    if (isLoading) return <Loader />;


    return (
        <main className={styles.countryContainer}>
            <section className={styles.filterSection}>
                <input type="text" placeholder='Search' />
                <div className={styles.arrowContainer}>
                    <p><IoArrowUpCircleOutline className={styles.arrowIcon} /></p>
                    <p><IoArrowDownCircleOutline className={styles.arrowIcon} /></p>
                </div>
                <select>
                    <option defaultChecked value="">All</option>
                </select>
            </section>
            <section className={styles.countrySection}>
                {data.data.map(({ name, population, continent, capital, href }, index) => (
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