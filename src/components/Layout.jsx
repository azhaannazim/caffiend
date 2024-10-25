import { useState } from "react";
import Authentication from "./Authentication";
import Modal from "./Modal";
import { useAuth } from "../context/AuthContext";

export default function Layout(props) {
    const [showModal, setShowModal] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
        document.body.classList.toggle("dark-mode", !darkMode);
    };

    const { children } = props;
    const { globalUser, logout } = useAuth();

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffee Insatiates</p>
            </div>
            <div className="auth-buttons">
                {globalUser ? (
                    <button onClick={logout}>
                        <p>Logout</p>
                    </button>
                ) : (
                    <button onClick={() => { setShowModal(true); }}>
                        <p>Sign up free</p>
                        <i className="fa-solid fa-mug-hot"></i>
                    </button>
                )}
                <label className="toggle-switch">
                    <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                    <span className="slider"></span>
                </label>
            </div>
        </header>
    );

    const footer = (
        <footer>
            <p>
                <span className="text-gradient">Caffiend </span>
                was made by <a target="_blank" href="https://azhaannazim.github.io/">Azhaan Nazim </a>
                with the help of <a target="_blank" href="https://www.fantacss.smoljames.com/">fanta.CSS </a>
                design library.<br />
                Created by <a target="_blank" href="https://github.com/azhaannazim">Azhaan Nazim</a>
            </p>
        </footer>
    );

    function closeModal() {
        setShowModal(false);
    }

    return (
        <>
            {showModal && (
                <Modal closeModal={closeModal}>
                    <Authentication closeModal={closeModal} />
                </Modal>
            )}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    );
}
