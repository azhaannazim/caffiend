import { useAuth } from "../context/AuthContext"
import { calculateCoffeeStats, calculateCurrentCaffeineLevel, getTopThreeCoffees, statusLevels } from "../utils"

function StatCard(props){
    const {lg , title , children} = props
    return (
        <div className={'card stat-card ' + (lg ? ' col-span-2' : ' ')}>
            <h4>{title}</h4>
            {children}
        </div>
    )
}

export default function Stats(){
    const {globalData} = useAuth();
    const Data = calculateCoffeeStats(globalData)
    const caffeineLevel = calculateCurrentCaffeineLevel(globalData)
    const warningLevel = (caffeineLevel <= statusLevels['low'].maxLevel) ? 'low'
      : (caffeineLevel <= statusLevels['moderate'].maxLevel) ? 'moderate' : 'high'

    return(
        <>
            <div className="section-header">
                <i className="fa-solid fa-chart-simple"></i>
                <h2>Stats</h2>
            </div>
            <div className="stats-grid">
                <StatCard lg title='Active Caffeine Level'>
                    <div className="status">
                        <p><span className="stat-text">{caffeineLevel}mg</span></p>
                        <h5 style={{color : statusLevels[warningLevel].color ,
                                background: statusLevels[warningLevel].background}}>
                            {warningLevel}
                        </h5>
                        <p>{statusLevels[warningLevel].description}</p>
                    </div>
                </StatCard>
                <StatCard title='Daily Caffeine'>
                    <p><span className="stat-text">{Data.daily_caffeine}</span>mg</p>
                </StatCard>
                <StatCard title='Avg no. of Coffees'>
                    <p><span className="stat-text">{Data.average_coffees}</span>cups</p>
                </StatCard>
                <StatCard title='Daily Cost ($)'>
                    <p>$ <span className="stat-text">{Data.daily_cost}</span>mg</p>
                </StatCard>
                <StatCard title='Total Cost ($)'>
                    <p>$ <span className="stat-text">{Data.total_cost}</span>mg</p>
                </StatCard>

                <table className="stat-table">
                    <thead>
                        <tr>
                            <th>Coffee Name</th>
                            <th>Number of purchases</th>
                            <th>Percentage of total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getTopThreeCoffees(globalData).map(
                            (coffee , coffeeIndex) => {
                                return(
                                    <tr key={coffeeIndex}>
                                        <td>{coffee.coffeeName}</td>
                                        <td>{coffee.count}</td>
                                        <td>{coffee.percentage}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </>
    )
}