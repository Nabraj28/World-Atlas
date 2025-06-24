import styles from './country.module.css';
import Card from '@/components/Card';
import { IoIosArrowRoundForward } from "react-icons/io";
import useGetCountry from '@/data/hooks/Country/useGetCountry';
import Error from '@/pages/Error';
import Loader from '@/components/Loader';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Search from '@/components/Search';
import useDebounce from '@/data/hooks/useDebounce';
import useSearchCountry from '@/data/hooks/Country/useSearchCountry';

const Country = () => {

    const { data: countriesData, isLoading, error } = useGetCountry();
    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const {data: searchData, isLoading: searchLoading, error: searchError} = useSearchCountry(debouncedSearchTerm);

    const dataToDisplay = debouncedSearchTerm ? searchData || [] : countriesData;

    const ITEMS_PER_PAGE = 12;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearchTerm]);

    if (error) return <Error />;
    if (isLoading) return <Loader />;

    const totalPages = Math.ceil(dataToDisplay.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedData = dataToDisplay.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </section>
            {
               searchError &&
               <div className={styles.errorSection}>
                <p>No Countries found</p>
               </div> 
            }
            {
                searchLoading &&
                <div className={styles.loadingSection}>
                    <Loader/>
                </div>
            }
            <section className={styles.countrySection}>
                {paginatedData.map(({name, population, capital, continents, flags}, index) => (
                    <Card key={index}>
                        <img src={flags.png} alt='' />
                        <h1>{ name.common.length > 10 ? name.common.slice(0,10) + '...': name.common}</h1>
                        <p>Population:<span>{population.length > 8 ? population.slice(0, 8) : population}</span></p>
                        <p>Region:<span>{continents[0].length > 12 ? continents[0].slice(0, 12) : continents[0]}</span></p>
                        <p>Capital:<span>{capital[0].length > 12 ? capital[0].slice(0, 12) : capital[0]}</span></p>
                        <NavLink to={`/country/${name.common}`} className={styles.styledButton}>
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