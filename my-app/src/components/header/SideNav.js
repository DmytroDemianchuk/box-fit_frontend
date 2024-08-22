import React from 'react';
import logo from '../../images/logo.svg'; // Ensure you have the correct path
import krizek from '../../images/krizek.svg';
import fcb from '../../images/fcb.svg';
import insta from '../../images/insta.svg';
import './Header.css'; // Create a CSS file for the side menu styles

const SideNav = ({ isSideNavOpen, toggleSideNav, openDropdown, toggleDropdown }) => {
    return (
        <div id="mySidenav" className={`sidenav ${isSideNavOpen ? 'open' : ''}`}>
            <a href="#" className="closebtn" onClick={toggleSideNav}>
                <img src={krizek} alt="Close" />
            </a>
            <div className='sidenav-logo'>
                <a href='/'>
                    <img src={logo} className="logo" alt="Logo" />
                </a>
            </div>
            <div className='sidenav-content'>
                <div className="category-title">KATEGORIE</div>
                <div className="sidenav-links">

                    <div className='sidenav-link'>
                        <a href="doplnky-stravy" className="sidenav-link-text">Dopňky stravy</a>
                        <button
                            className="toggle-button"
                            onClick={() => toggleDropdown('doplnky_submenu')}
                        >
                            {openDropdown === 'doplnky_submenu' ? '-' : '+'}
                        </button>
                    </div>
                    <div className={`submenu ${openDropdown === 'doplnky_submenu' ? 'show' : ''}`}>
                        <a href="kase-dezerty" className="submenu-item">Kaše a dezerty</a>
                        <a href="byliny-adaptogeny-extrakty" className="submenu-item">Byliny, adaptogeny a extrakty</a>
                        <a href="vitaminy-mineraly" className="submenu-item">Vitamíny a minerály</a>
                        <a href="spalovace" className="submenu-item">Spalovače</a>
                        <a href="ostatni" className="submenu-item">Ostatní</a>
                        <a href="traveni-probiotika" className="submenu-item">Trávení, probiotika</a>
                        <a href="sacharidy" className="submenu-item">Sacharidy</a>
                        <a href="kreatiny" className="submenu-item">Kreatiny</a>
                        <a href="vyhodne-balicky" className="submenu-item">Výhodné balíčky</a>
                        <a href="masla" className="submenu-item">Másla</a>
                        <a href="proteiny" className="submenu-item">Proteiny</a>
                        <a href="aminokyseliny-regenerace" className="submenu-item">Aminokyseliny a regenerace</a>
                    </div>

                    {/* Repeat similar blocks if needed */}

                    <div className='text_20_cervena_mont_bold mt-5'>KONTAKT</div>
                    <div className='mt-3 text_16_bila_mont_semi'>Box-Fit Gym v.o.s.</div>
                    <div className='mt-1 text_16_bila_mont_semi'>Svazarmovská 2638/3</div>
                    <div className='mt-1 text_16_bila_mont_semi'>756 61 Rožnov pod Radhoštěm</div>
                    
                    <div className='text_20_cervena_mont_bold mt-5'>PROVOZNÍ DOBA</div>
                    <div className="text_16_bila_mont_semi mt-3">Po - Pá:&nbsp;&nbsp;&nbsp;&nbsp; 07:00 - 12:00</div>
                    <div className="text_16_bila_mont_semi mt-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  14:00 - 20:00</div>
                    <div className="text_16_bila_mont_semi mt-1">So - Ne:&nbsp;&nbsp;&nbsp;&nbsp; 09:00 - 12:00</div>

                    <div className='mt-3'>
                        <a href="https://boxfitgym.inrs.cz/" target="_blank" className="tlacitko_16_cervene">REZERVACE</a>
                    </div>
                    <div className="text_20_cervena_mont_bold mt-5">SOCIÁLNÍ SÍTĚ</div>
                    <div className="mt-3">
                        <img src={fcb} alt="Facebook" />
                        <img src={insta} alt="Instagram" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNav;
