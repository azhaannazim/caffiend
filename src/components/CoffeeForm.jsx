import { useState } from "react"
import { coffeeOptions } from "../utils"
export default function CoffeeForm(){
    const [showCoffeeType , setShowCoffeeType] = useState(false);
    const [selectedCoffee , setSelectedCoffee] = useState(null);
    const [coffeeCost , setCoffeeCost] = useState(0);
    const [hour , setHour] = useState(0);
    const [min , setMin] = useState(0);

    function submitForm(){
        console.log(selectedCoffee ,coffeeCost ,hour ,min);
    }

    return(
        <>
            <div className="section-header">
                <i className="fa-solid fa-pencil"></i>
                <h2>Start Tracking today</h2>
            </div>
            <div className="coffee-grid">
                {coffeeOptions.slice(0,5).map((option , optionIndex) => {
                    return (
                        <button onClick={() => {
                            setSelectedCoffee(option.name)
                            setShowCoffeeType(false)
                        }} className={"button-card " + ((option.name === selectedCoffee) 
                        ? " coffee-button-selected" : " ")} key={optionIndex}>
                            <h4>{option.name}</h4>
                            <p>{option.caffeine} mg</p>
                        </button>
                    )
                })}
                <button onClick={() => {
                    setShowCoffeeType(true)
                    setSelectedCoffee(null)
                }} className={"button-card " + ((setShowCoffeeType) 
                        ? " coffee-button-selected" : " ")}>
                    <h4>other</h4>
                    <p>n/a</p>
                </button>
            </div>
            {showCoffeeType && (
                <select onChange={(event) => {
                    setSelectedCoffee(event.target.value);
                }} id="coffee-list" name="coffee-list">
                    <option value={null}>select type</option>
                    {coffeeOptions.map((option , optionIndex) => {
                        return(
                            <option value={option.name} key={optionIndex}>
                                {option.name} ({option.caffeine}mg)
                            </option>
                        )
                    })}
            </select>)}

            <h4>Add the cost ($)</h4>
            <input className="w-full" type="number" value={coffeeCost} 
            onChange={(e) => {
                setCoffeeCost(e.target.value);
            }} placeholder="4.5" />

            <h4>Time since consumption</h4>
            <div className="time-entry">
                <div>
                    <h6>Hours</h6>
                    <select className="hours-select" onChange={(e) => {
                        setHour(e.target.value)
                    }}>
                        {[0,1,2,3,4,5,6,7,8,9,10,11,12
                        ,13,14,15,16,17,18,19,20,21,22,23].map((hour , hourIndex) => {
                            return(
                                <option key={hourIndex} value={hour}>{hour}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <h6>Minutes</h6>
                    <select className="mins-select" onChange={(e) => {
                        setMin(e.target.value)
                    }}>
                        {[0,5,10,15,30,35,40,45,50,55].map((min , minIndex) => {
                            return(
                                <option key={minIndex} value={min}>{min}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <button onClick={() => {
                submitForm();
            }}><p>Add Entry</p></button>
        </>
    )
}