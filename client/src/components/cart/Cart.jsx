import "./Cart.css";

export default function Cart() {
    return (
        <section class="cart-section">
            <h2>Sunglasses Shopping Cart</h2>

            <div class="cart-items">
                <div class="cart-item">
                    <img src="/images/glass3.png" alt="Sporty Wraparounds" />
                    <div class="item-details">
                        <h3>Sporty Wraparounds</h3>
                        <p>Quantity: 1</p>
                        <p>Price: $34.99</p>
                        <button class="remove-btn">Remove</button>
                    </div>
                </div>
            </div>

            <div class="help-section">
                <p>Need Help? Contact us at <a href="mailto:support@example.com">support@example.com</a> or call <a href="tel:+18001234567">1-800-123-4567</a></p>
            </div>
        </section>
    );
}