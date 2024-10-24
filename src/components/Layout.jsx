export default function Layout(props){
    const {children} = props;
    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>for coffee instatiates</p>
            </div>
            <button>
                <p>sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>

        </header>
    )
    const footer = (
        <footer>
            <p>
                <span className="text-gradient">Caffiend </span> 
                 was made by <a target="_blank" href="https://azhaannazim.github.io/">Azhaan Nazim </a>
                with the help of <a target="_blank" href="https://www.fantacss.smoljames.com/">fanta.CSS </a> 
                 design library.
            </p>
        </footer>
    )

    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}