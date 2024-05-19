/*
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';




function Reservation({ hotelId, roomId }) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const navigate = useNavigate();

  const reserveRoom = async () => {
    try {
      const myToken = localStorage.getItem('myToken');
      const response = await axios.post(
        'http://localhost:5050/reservation/post',
        {
          hotel: hotelId,
          room: roomId,
          checkInDate,
          checkOutDate,
          adults,
          children,
          email,
          firstName,
          lastName,
          country,
          phoneNumber
        },
        {
          headers: {
            Authorization: `Bearer ${myToken}`
          }
        }
      );
      // Handle success, e.g., show a success message or redirect to another page
      // history.push('/my/reservations');
      navigate('/my/reservations');
      toast.success('Room booked successfully!');
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        // Display the error message from the backend
        toast.error(error.response.data.message);
      } else {
        toast.error('Invalid email or password');
      }
    }
  };

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleAdultsChange = (e) => {
    setAdults(parseInt(e.target.value));
  };

  const handleChildrenChange = (e) => {
    setChildren(parseInt(e.target.value));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div>
      <h2>Reservation Details</h2>
      <form onSubmit={reserveRoom}>
        <div>
          <label htmlFor="checkInDate">Check-in Date:</label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={handleCheckInDateChange}
          />
        </div>
        <div>
          <label htmlFor="checkOutDate">Check-out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={handleCheckOutDateChange}
          />
        </div>
        <div>
          <label htmlFor="adults">Adults:</label>
          <input
            type="number"
            id="adults"
            min="1"
            value={adults}
            onChange={handleAdultsChange}
          />
        </div>
        <div>
          <label htmlFor="children">Children:</label>
          <input
            type="number"
            id="children"
            min="0"
            value={children}
            onChange={handleChildrenChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={handleCountryChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default Reservation;
*/

  /*
  const reserveRoom = async (e) => {
    e.preventDefault();
    try {
      const myToken = localStorage.getItem('myToken');
      const response = await axios.post(
        'http://localhost:5050/reservation/post',
        {
          hotel: hotelId,
          room: roomId,
          checkInDate,
          checkOutDate,
          adults,
          childern,
          email,
          firstName,
          lastName,
          country,
          phoneNumber
        },
        {
          headers: {
            Authorization: `Bearer ${myToken}`
          }
        }
      );
      // Handle success, e.g., show a success message or redirect to another page
      // history.push('/my/reservations');
      navigate('/my/reservations');
      toast.success('Room booked successfully!');
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        // Display the error message from the backend
        toast.error(error.response.data.message);
      } else {
        toast.error('Invalid email or password');
      }
    }
  };
*/

/*
const reserveRoom = async (e) => {
  e.preventDefault();
  try {
    const myToken = localStorage.getItem('myToken');
    const cardElement = elements.getElement(CardElement);

    // Create a payment method using the card element
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      throw new Error(error.message);
    }

    // Make the reservation request with the payment method ID
    const response = await axios.post(
      'http://localhost:5050/reservation/post',
      {
          hotel: hotelId,
          room: roomId,
          checkInDate,
          checkOutDate,
          adults,
          childern,
          email,
          firstName,
          lastName,
          country,
          phoneNumber,
          paymentMethodId: paymentMethod.id
      },
      {
        headers: {
          Authorization: `Bearer ${myToken}`
        }
      }
    );

    // Handle success, e.g., show a success message or redirect to another page
    toast.success('Room booked successfully!');
    navigate('/my/reservations')
  } catch (error) {
    console.error(error);
    if (error.response && error.response.data && error.response.data.message) {
      // Display the error message from the backend
      toast.error(error.response.data.message);
    } else {
      toast.error('An error occurred during the reservation process');
    }
  }
};
*/

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';
import HearNav from './HearNav';
import PhoneInput from 'react-phone-number-input';
import StripeCheckOut from "react-stripe-checkout";
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51O2cmlB5cMjPZqGmhRY7RmGfHEtl3ksT3T12VPRVYnijhLqxv2DUpmyiKpqs6tKlsgxaAm1683TSaVlYzEk06HAt006pML8tj8');
const stripe = await loadStripe('pk_test_51O2cmlB5cMjPZqGmhRY7RmGfHEtl3ksT3T12VPRVYnijhLqxv2DUpmyiKpqs6tKlsgxaAm1683TSaVlYzEk06HAt006pML8tj8');


function Reservation() {
  const { state } = useLocation();
  const {
    hotelId,
    roomId,
    checkInDate,
    checkOutDate,
    adults,
    childern,
    totalDays,
    totalPrice
  } = state;
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handlePhoneNumberChange = (value) => {
    console.log(value);
    setPhoneNumber(value);
  };

  //function onToken(token) {
    //console.log(token);
  //}

  /*
  function onToken(token) {
    console.log('hey this is the payment token:', token.id);
    reserveRoom(token);
  }
  */

  /*
  const handlePayment = async () => {
    try {
      // Create a payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod('card');
  
      if (error) {
        // Handle the error and display it to the user
        console.error('Payment method error:', error);
        return;
      }
  
      // Confirm the payment with the client secret and payment method
      const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id
      });
  
      if (confirmError) {
        // Handle the error and display it to the user
        console.error('Payment confirmation error:', confirmError);
        return;
      }
  
      // Payment succeeded, show a success message to the user
      console.log('Payment succeeded!');
    } catch (error) {
      // Handle other errors, such as network errors
      console.error('Payment error:', error);
    }
  };
  */

  const handlePayment = async () => {
    try {
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet, handle this case gracefully
        console.error('Stripe.js has not loaded.');
        return;
      }
  
      // Create a payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
  
      if (error) {
        // Handle the error and display it to the user
        console.error('Payment method error:', error);
        return;
      }
  
      // Get the client secret from the server
      const response = await axios.post(
        'http://localhost:5050/reservation/post',
        {
          amount: totalPrice * 100, // Pass the total price or the amount to be paid
          currency: 'usd', // Pass the currency of the payment
        }
      );
  
      const { clientSecret } = response.data; // Extract the client secret from the server response
  
      // Confirm the payment with the client secret and payment method
      const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id
      });
  
      if (confirmError) {
        // Handle the error and display it to the user
        console.error('Payment confirmation error:', confirmError);
        return;
      }
  
      // Payment succeeded, show a success message to the user
      console.log('Payment succeeded!');
    } catch (error) {
      // Handle other errors, such as network errors
      console.error('Payment error:', error);
    }
  };

const reserveRoom = async (e) => {
  e.preventDefault();

  try {
    const myToken = localStorage.getItem('myToken');
     // Create a payment method with the Stripe Card Element
     /*
     const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: `${firstName} ${lastName}`,
        email: email,
      },
    });

    if (error) {
      console.error('Stripe createPaymentMethod error:', error);
      throw new Error('Failed to create payment method');
    }
    */

    // Make the reservation request with the payment method ID
    const response = await axios.post(
      'http://localhost:5050/reservation/post',
      {
        hotel: hotelId,
        room: roomId,
        checkInDate,
        checkOutDate,
        adults,
        childern,
        email,
        firstName,
        lastName,
        country,
        phoneNumber,
        totalPrice,
        totalDays
      },
      {
        headers: {
          Authorization: `Bearer ${myToken}`
        }
      }
    );
    // Handle success, e.g., show a success message or redirect to another page
    toast.success('Room booked successfully!');
    navigate('/my/reservations');
  } catch (error) {
    console.error(error);
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error('An error occurred during the reservation process');
    }
  }
};

  return (
    <div className='reservation-bigset-container'>
      <HearNav />
      <h2>Reservation Details</h2>
      <p>Check-in Date: {checkInDate}</p>
      <p>Check-out Date: {checkOutDate}</p>
      <p>adults: {adults}</p>
      <p>Children: {childern}</p>
      <p>total days: {totalDays}</p>
      <p>total price: {totalPrice}</p>
      <form onSubmit={reserveRoom}>
  <label className='field'>first name*</label>
    <input 
      type="text"
      id="firstName"
      value={firstName}
      onChange={handleFirstNameChange}
    />
    <label className='field'>Last name*</label>
    <input 
      type="text"
      id="lastName"
      value={lastName}
      onChange={handleLastNameChange}
    />
  <label>Email*</label>
  <input 
    type="email"
    id="email"
    value={email}
    onChange={handleEmailChange}
  />
  <label htmlFor="phoneInput">Phone Number:</label>
  <PhoneInput
    className='phoneInput'
    international
    defaultCountry="RU"
    type="tel"
    id="phoneNumber"
    value={phoneNumber}
    onChange={handlePhoneNumberChange}
  />
  <input type='text' value={country} onChange={handleCountryChange} />
  <label>Card Details</label>
  <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
    hidePostalCode: true, // Hide the postal code input
    iconStyle: 'solid', // Use solid icons
  }}
/>
      <button className='jetski' type="submit">book now</button>
  </form>
      <ToastContainer />
    </div>
  )
};

export default Reservation;



/*
<option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
            </select>
            <hr />

/*
<form onSubmit={reserveRoom}>
        {/*<div>
          <label htmlFor="checkInDate">Check-in Date:</label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={handleCheckInDateChange}
          />
        </div>
        <div>
          <label htmlFor="checkOutDate">Check-out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={handleCheckOutDateChange}
          />
        </div>
        <div>
          <label htmlFor="adults">Adults:</label>
          <input
            type="number"
            id="adults"
            min="1"
            value={adults}
            onChange={handleAdultsChange}
          />
        </div>
        <div>
          <label htmlFor="children">Children:</label>
          <input
            type="number"
            id="children"
            min="0"
            value={children}
            onChange={handleChildrenChange}
          />
        </div>*//*}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={handleCountryChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <button type="submit">Reserve Room</button>
      </form>
*/






/*
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { toast } from 'react-toastify';

const Reservation = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');

  const reserveRoom = async (e) => {
    e.preventDefault();
    try {
      const myToken = localStorage.getItem('myToken');
      const cardElement = elements.getElement(CardElement);

      // Create a payment method using the card element
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        throw new Error(error.message);
      }

      // Make the reservation request with the payment method ID
      const response = await axios.post(
        'http://localhost:5050/reservation/post',
        {
          email,
          paymentMethodId: paymentMethod.id,
        },
        {
          headers: {
            Authorization: `Bearer ${myToken}`,
          },
        }
      );

      // Handle success, e.g., show a success message or redirect to another page
      toast.success('Room booked successfully!');
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        // Display the error message from the backend
        toast.error(error.response.data.message);
      } else {
        toast.error('An error occurred during the reservation process');
      }
    }
  };

  return (
    <div>
      <h2>Reservation</h2>
      <form onSubmit={reserveRoom}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Card details</label>
          <CardElement options={{}} />
        </div>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default Reservation;
*/

/*
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { toast } from 'react-toastify';

const Reservation = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');

  const reserveRoom = async (e) => {
    e.preventDefault();
    try {
      const cardElement = elements.getElement(CardElement);

      // Create a payment method using the card element
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        throw new Error(error.message);
      }

      // Make the reservation request with the payment method ID
      const response = await axios.post(
        '/reservation/post',
        {
          email,
          paymentMethodId: paymentMethod.id,
        }
      );

      // Handle success, e.g., show a success message or redirect to another page
      toast.success('Room booked successfully!');
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        // Display the error message from the backend
        toast.error(error.response.data.message);
      } else {
        toast.error('An error occurred during the reservation process');
      }
    }
  };

  return (
    <div>
      <h2>Reservation</h2>
      <form onSubmit={reserveRoom}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Card details</label>
          <CardElement options={{}} />
        </div>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default Reservation;
*/