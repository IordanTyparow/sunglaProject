import "./Details.css";

export default function Detaitls() {
    return (
        <section className="details-page">
            <h1>Details page</h1>

            <div className="product">
                <img src="/images/glass3.png" alt="photo" />
                <h3>Brand: product</h3>
                <p><strong>Price:</strong > $100</p>
                <p>Description: someThing!</p>
                <div className="buttons">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </section>
    );
}