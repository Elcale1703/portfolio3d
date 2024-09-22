import { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_60f4qid',
                'template_toacz4i',
                {
                    from_name: form.name,
                    to_name: 'Moises Agudelo',
                    from_email: form.email,
                    to_email: 'jmfreelance73@gmail',
                    message: form.message
                },
                'QYPrGLpz7A6DXaUUb'
            )
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.log(error);
            alert('Something went wrong. Please try again.');
        }

    }

    //template_toacz4i

    return (
        <section className='c-space my-20'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src='/assets/terminal.png' alt='terminal bg' className='absolute inset-0 min-h-screen' />
                <div className='contact-container'>
                    <h3 className='head-text'>
                        Contact Me
                    </h3>
                    <p className='md:text-lg sm:text-sm text-white-600 mt-3'>
                        I am currently looking for new opportunities. If you have any questions or would like to work together, please feel free to reach out.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>
                                Full Name
                            </span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Moises Agudelo'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>
                                Email
                            </span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='moises20ocampis@gmail.com'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>
                                Your message
                            </span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder="Hi I'm interested in..."
                            />
                        </label>
                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src='/assets/arrow-up.png' alt='arrow up' className='field-btn_arrow' />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact