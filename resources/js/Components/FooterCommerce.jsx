import React from "react";

const FooterCommerce = () => {
    return (
        <React.Fragment>
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Naf-Dreams</p>
                </aside>
            </footer>
        </React.Fragment>
    )
}

export default FooterCommerce;