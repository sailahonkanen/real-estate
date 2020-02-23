import React, { Component } from 'react'

export default class Filter extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.allCities = this.allCities.bind(this)
    this.allHomeTypes = this.allHomeTypes.bind(this)
    this.allBedrooms = this.allBedrooms.bind(this)
  }
  componentWillMount() {
    this.props.populateAction()
  }

  allCities() {
    if (this.props.globalState.populateFormsData.allCities != undefined) {
      var { allCities } = this.props.globalState.populateFormsData

      console.log(allCities)

      return allCities.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }

  }

  allHomeTypes() {
    if (this.props.globalState.populateFormsData.allHomeTypes != undefined) {
      var { allHomeTypes } = this.props.globalState.populateFormsData

      console.log(allHomeTypes)

      return allHomeTypes.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }

  }

  allBedrooms() {
    if (this.props.globalState.populateFormsData.allBedrooms != undefined) {
      var { allBedrooms } = this.props.globalState.populateFormsData

      console.log(allBedrooms)

      return allBedrooms.map((item) => {
        return (
          <option key={item} value={item}>{item}+ BR</option>
        )
      })
    }

  }

  render() {
    return (<section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <select name="city" className="filters city" onChange={this.props.change}>
          <option value="All">All Locations</option>
          {this.allCities()}
        </select>
        <select name="homeType" className="filters homeType" onChange={this.props.change}>
          <option value="All">All Home Types</option>
          {this.allHomeTypes()}
        </select>
        <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
        {this.allBedrooms()}
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
          <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
          <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
        </div>
        <div className="filters extras">
          <span className="title">Extras</span>
          <label htmlFor="extras">
            <span>Elevator</span>
            <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change} />
          </label>
          <label htmlFor="extras">
            <span>Furnished</span>
            <input name="furnished" value="furnished" type="checkbox" onChange={this.props.change} />
          </label>
          <label htmlFor="extras">
            <span>Garage</span>
            <input name="garage" value="garage" type="checkbox" onChange={this.props.change} />
          </label>
          <label htmlFor="extras">
            <span>Gym</span>
            <input name="gym" value="gym" type="checkbox" onChange={this.props.change} />
          </label>
          <label htmlFor="extras">
            <span>Sauna</span>
            <input name="sauna" value="sauna" type="checkbox" onChange={this.props.change} />
          </label>
        </div>
      </div>
    </section>)
  }
}
