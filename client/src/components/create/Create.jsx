import "./Create.css";

export default function Create() {
    return (
        <section className="create-page">
            <h1>Create new sunglasses</h1>
            <form>
                <label htmlFor="brand">Brand: </label>
                <input type="text" id="brand" name="brand" placeholder="Some brand" /><br /><br />

                <label htmlFor="price">Price: </label>
                <input type="number" id="price" name="price" step="0.01" placeholder="Price"/><br /><br />

                <label htmlFor="description">Description: </label><br />
                <textarea id="description" name="description" rows="4" placeholder="Description"></textarea><br /><br />

                <label htmlFor="imageUrl">Image URL: </label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="imageUrl"/><br /><br />

                <input type="submit" value="Create Product" />
            </form>
        </section>
    )
}