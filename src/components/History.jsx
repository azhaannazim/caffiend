import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, getCaffeineAmount, timeSinceConsumption } from "../utils";

export default function History(){
    return(
        <>
            <div className="section-header">
                <i className="fa-solid fa-timeline"></i>
                <h2>History</h2>
            </div>
            <p><i>Hower for more information</i></p>
            <div className="coffee-history">
                {Object.keys(coffeeConsumptionHistory).sort((a,b) => b - a).map
                ((utcTime , coffeeIndex) => {
                    const coffee = coffeeConsumptionHistory[utcTime]
                    const timeSinceConsumed = timeSinceConsumption(utcTime)
                    const originalAmount = getCaffeineAmount(coffee.name)
                    const remainingAmount = calculateCurrentCaffeineLevel({
                        [utcTime]: coffee
                    })
                    const summary = `${coffee.name} | $${coffee.cost} | ${timeSinceConsumed} 
                    | ${remainingAmount}mg / ${originalAmount}mg`

                    return(
                        <div title={summary} key={coffeeIndex} >
                            <i className="fa-solid fa-mug-hot"></i>
                        </div>
                    )
                })}

            </div>
        </>
    )
}