export default function Hero(){
    return(
        <>
            <h1>Coffee tracking for coffee <abbr title="enthusiast or devotee">Fiends</abbr>!</h1>
            <div className="benefits-list">
                <h3 className="font-bolder">Try <span className="text-gradient">Caffiend</span> and start ...</h3>
                <p>Track your blood caffine levels</p>
                <p>Track your coffee consumption and costings</p>
                <p>Types of coffee you consumed</p>
            </div>
            <div className="card info-card">
                <div>
                    <i className="fa-solid fa-circle-info"></i>
                    <h3>Did you know...</h3>
                    <h5>Caffein&apos;s half life is about 5 hours</h5>
                </div>
            </div>
        </>
    )
}