import React, { useState } from 'react';
import '../styles/Links.css';

const Links = () => {
  const [search, setSearch] = useState("");

  const linksList = [
    { name: "Google", url: "https://www.google.com" },
    { name: "DeveloperMozilla", url: "https://developer.mozilla.org" },
    { name: "W3Schools", url: "https://www.w3schools.com" },
    { name: "ReactOfficialDoc", url: "https://react.dev" },
    { name: "FlexboxFroggy", url: "https://flexboxfroggy.com/" },
    { name: "GitHub", url: "https://github.com/" },
    { name: "ChatGPT", url: "https://chatgpt.com/" },
    { name: "Heroicons", url: "https://heroicons.dev/" },
    { name: "RemixIcon", url: "https://remixicon.com/" },
    { name: "CSSGradient", url: "https://cssgradient.io/" },
    { name: "Figma", url: "https://www.figma.com/" },
    { name: "EmmetCheatSheet", url: "https://docs.emmet.io/cheat-sheet/" },
    { name: "Notion", url: "https://aboard-antimony-7dd.notion.site/Standard-Course-8b7210e955a141dbb749fe8f3c887781" },
    { name: "Coddy", url: "https://coddy.tech/journeys/javascript/fundamentals" }

  ];

  const filteredLinks = linksList.filter(link =>
    link.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className='Links__title HTML__title'> Useful Links </h1>
      <input className='Links__input HTML__input' type="search" placeholder='Search the Link Name' value={search} 
      onChange={(e) => setSearch(e.target.value)} />

      <div className='All__links'>
        <ul>
          {filteredLinks.length > 0 ? (
            filteredLinks.map((link, index) => (
              <li key={index}>
                <a className="Links__link" href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))) : (
            <li className='link__notfound tags__not__founded'> Link not founded ❌ </li>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Links;