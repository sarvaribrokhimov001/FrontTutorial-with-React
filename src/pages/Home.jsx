import { useState } from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");

  const checkMatch = (text) => {
    if (search === "") return false;
    return text.toLowerCase().includes(search.toLowerCase());
  };

  return (
    <div>
      <header>
        <h1 className='home__title'> Welcome to our Website </h1>
        <input className='home__input' type="search" placeholder='Write your choosing section' value={search}
          onChange={(e) => setSearch(e.target.value)} />

        <div className='home__description__container'>
          <h3 className='home__description__title'> Assalomu alaykum hurmatli foydalanuvchilar 😇 </h3>
          <p className='home__description'> Ushbu loyiha FrontEnd dasturlashni o‘rganayotganlar uchun maxsus yaratilgan. </p>

          {search !== "" && (
            <div className='home__sections'>
              <h4 className='home__sections__title'> Sections </h4>

              <div className='home__section'>

                {checkMatch("LOGIN") && (
                  <li><Link className='home__section__link' to="/app"> LOGIN </Link></li>
                )}

                {checkMatch("HOME") && (
                  <li><Link className='home__section__link' to="/home"> HOME </Link></li>
                )}

                {checkMatch("HTML") && (
                  <li><Link className='home__section__link' to="/html"> HTML </Link></li>
                )}

                {checkMatch("CSS") && (
                  <li><Link className='home__section__link' to="/css"> CSS </Link></li>
                )}

                {checkMatch("LINKS") && (
                  <li><Link className='home__section__link' to="/links"> LINKS </Link></li>
                )}

                {checkMatch("SHORTS") && (
                  <li><Link className='home__section__link' to="/shorts"> SHORTS </Link></li>
                )}

              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}
export default Home;