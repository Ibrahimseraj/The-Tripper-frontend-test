import React, { useEffect, useState } from 'react';
//import React, { useEffect, useRef, useState } from "react";
import './hotels.css';
import useFetch from '../../Components/useFetch';
//import { BiGlobe } from  'react-icons/bi'
//import { BsPerson } from 'react-icons/bs'
//import { FaHotel, FaTaxi } from 'react-icons/fa'
//import { FiHome } from 'react-icons/fi'
//import { RiFlightTakeoffLine } from 'react-icons/ri'
import { BiGlobe } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaCalendarAlt } from 'react-icons/fa'
import { BiRightArrow } from 'react-icons/bi';
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from 'date-fns'
import { useNavigate, Link, useParams } from 'react-router-dom';
import { renderIcon } from '../../Components/hotelpost';
//import Home from '../../../../hello/src/Routes/Home';
import fire from '../../Astronut/fire.jpg';
import { PulseLoader } from 'react-spinners';


/*
function Hotels() {
  const { city } = useParams();
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });
  const [filterName, setFilterName] = useState('');
  const [filterPriceMin, setFilterPriceMin] = useState('');
  const [filterPriceMax, setFilterPriceMax] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
      };
    });
  };

  const { data, loading, error } = useFetch(`http://localhost:5050/hotel/${city}`);


  const handleSearch = () => {
    navigate(`/hotels`, { state: { destination, date, options } });
  };

  if (loading) {
    return (
      <div id='loading-the-load'>
        <img src={fire} alt="fire" className='dolo'/>
        <PulseLoader color="#36d7b7" loading={loading} size={20} />
      </div>
    );
  }

  /*
  const filteredData = data.filter(hotels => {
    const nameMatch = hotels.hotelName.includes(filterName);
    const priceMatch =
      (!filterPriceMin || hotels.cheapestPrice >= filterPriceMin) &&
      (!filterPriceMax || hotels.cheapestPrice <= filterPriceMax);
    return nameMatch && priceMatch;
  });
  */
  /*
  const filteredData = data.filter(hotel => {
    const nameMatch = hotel.hotelName.includes(filterName);
    const priceMatch =
      (!filterPriceMin || hotel.cheapestPrice >= filterPriceMin) &&
      (!filterPriceMax || hotel.cheapestPrice <= filterPriceMax);
    return nameMatch && priceMatch;
  });

  const handleAmenityFilter = (amenity) => {
    setSelectedAmenities((prevAmenities) => {
      if (prevAmenities.includes(amenity)) {
        // Remove the amenity if it's already selected
        return prevAmenities.filter((item) => item !== amenity);
      } else {
        // Add the amenity if it's not selected
        return [...prevAmenities, amenity];
      }
    });
  };

  const filteredHotelsByAmenities = selectedAmenities.length
    ? filteredData.filter((hotel) =>
        hotel.popularAmenities.some(
          (amenity) =>
            selectedAmenities.includes(amenity.name) && amenity.available === true
        )
      )
    : filteredData;



  return (
    <div>
<div id='toookkk'>
{/*arr*//*}
{filteredData.map(hotels => (
          <div id='container222' key={hotels._id}>
          <Link to={`/hotel/${hotels._id}`}>
           <div className='hotel-con'>
             <div className='image-containers'>
               {hotels.images && hotels.images.length > 0 && (
                 <img src={hotels.images[0].url} alt='' className='hotel-image' />
               )}
             </div>
             <div className='hotel-info'>
               <p id='hotel-name'>{hotels.hotelName}</p>
               <p className='country-city'>Thailand, {hotels.city}</p>
               <p className='status'><span>{hotels.refundable ? "Refundable" : "Non Refundable"}</span></p>
               {/*<p className='description'>{hotels.popularAmenities}</p>*//*}
               <div className='popularAmenities-templete-container'>
               <div className='templete-popularAmenities-one'>
                 {hotels.popularAmenities
                   .filter((amenity) => amenity.available === true)
                   .slice(0, 2) 
                     .map((amenity, index) => (
                       <div key={index} className='templete-amenity-one'>
                         {renderIcon(amenity.icon)}
                         <p className='templete-amenity-name-one'>{amenity.name}</p>
                       </div>
                 ))}
               </div>
               <div className='templete-popularAmenities-two'>
                 {hotels.popularAmenities
                   .filter((amenity) => amenity.available === true)
                   .slice(2, 4) 
                     .map((amenity, index) => (
                       <div key={index} className='templete-amenity-two'>
                         {renderIcon(amenity.icon)}
                         <p className='templete-amenity-name-two'>{amenity.name}</p>
                       </div>                                                
                 ))}
               </div>
               </div>
             </div>
             <div className='hotel-price'>
               <p>{hotels.cheapestPrice} SAR</p>
               <button className='green'>see avalibilty < BiRightArrow /></button>
             </div>
           </div>
          </Link>
         </div>
        ))}
</div>
<div id="amenities-buttons">
        {data &&
          data.length > 0 &&
          data[0].popularAmenities.map((amenity) => (
            <label key={amenity.name} className="amenity-label">
              <input
                type="checkbox"
                className="amenity-checkbox"
                checked={selectedAmenities.includes(amenity.name)}
                onChange={() => handleAmenityFilter(amenity.name)}
              />
              {amenity.name}
            </label>
          ))}
      </div>

<div id='templete-price-limit'>
<label>
    Filter by Name:
    <input
      type="text"
      value={filterName}
      onChange={e => setFilterName(e.target.value)}
    />
  </label>
</div>
<div>
  <label>
    Filter by Price Range:
    <input
      type="number"
      placeholder="Min"
      value={filterPriceMin}
      onChange={e => setFilterPriceMin(e.target.value)}
    />
    <input
      type="number"
      placeholder="Max"
      value={filterPriceMax}
      onChange={e => setFilterPriceMax(e.target.value)}
    />
  </label>
      </div>
    </div>
  )
}

export default Hotels;
*/

function Hotels() {
  const { city } = useParams();
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });
  const [filterName, setFilterName] = useState('');
  const [filterPriceMin, setFilterPriceMin] = useState('');
  const [filterPriceMax, setFilterPriceMax] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
      };
    });
  };

  const { data, loading, error } = useFetch(`http://localhost:5050/hotel/city/${city}`);

  const handleSearch = () => {
    navigate(`/hotels`, { state: { destination, date, options } });
  };

  if (loading) {
    return (
      <div id='loading-the-load'>
        <img src={fire} alt="fire" className='dolo'/>
        <PulseLoader color="#36d7b7" loading={loading} size={20} />
      </div>
    );
  }
  /*

  const filteredData = data.filter(hotel => {
    const nameMatch = hotel.hotelName.includes(filterName);
    const priceMatch =
      (!filterPriceMin || hotel.cheapestPrice >= filterPriceMin) &&
      (!filterPriceMax || hotel.cheapestPrice <= filterPriceMax);
    return nameMatch && priceMatch;
  });

  /*
  const handleAmenityFilter = (amenity) => {
    setSelectedAmenities((prevAmenities) => {
      if (prevAmenities.includes(amenity)) {
        // Remove the amenity if it's already selected
        return prevAmenities.filter((item) => item !== amenity);
      } else {
        // Add the amenity if it's not selected
        return [...prevAmenities, amenity];
      }
    });
  };
  */

  /*
  const filteredHotelsByAmenities = selectedAmenities.length
    ? filteredData.filter((hotel) =>
        hotel.popularAmenities.some(
          (amenity) =>
            selectedAmenities.includes(amenity.name) && amenity.available === true
        )
      )
    : filteredData;
    

    const handleAmenityFilter = (amenity) => {
      setSelectedAmenities((prevAmenities) => {
        if (prevAmenities.includes(amenity)) {
          // Remove the amenity if it's already selected
          return prevAmenities.filter((item) => item !== amenity);
        } else {
          // Add the amenity if it's not selected
          return [...prevAmenities, amenity];
        }
      });
    };

    const filterHotels = () => {
      return hotelsData.filter((hotel) => {
        const amenities = hotel.PopularAmenities.map(
          (amenity) => amenity.name
        );
        return selectedAmenities.every((amenity) =>
          amenities.includes(amenity)
        );
      });
    };
    */
    const filteredData = data.filter(hotel => {
      const nameMatch = hotel.hotelName.includes(filterName);
      const priceMatch =
        (!filterPriceMin || hotel.cheapestPrice >= filterPriceMin) &&
        (!filterPriceMax || hotel.cheapestPrice <= filterPriceMax);
      return nameMatch && priceMatch;
    });
  
    const handleAmenityFilter = (amenity) => {
      setSelectedAmenities((prevAmenities) => {
        if (prevAmenities.includes(amenity)) {
          // Remove the amenity if it's already selected
          return prevAmenities.filter((item) => item !== amenity);
        } else {
          // Add the amenity if it's not selected
          return [...prevAmenities, amenity];
        }
      });
    };
  
    /*
    const filteredHotelsByAmenities = selectedAmenities.length
      ? filteredData.filter((hotel) =>
          hotel.popularAmenities.some(
            (amenity) =>
              selectedAmenities.includes(amenity.name) && amenity.available === true
          )
        )
      : filteredData;
    */

      const filteredHotelsByAmenities = selectedAmenities.length
  ? filteredData.filter((hotel) =>
      selectedAmenities.every((amenity) =>
        hotel.popularAmenities.some(
          (hotelAmenity) =>
            hotelAmenity.name === amenity && hotelAmenity.available === true
        )
      )
    )
  : filteredData;
  

  return (
    <div className='mello'>
              <div className='camp'>
        <div className='country'>
        <a href="/"><h2>the tripper</h2></a>
      </div>
      <div className='real'>
        <button className='target'><BiGlobe /></button>
        <button className='target'><BsPerson /></button>
  </div>
  <div className='street'>
      <div className='internet'>
        <ul className='boom'>
          <li><Link to="/">hotels</Link></li>
          <li><Link to="/">flights</Link></li>
          <li><Link to="/activites">activites</Link></li>
          <li><Link to="/taxi">taxi</Link></li>
      </ul>
    </div>
     </div>
     <div className='customSearch'>
<div className='customSearchItem'>
  <AiOutlineSearch className='customIcon' />
  <input
    type='text'
    placeholder='going to'
    className='customSearchInput'
    onChange={(e) => setDestination(e.target.value)}
  />
</div>
<div className='customSearchItem'>
  <FaCalendarAlt
    minDate={new Date()}
    maxDate={new Date('26/5/2023')}
    className='customIcon'
  />
      <span
    onClick={() => setOpenDate(!openDate)}
    className='customSearchText'
  >{`${format(
    date[0].startDate,
    'dd/MM/yyyy'
  )} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
  {openDate && (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setDate([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={date}
      className='days'
      minDate={new Date()}
      maxDate={new Date('12/31/2023')}
    />
  )}
</div>
<div className='customSearchItem'>
  <BsPerson className='customIcon' />
  <span
    onClick={() => setOpenOptions(!openOptions)}
    className='customSearchText'
  >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
  {openOptions && (
    <div className='risks'>
      <div className='risksItem'>
        <span className='riskText'>adult</span>
        <div className='riskCounter'>
          <button
            disabled={options.adult <= 1}
            className='riskCounterButton'
            onClick={() => handleOption('adult', 'd')}
          >
            -
          </button>
          <span className='riskCounterButton'>{options.adult}</span>
          <button
            className='riskCounterButton'
            onClick={() => handleOption('adult', 'i')}
          >
            +
          </button>
        </div>
      </div>
      <div className='risksItem'>
        <span className='riskText'>children</span>
        <div className='riskCounter'>
          <button
            disabled={options.children <= 0}
            className='riskCounterButton'
            onClick={() => handleOption('children', 'd')}
          >
            -
          </button>
          <span className='riskCounterButton'>
            {options.children}
          </span>
          <button
            className='riskCounterButton'
            onClick={() => handleOption('children', 'i')}
          >
            +
          </button>
        </div>
      </div>
      <div className='risksItem'>
        <span className='riskText'>room</span>
        <div className='riskCounter'>
          <button
            disabled={options.room <= 1}
            className='riskCounterButton'
            onClick={() => handleOption('room', 'd')}
          >
            -
          </button>
          <span className='riskCounterButton'>{options.room}</span>
          <button
            className='riskCounterButton'
           onClick={() => handleOption('room', 'i')}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )}
</div>
<div className='customSearchItem'>
  <button className='customBtn' onClick={handleSearch}>
    search
  </button>
</div>
</div>
</div>
      <div className='alllllll'>
      <div className='oooooooooooo-ppppp'>
      <div id="amenities-buttons">
      <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("Free Wi-Fi")}
      onChange={() => handleAmenityFilter("Free Wi-Fi")}
    />
    Free Wi-Fi
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("House Keeping")}
      onChange={() => handleAmenityFilter("House Keeping")}
    />
    House Keeping
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("Free Breakfast")}
      onChange={() => handleAmenityFilter("Free Breakfast")}
    />
    Free Breakfast
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("Breakfast")}
      onChange={() => handleAmenityFilter("Breakfast")}
    />
    Breakfast
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("Free parking")}
      onChange={() => handleAmenityFilter("Free parking")}
    />
    Free parking
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("pool")}
      onChange={() => handleAmenityFilter("pool")}
    />
    pool
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("Outdoor pool")}
      onChange={() => handleAmenityFilter("Outdoor pool")}
    />
     Outdoor pool
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("Indoor pool")}
      onChange={() => handleAmenityFilter("Indoor pool")}
    />
     Indoor pool
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("Fitness")}
      onChange={() => handleAmenityFilter("Fitness")}
    />
     Fitness
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("Hot tub")}
      onChange={() => handleAmenityFilter("Hot tub")}
    />
     Hot tub
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("Spa")}
      onChange={() => handleAmenityFilter("Spa")}
    />
     Spa
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("Restaurant")}
      onChange={() => handleAmenityFilter("Restaurant")}
    />
     Restaurant
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("full-service laundry")}
      onChange={() => handleAmenityFilter("full-service laundry")}
    />
     full-service laundry
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("Pet-friendly")}
      onChange={() => handleAmenityFilter("Pet-friendly")}
    />
     Pet-friendly
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("Airport shuttle")}
      onChange={() => handleAmenityFilter("Airport shuttle")}
    />
     Airport shuttle
  </label>
  <label>
    <input
      type='checkbox'
      className='PopularAmenities-post-input'
      checked={selectedAmenities.includes("City view")}
      onChange={() => handleAmenityFilter("City view")}
    />
     City view
  </label>
      </div>
<div id='templete-price-limit'>
<label>
    Filter by Name:
    <input
      type="text"
      value={filterName}
      onChange={e => setFilterName(e.target.value)}
    />
  </label>
</div>
<div>
  <label>
    Filter by Price Range:
    <input
      type="number"
      placeholder="Min"
      value={filterPriceMin}
      onChange={e => setFilterPriceMin(e.target.value)}
    />
    <input
      type="number"
      placeholder="Max"
      value={filterPriceMax}
      onChange={e => setFilterPriceMax(e.target.value)}
    />
  </label>
      </div>
      </div>
      <div id='toookkk'>
        {filteredHotelsByAmenities.map((hotel) => (
          <div id='container222' key={hotel._id}>
            <Link to={`/hotel/${hotel._id}`}>
              <div className='hotel-con'>
                <div className='image-containers'>
                  {hotel.images && hotel.images.length > 0 && (
                    <img src={hotel.images[0].url} alt='' className='hotel-image' />
                  )}
                </div>
                <div className='hotel-info'>
                  <p id='hotel-name'>{hotel.hotelName}</p>
                  <p className='country-city'>Thailand, {hotel.city}</p>
                  <p className='status'><span>{hotel.refundable ? "Refundable" : "Non Refundable"}</span></p>
                  <div className='popularAmenities-templete-container'>
                    <div className='templete-popularAmenities-one'>
                      {hotel.popularAmenities
                        .filter((amenity) => amenity.available === true)
                        .slice(0, 2)
                        .map((amenity, index) => (
                          <div key={index} className='templete-amenity-one'>
                            {renderIcon(amenity.icon)}
                            <p className='templete-amenity-name-one'>{amenity.name}</p>
                          </div>
                        ))}
                    </div>
                    <div className='templete-popularAmenities-two'>
                      {hotel.popularAmenities
                        .filter((amenity) => amenity.available === true)
                        .slice(2, 4)
                        .map((amenity, index) => (
                          <div key={index} className='templete-amenity-two'>
                            {renderIcon(amenity.icon)}
                            <p className='templete-amenity-name-two'>{amenity.name}</p>
                          </div>
                        ))}
                    </div>
                  </div>
              </div>
              <div className='hotel-price'>
                <p>{hotel.cheapestPrice} SAR</p>
                <button className='green'>see avalibilty < BiRightArrow /></button>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Hotels;


/*
  const arr = data.map((hotels) => {
    return (
        <div id='container222' key={hotels._id}>
         <Link to={`/hotel/${hotels._id}`}>
          <div className='hotel-con'>
            <div className='image-containers'>
              {hotels.images && hotels.images.length > 0 && (
                <img src={hotels.images[0].url} alt='' className='hotel-image' />
              )}
            </div>
            <div className='hotel-info'>
              <p id='hotel-name'>{hotels.hotelName}</p>
              <p className='country-city'>Thailand, {hotels.city}</p>
              <p className='status'><span>{hotels.refundable ? "Refundable" : "Non Refundable"}</span></p>
              {/*<p className='description'>{hotels.popularAmenities}</p>*//*}
              <div className='popularAmenities-templete-container'>
              <div className='templete-popularAmenities-one'>
                {hotels.popularAmenities
                  .filter((amenity) => amenity.available === true)
                  .slice(0, 2) 
                    .map((amenity, index) => (
                      <div key={index} className='templete-amenity-one'>
                        {renderIcon(amenity.icon)}
                        <p className='templete-amenity-name-one'>{amenity.name}</p>
                      </div>
                ))}
              </div>
              <div className='templete-popularAmenities-two'>
                {hotels.popularAmenities
                  .filter((amenity) => amenity.available === true)
                  .slice(2, 4) 
                    .map((amenity, index) => (
                      <div key={index} className='templete-amenity-two'>
                        {renderIcon(amenity.icon)}
                        <p className='templete-amenity-name-two'>{amenity.name}</p>
                      </div>                                                
                ))}
              </div>
              </div>
            </div>
            <div className='hotel-price'>
              <p>{hotels.cheapestPrice} SAR</p>
              <button className='green'>see avalibilty < BiRightArrow /></button>
            </div>
          </div>
         </Link>
        </div>
    )
  })
  */

  
  /*
  if (sortOrder === 'asc') {
    filteredData.sort((a, b) => {
      const priceA = a.props.children[1].props.children[2].props.children[0];
      const priceB = b.props.children[1].props.children[2].props.children[0];
      return priceA - priceB;
    });
  } else if (sortOrder === 'desc') {
    filteredData.sort((a, b) => {
      const priceA = a.props.children[1].props.children[2].props.children[0];
      const priceB = b.props.children[1].props.children[2].props.children[0];
      return priceB - priceA;
    });
  }
  */


   /*
  const handleSortAsc = () => {
    setSortOrder('asc');
  };
  
  const handleSortDesc = () => {
    setSortOrder('desc');
  };
  */


  /*
        <div className='camp'>
        <div className='country'>
        <a href="/"><h2>the tripper</h2></a>
      </div>
      <div className='real'>
        <button className='target'><BiGlobe /></button>
        <button className='target'><BsPerson /></button>
  </div>
  <div className='street'>
      <div className='internet'>
        <ul className='boom'>
          <li><Link to="/">hotels</Link></li>
          <li><Link to="/">flights</Link></li>
          <li><Link to="/activites">activites</Link></li>
          <li><Link to="/taxi">taxi</Link></li>
      </ul>
    </div>
     </div>
     <div className='customSearch'>
<div className='customSearchItem'>
  <AiOutlineSearch className='customIcon' />
  <input
    type='text'
    placeholder='going to'
    className='customSearchInput'
    onChange={(e) => setDestination(e.target.value)}
  />
</div>
<div className='customSearchItem'>
  <FaCalendarAlt
    minDate={new Date()}
    maxDate={new Date('26/5/2023')}
    className='customIcon'
  />
      <span
    onClick={() => setOpenDate(!openDate)}
    className='customSearchText'
  >{`${format(
    date[0].startDate,
    'dd/MM/yyyy'
  )} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
  {openDate && (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setDate([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={date}
      className='days'
      minDate={new Date()}
      maxDate={new Date('12/31/2023')}
    />
  )}
</div>
<div className='customSearchItem'>
  <BsPerson className='customIcon' />
  <span
    onClick={() => setOpenOptions(!openOptions)}
    className='customSearchText'
  >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
  {openOptions && (
    <div className='risks'>
      <div className='risksItem'>
        <span className='riskText'>adult</span>
        <div className='riskCounter'>
          <button
            disabled={options.adult <= 1}
            className='riskCounterButton'
            onClick={() => handleOption('adult', 'd')}
          >
            -
          </button>
          <span className='riskCounterButton'>{options.adult}</span>
          <button
            className='riskCounterButton'
            onClick={() => handleOption('adult', 'i')}
          >
            +
          </button>
        </div>
      </div>
      <div className='risksItem'>
        <span className='riskText'>children</span>
        <div className='riskCounter'>
          <button
            disabled={options.children <= 0}
            className='riskCounterButton'
            onClick={() => handleOption('children', 'd')}
          >
            -
          </button>
          <span className='riskCounterButton'>
            {options.children}
          </span>
          <button
            className='riskCounterButton'
            onClick={() => handleOption('children', 'i')}
          >
            +
          </button>
        </div>
      </div>
      <div className='risksItem'>
        <span className='riskText'>room</span>
        <div className='riskCounter'>
          <button
            disabled={options.room <= 1}
            className='riskCounterButton'
            onClick={() => handleOption('room', 'd')}
          >
            -
          </button>
          <span className='riskCounterButton'>{options.room}</span>
          <button
            className='riskCounterButton'
           onClick={() => handleOption('room', 'i')}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )}
</div>
<div className='customSearchItem'>
  <button className='customBtn' onClick={handleSearch}>
    search
  </button>
</div>
</div>
</div>
*/