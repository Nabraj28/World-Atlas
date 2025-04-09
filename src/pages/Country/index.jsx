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
import { NavLink } from 'react-router';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Country = () => {

    const [continent, setContinent] = useState('');
    const [country, setCountry] = useState('');
    const { data: countriesData, isLoading, error } = useGetCountry();
    const { data: continentData, isLoading: continentLoading, error: continentError } = useGetCountryByContinent(continent);
    const { data: countryData, isLoading: countryLoading, error: countryError } = useGetCountryByName(country);
    const ITEMS_PER_PAGE = 12;
    const [currentPage, setCurrentPage] = useState(1);


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

    const totalPages = Math.ceil(Data.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedData = Data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (direction) => {
        if (direction === "next" && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
        if (direction === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
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
                {paginatedData.map(({ name, population, continent, capital, href }, index) => (
                    <Card key={index}>
                        <img src={href.flag} alt="flag" />
                        <h1>{name.length > 10 ? name.slice(0, 10) + "..." : name}</h1>
                        <p>Population:<span>{population.length > 8 ? population.slice(0, 8) : population}</span></p>
                        <p>Region:<span>{continent.length > 12 ? continent.slice(0, 12) : continent}</span></p>
                        <p>Capital:<span>{capital.length > 12 ? capital.slice(0, 12) : capital}</span></p>
                        <NavLink to={`/country/${name}`} className={styles.styledButton}>
                            Read More <span><IoIosArrowRoundForward size={25} /></span>
                        </NavLink>
                    </Card>
                ))}
            </section>
            <div className={styles.paginationContainer}>
                <button
                    disabled={currentPage === 1}
                    className={styles.styledButton}
                    onClick={() => handlePageChange("prev")}
                >
                    <MdChevronLeft />
                </button>
                <span className={styles.paginationInfo}>{currentPage} of {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    className={styles.styledButton}
                    onClick={() => handlePageChange("next")}
                >
                    <MdChevronRight />
                </button>
            </div>
        </main>
    )
}

export default Country;