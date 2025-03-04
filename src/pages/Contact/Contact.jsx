import styles from './contact.module.css';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section className={styles.contactContainer}>
            <h1 className={styles.containerTitle}>Contact Us</h1>
            <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder='Enter your name'
                            name='name'
                            {...register("name", {
                                minLength: {
                                    value: 2,
                                    message: 'Please enter a valid name'
                                },
                                required: {
                                    value: true,
                                    message: 'Please enter your  name'
                                },
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: 'Name must contain only letters and spaces'
                                }
                            })}
                        />
                        {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            name='email'
                            {...register("email", {
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Please enter a valid email'
                                }, required: {
                                    value: true,
                                    message: 'Please enter your email'
                                }
                            })}
                        />
                        {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
                    </div>
                    <div className={styles.inputContainer}>
                        <textarea
                            name="message"
                            rows={10}
                            placeholder='Enter your message'
                            {...register("message", {
                                minLength: {
                                    value: 5,
                                    message: "Message must be at least 5 characters long."
                                },
                                required: {
                                    value: true,
                                    message: 'Please enter your message'
                                }
                            })}
                        ></textarea>
                        {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}
                    </div>
                    <button type='submit' >Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact