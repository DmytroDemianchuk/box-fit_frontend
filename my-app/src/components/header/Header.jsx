import React, { useState } from 'react';
import logo from '../../images/logo.svg'; // Ensure you have the correct path
import search from '../../images/search.svg';
import profil from '../../images/profil.svg';
import kosik from '../../images/kosik.svg';
import SideNav from './SideNav'; // Import the new SideNav component
import './Header.css';

const Header = () => {
    const [isSideNavOpen, setSideNavOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleSideNav = () => {
        setSideNavOpen(!isSideNavOpen);
    };

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    return (
        <header className='header'>
            <div className='header-logo'>
                <a href='/'>
                    <img src={logo} className="logo" alt="Logo" />
                </a>
            </div>
            <nav className='header-nav'>
                <div className='dropdown'>
                    <button
                        className="nav-link"
                        onClick={() => toggleDropdown('doplnky')}
                    >
                        DOPLŇKY STRAVY
                    </button>
                    <div className={`dropdown-menu ${openDropdown === 'doplnky' ? 'show' : ''}`}>
                        <a className='dropdown-item' href='kase-dezerty'>Kaše a dezerty</a>
                        <a className='dropdown-item' href='byliny-adaptogeny-extrakty'>Byliny, adaptogeny a extrakty</a>
                        <a className='dropdown-item' href='vitaminy-mineraly'>Vitamíny a minerály</a>
                        <a className='dropdown-item' href='spalovace'>Spalovače</a>
                        <a className='dropdown-item' href='ostatni'>Ostatní</a>
                        <a className='dropdown-item' href='traveni-probiotika'>Trávení, probiotika</a>
                        <a className='dropdown-item' href='sacharidy'>Sacharidy</a>
                        <a className='dropdown-item' href='kreatiny'>Kreatiny</a>
                        <a className='dropdown-item' href='vyhodne-balicky'>Výhodné balíčky</a>
                        <a className='dropdown-item' href='masla'>Másla</a>
                        <a className='dropdown-item' href='proteiny'>Proteiny</a>
                        <a className='dropdown-item' href='aminokyseliny-regenerace'>Aminokyseliny a regenerace</a>
                    </div>
                </div>

                <div className='dropdown'>
                    <button
                        className="nav-link"
                        onClick={() => toggleDropdown('boje')}
                    >
                        BOJOVÉ SPORTY
                    </button>
                    <div className={`dropdown-menu ${openDropdown === 'boje' ? 'show' : ''}`}>
                        <a className='dropdown-item' href='box'>Box</a>
                        <a className='dropdown-item' href='mma'>MMA</a>
                        <a className='dropdown-item' href='judo'>Judo</a>
                        <a className='dropdown-item' href='kickboxing'>Kickboxing</a>
                    </div>
                </div>

                <div className='dropdown'>
                    <button
                        className="nav-link"
                        onClick={() => toggleDropdown('fitness')}
                    >
                        FITNESS VYBAVENÍ
                    </button>
                    <div className={`dropdown-menu ${openDropdown === 'fitness' ? 'show' : ''}`}>
                        <a className='dropdown-item' href='posilovaci-stroje'>Posilovací stroje</a>
                        <a className='dropdown-item' href='cinky'>Činky</a>
                        <a className='dropdown-item' href='skakacky'>Švihadla</a>
                        <a className='dropdown-item' href='podložky'>Podložky</a>
                    </div>
                </div>
            </nav>

            <div className='header-actions'>
                <div className='dropdown'>
                    <button
                        id="navbarDropdownSearch"
                        className="header-action-btn"
                        onClick={() => toggleDropdown('search')}
                    >
                        <img src={search} alt="Search" />
                    </button>
                    <div className={`dropdown-menu search-menu ${openDropdown === 'search' ? 'show' : ''}`}>
                        <input id="search" type='search' className='form-control' placeholder="Hledat" />
                    </div>
                </div>

                <div className='dropdown'>
                    <button
                        id="navbarDropdownProfil"
                        className="header-action-btn"
                        onClick={() => toggleDropdown('profil')}
                    >
                        <img src={profil} alt="Profil" />
                    </button>
                    <div className={`dropdown-menu profil-menu ${openDropdown === 'profil' ? 'show' : ''}`}>
                        <div className='p-4'>
                            <div className='text-nowrap'>Nejsi přihlášen(a)</div>
                            <div className='mt-3'>
                                <a className="login-btn" href="#login" role="button">PŘIHLÁSIT SE</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='dropdown'>
                    <a href='Kosik.aspx' className='cart'>
                        <img src={kosik} alt="Kosik" className='cart-icon' />
                        <span className='cart-badge'>
                            <span id="lblPocetKosik">0</span>
                        </span>
                    </a>
                </div>

                <button className='openbtn' onClick={toggleSideNav}>
                    ☰
                </button>
            </div>

            <SideNav 
                isSideNavOpen={isSideNavOpen}
                toggleSideNav={toggleSideNav}
                openDropdown={openDropdown}
                toggleDropdown={toggleDropdown}
            />
        </header>
    );
};

export default Header;
