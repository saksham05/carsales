import React, { Component } from 'react'
import axios from 'axios'

export class CreateVehicle extends Component {
    static displayName = CreateVehicle.name;

  constructor(props) {
    super(props);
      this.createVehicle = this.createVehicle.bind(this);
  }
    createVehicle() {
        axios.post("http://localhost:64347/api/home/", {
            "vehicleType": "saksham",
            "make": "make",
            "model": "model",
            "engine": "engine",
            "doors": 1,
            "wheels": 2,
            "bodyType": "bodyType",
            "price": 3
        })
            .then(response => {
                console.log(response.data);
            }).catch(e => {
                console.log(e)
            });
    }

  render() {
    return (
      <div>
            <h1>Create Vehicles</h1>
            <br />
            <br />
            <ul className="create-vehicle">
                <li>
                    <label>Vehicle Type</label>
                    <select>
                        <option value="car">Car</option>
                        <option value="boat">Boat</option>
                        <option value="bike">Bike</option>
                        <option value="caravan">Caravan</option>
                    </select>
                </li>
                <li>
                    <label>Make</label>
                    <input type="text" />
                </li>
                <li>
                    <label>Model</label>
                    <input type="text" />
                </li>
                <li>
                    <label>Engine</label>
                    <input type="text" />
                </li>
                <li>
                    <label>Doors</label>
                    <input type="number" />
                </li>
                <li>
                    <label>Wheels</label>
                    <input type="number" />
                </li>
                <li>
                    <label>Body Type</label>
                    <select>
                        <option value="hatchback">Hatchback</option>
                        <option value="suv">SUV</option>
                        <option value="sedan">Sedan</option>
                    </select>
                </li>
                <li>
                    <label>Price</label>
                    <input type="number" />
                </li>
            </ul>
            <button className="btn btn-primary" onClick={this.createVehicle}>Submit</button>
      </div>
    );
  }
}
