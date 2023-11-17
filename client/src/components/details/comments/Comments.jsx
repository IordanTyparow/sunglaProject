import "./Comments.css";

export default function Comments() {
    return (
        <div className="comments-section">
            <h2>Comments</h2>

            <div className="comment">
                <h4>Email: dani --</h4>
                <p>Some Text.</p>
            </div>

            <form>
                <label htmlFor="description">Comment here: </label>
                <input type="text" id="description" />
                <button type="submit">Comment</button>
            </form>
        </div>
    );
}