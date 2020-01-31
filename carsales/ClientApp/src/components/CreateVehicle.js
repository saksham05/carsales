import React, { Component } from 'react'
import axios from 'axios'

export class CreateVehicle extends Component {
    static displayName = CreateVehicle.name;

    constructor() {
        super();
        this.state = {
            vehicleType: '',
            make: '',
            model: '',
            engine: '',
            doors: '',
            wheels: '',
            bodyType: '',
            price: ''
        };
        this.createVehicle = this.createVehicle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }
    createVehicle() {
        axios.post("http://localhost:64347/api/home/", {
            "vehicleType": this.state.vehicleType,
            "make": this.state.make,
            "model": this.state.model,
            "engine": this.state.engine,
            "doors": this.state.doors,
            "wheels": this.state.wheels,
            "bodyType": this.state.bodyType,
            "price": this.state.price
        })
            .then(response => {
                console.log(response);
            }).catch(e => { console.log(e) });
    }

    render() {
        return (
            <form>
                <div>
                    <h1>Create Vehicles</h1>
                    <br />
                    <br />
                    <ul className="create-vehicle">
                        <li>
                            <label>Vehicle Type</label>
                            <select name="vehicleType" value={this.state.vehicleType} onChange={this.handleChange}>
                                <option value="car">Car</option>
                                <option value="boat">Boat</option>
                                <option value="bike">Bike</option>
                                <option value="caravan">Caravan</option>
                            </select>
                        </li>
                        <li>
                            <label>Make</label>
                            <input
                                name="make"
                                value={this.state.make}
                                type="text"
                                onChange={this.handleChange}
                            />
                        </li>
                        <li>
                            <label>Model</label>
                            <input
                                name="model"
                                value={this.state.model}
                                type="text"
                                onChange={this.handleChange}
                            />
                        </li>
                        <li>
                            <label>Engine</label>
                            <input
                                name="engine"
                                value={this.state.engine}
                                type="text"
                                onChange={this.handleChange}
                            />
                        </li>
                        <li>
                            <label>Doors</label>
                            <input
                                name="doors"
                                value={this.state.doors}
                                type="text"
                                onChange={this.handleChange}
                            />
                        </li>
                        <li>
                            <label>Wheels</label>
                            <input
                                name="wheels"
                                value={this.state.wheels}
                                type="text"
                                onChange={this.handleChange}
                            />
                        </li>
                        <li>
                            <label>Body Type</label>
                            <select name="bodyType" value={this.state.bodyType} onChange={this.handleChange}>
                                <option value="hatchback">Hatchback</option>
                                <option value="suv">SUV</option>
                                <option value="sedan">Sedan</option>
                            </select>
                        </li>
                        <li>
                            <label>Price</label>
                            <input
                                name="price"
                                value={this.state.price}
                                type="text"
                                onChange={this.handleChange}
                            />
                        </li>
                    </ul>
                    <button className="btn btn-primary" onClick={this.createVehicle}>Submit</button>
                </div>
            </form>
        );
    }
}
