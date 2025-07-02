import styles from './header.module.css'

function Header() {
  return (
    <div>
        <header className='container'>
          <h2 className={styles.logo}>TechShop</h2>
          <nav>
           <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
           </ul>
          </nav>
          <button className={styles.shop_btn}><i class="fa-solid fa-cart-shopping"></i></button>
        </header>
    </div>
  )
}

export default Header