import { useState, useRef, useEffect } from 'react';
import styles from './customSelect.module.css';
import { IoChevronDownOutline } from "react-icons/io5";

const CustomSelect = ({ placeholder, options, onChange, value }) => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleOptionClick = (optionValue) => {
        setIsOpen(!isOpen);
        if (optionValue === value) {
            onChange('');
        } else {
            onChange(optionValue)
        }
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className={styles.customSelectContainer} ref={dropdownRef}>
            <div className={styles.selectContainer} onClick={() => setIsOpen(!isOpen)}>
                <span>{value || placeholder}</span>
                <IoChevronDownOutline />
            </div>
            {
                isOpen && (
                    <div className={styles.optionsContainer}>
                        {
                            options.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleOptionClick(option)}
                                    className={`${styles.options} ${option === value ? styles.selected : ''}`}
                                >
                                    {option}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default CustomSelect