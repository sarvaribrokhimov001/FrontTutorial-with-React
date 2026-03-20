import { useState } from 'react';
import '../styles/Shorts.css';

const Shorts = () => {
  const [search, setSearch] = useState("");

  const shortsList = [
    { abbreviation: "DOM", fullForm: "Document Object Model" },
    { abbreviation: "API", fullForm: "Application Programming Interface" },
    { abbreviation: "JSON", fullForm: "JavaScript Object Notation" },
    { abbreviation: "AJAX", fullForm: "Asynchronous JavaScript and XML" },
    { abbreviation: "HTTP", fullForm: "Hypertext Transfer Protocol" },
    { abbreviation: "HTTPS", fullForm: "Hypertext Transfer Protocol Secure" },
    { abbreviation: "CSS", fullForm: "Cascading Style Sheets" },
    { abbreviation: "JS", fullForm: "JavaScript" },
    { abbreviation: "TS", fullForm: "TypeScript" },
    { abbreviation: "SEO", fullForm: "Search Engine Optimization" },
    { abbreviation: "UI", fullForm: "User Interface" },
    { abbreviation: "UX", fullForm: "User Experience" },
    { abbreviation: "JSONP", fullForm: "JSON with Padding" },
    { abbreviation: "SPA", fullForm: "Single Page Application" },
    { abbreviation: "PWA", fullForm: "Progressive Web App" },
    { abbreviation: "REST", fullForm: "Representational State Transfer" },
    { abbreviation: "CRUD", fullForm: "Create, Read, Update, Delete" },
    { abbreviation: "SVG", fullForm: "Scalable Vector Graphics" },
    { abbreviation: "DOM API", fullForm: "Document Object Model API" },
    { abbreviation: "HTTP Header", fullForm: "Information sent between client and server in HTTP requests" },
  ];

  const filteredShorts = shortsList.filter(item =>
    item.abbreviation.toLowerCase().includes(search.toLowerCase()) ||
    item.fullForm.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className='Shorts__title HTML__title'> Frontend Shortcuts & Terms </h1>
      <input className='Shorts__input HTML__input' type="search" placeholder='Search abbreviation or full form' value={search}
        onChange={(e) => setSearch(e.target.value)} />

      <div className='All__shorts'>
        <ul>
          {filteredShorts.length > 0 ? (
            filteredShorts.map((item, index) => (
              <li key={index} className='shorts__item'>
                <strong> {item.abbreviation} </strong> - {item.fullForm}
              </li>
            ))) : (
            <li className='shorts__notfound tags__not__founded'> Shortcuts and Terms are not founded ❌ </li>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Shorts;