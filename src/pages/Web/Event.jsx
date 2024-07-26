import { useState } from 'react';
import SearchEvent from './SearchEvent';

const eventsList = [
  { id: 1, name: 'Music Concert', type: 'Concert', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkssojWi8Bz5N07mF_7bDgacKV8kSfGPybFA&s' },
  { id: 2, name: 'Art Exhibition', type: 'Exhibition',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nSFVvQbtipxaO4YrJjfFouwCLutItd7WmQ&s' },
  { id: 3, name: 'Tech Conference', type: 'Conference', 
    image: 'https://ik.imagekit.io/lede6qmhu/Event/conference.jpg?updatedAt=1721972740579' },
  { id: 4, name: 'Food Festival', type: 'Festival', 
    image: 'https://ik.imagekit.io/lede6qmhu/Event/festival.jpg?updatedAt=1721974479112' },
    {
      id:5,name:'Marriage Events',type:'Marriage Events',
      image:'https://ik.imagekit.io/lede6qmhu/Event/marriage1.jpg?updatedAt=1721987964817'
    },
    {
      id:6,name:'Parties',type:'Parties',
      image:'https://ik.imagekit.io/lede6qmhu/Event/party.jpg?updatedAt=1721990729909'
    },
    {
      id:7,name:'Game Events',type:'Game Events',
      image:'https://ik.imagekit.io/lede6qmhu/Event/game.png?updatedAt=1721991468371'
    },
    {
      id:8,name:'Disco',type:'Disco',
      image:'https://ik.imagekit.io/lede6qmhu/Event/disco.jfif?updatedAt=1721991673179'
    }
];

const Event = () => {
  const [search, setSearch] = useState('');

  const filteredEvents = eventsList.filter(event =>
    event.type.toLowerCase().includes(search.toLowerCase()) ||
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="event-app container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">CHOOSE EVENT TO BOOK</h1>
      <SearchEvent search={search} setSearch={setSearch} />
      
      <div className="event-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card bg-white rounded-lg shadow-lg p-4">
            <img src={event.image} alt={event.name} className="event-image w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-4">{event.name}</h2>
            <h3 className="text-lg text-gray-600">{event.type}</h3>
            <button className="book-now-button mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
