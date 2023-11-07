import "./Edit.css";

export default function Edit() {
    return (
        <section className="edit-page">
            <h1>Edit page</h1>

            <form>
                <label htmlFor="brand">Brand:</label>
                <input type="text" id="brand" placeholder="Brand" />
                <label htmlFor="price">Price:</label>
                <input type="text" id="price" placeholder="Price" />
                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" cols="30" rows="10" placeholder="Description"></textarea>
                <label htmlFor="imageUrl">imageUrl:</label>
                <input type="text" id="imageUrl" placeholder="imageUrl" />
                <input type="submit" value="Edit product" />
            </form>
        </section>
    )
}