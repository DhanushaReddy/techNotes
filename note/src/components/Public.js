import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Trident Repairs</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Bengaluru, Trident Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Trident<br />
                    Bomanahalli,bengaluru<br />
                   
                    <a href="tel:+8999929294">(899) 992-294</a>
                </address>
                <br />
                <p>Owner: Sanjay</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public