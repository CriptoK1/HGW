document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
       .navbar {
            font-family: 'Roboto', sans-serif;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(90deg, #acd4c0, #1f5f39);
            backdrop-filter: blur(10px);
            padding: 10px 20px;
            color: #fff;
            border-radius: 15px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: fixed;
            width: calc(100% - 40px);
            top: 10px;
            left: 20px;
            right: 20px;
            z-index: 1000;
        }
        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .logo img {
            width: 100px;
            height: 50px;
        }
        .logo span {
            font-size: 1.6em;
            font-weight: bold;
        }
        .nav-links {
            display: flex;
            gap: 20px;
        }
        .nav-links a {
            color: #fff;
            text-decoration: none;
            font-size: 1.2em;
            position: relative;
        }
        .nav-links a:hover {
            color: #2c3e50;
        }
        .nav-icons {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .bx {
            color: #fff;
            font-size: 25px;
            }
        .cart { position: relative; }
    .cart-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: #aeadab;
        border-radius: 50%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        text-decoration: none;
        transition: 0.2s;
        font-size: 20px;
        color: #333;
    }
    .cart-btn:hover { transform: scale(1.1); box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3); }
    .cart-count {
        position: absolute;
        top: -5px;
        right: -5px;
        background: #ff4d4d;
        color: #fff;
        font-size: 0.75em;
        font-weight: bold;
        padding: 2px 6px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }            
    </style>
    <header class="navbar">
        <div class="logo">
            <img src="/img/logo (2).png" alt="HGW">
            <span>HGW</span>
        </div>
        <nav class="nav-links">
            <a href="#Inicio">Inicio</a>
            <a href="#Catalogo">Catalogo</a>
            <a href="#Educacion">Educacion</a>
        </nav>
        <div class="nav-icons">
            <a href="#search" class="icon">
                <i class='bx bx-search'></i>
            </a>
            <a href="#profile" class="icon">
                <i class='bx bx-user'></i>
            </a>
            <div class="cart">
                <a href="#cart" class="cart-btn">
                    <i class="bx bx-cart"></i>
                    <span class="cart-count">3</span>
                </a>
            </div>
        </div>
    </header>
    `; document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
