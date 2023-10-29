import "./Home.css"

export default function Home() {
    return (
        <section>
            <div className="header">
                <h1>Home page</h1>
                <p>Pick your perfect sunglasses for the summer!</p>
                <p className="glassesMessage">Most bougth sunglasses</p>
            </div>
            <div className="container">
                <div className="product">
                    <img src="/images/glass4.png" />
                    <h3>Brand: product</h3>
                    <span>Price: $100</span>
                    <a href="">More info</a>
                </div>
                <div className="product">
                    <img src="/images/glass3.png" />
                    <h3>Brand: product</h3>
                    <span>Price: $100</span>
                    <a href="">More info</a>
                </div>
                <div className="product">
                    <img src="/images/glass3.png" />
                    <h3>Brand: product</h3>
                    <span>Price: $100</span>
                    <a href="">More info</a>
                </div>
            </div>
        </section >
    );
}