import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Checkout = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email: email,
            date,
            service: title,
            service_id: _id,
            price: price,
            img

        }
        console.log(booking);
        fetch('https://car-doctor-server-delta-pied.vercel.app/bookings', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Service booked successfully!')
                }
            })
    }

    return (
        <div>
            <h2 className='text-center text-3xl'>{title}</h2>
            <form onSubmit={handleBookSubmit}>
                <div className='grid md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder='name' name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} name='phone' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className='btn btn-warning' type="submit" value="Confirm Order" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;