document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
    <style>
        footer {
            background: rgba(11, 37, 48, 0.363);
            background: linear-gradient(90deg, rgba(11, 37, 48, 0.804) 0%, rgba(31, 95, 91, 0.751) 50%, rgba(73, 178, 101, 1) 100%);
            color: #fff;
            padding: 20px 0;
            width: 100%;
            box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            border-radius: 12px;
            position: relative;
            bottom: 0;
        }

        .footer-bottom {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .footer-right {
            text-align: center;
        }

        .footer-copyrigth {
            font-size: 0.9em;
            color: #fff;
        }
    </style>
    <footer>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-right">
                    <span class="footer-copyrigth">© 2024 NICOL. All rights reserved.</span>
                </div>
            </div>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
