import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../Context/WishListContext';
import styles from './Navbar.module.css'; 

const Navbar = () => {
    const { wishlist } = useContext(WishlistContext);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">🎥 MovieApp</Link>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/wishlist">
                        Wishlist 
                        <span className={styles.badge}>
                            {wishlist.length}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
