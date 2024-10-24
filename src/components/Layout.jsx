import { useState } from "react";
import Authentication from "./Authentication";
import Modal from "./Modal";

export default function Layout(props){
    const [showModal , setShowModal] = useState(false)

    const {children} = props;
    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>for coffee instatiates</p>
            </div>
            <button onClick={() => {
                setShowModal(true);
            }}>
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
                design library.<br/>
                Created by <a target="_blank" href="https://github.com/azhaannazim">Azhaan Nazim</a>
            </p>
        </footer>
    )

    return (
        <>
           {showModal && ( 
                <Modal closeModal={() => {
                    setShowModal(false);
                }}>
                    <Authentication />
                </Modal>
            )}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}