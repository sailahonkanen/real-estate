import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      listingsData,
      city: 'All',
      homeType: 'All',
      bedrooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      furnished: false,
      sauna: false,
      gym: false,
      garage: false,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: '',

    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)

  }

  componentWillMount() {

    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingsData
    })
  }


  change(event) {
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }

  changeView(viewName) {
    this.setState({
      view: viewName
    })
  }

  filteredData() {
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <=
        this.state.max_price && item.floorSpace >= this.state.min_floor_space &&
        item.floorSpace <= this.state.max_floor_space &&
        item.bedrooms >= this.state.bedrooms
    })

    if (this.state.city != "All") {
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }

    if (this.state.homeType != "All") {
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType
      })
    }

    if (this.state.elevator != false) {
      newData = newData.filter((item) => {
        var elevatorSearch = item.extras.includes("elevator")
        console.log(elevatorSearch)

        return elevatorSearch == this.state.elevator
      })
    }

    if (this.state.furnished != false) {
      newData = newData.filter((item) => {
        var furnishedSearch = item.extras.includes("furnished")
        console.log(furnishedSearch)

        return furnishedSearch == this.state.furnished
      })
    }

    if (this.state.sauna != false) {
      newData = newData.filter((item) => {
        var saunaSearch = item.extras.includes("sauna")
        console.log(saunaSearch)

        return saunaSearch == this.state.sauna
      })
    }

    if (this.state.gym != false) {
      newData = newData.filter((item) => {
        var gymSearch = item.extras.includes("gym")
        console.log(gymSearch)

        return gymSearch == this.state.gym
      })
    }

    if (this.state.garage != false) {
      newData = newData.filter((item) => {
        var garageSearch = item.extras.includes("garage")
        console.log(garageSearch)

        return garageSearch == this.state.garage
      })
    }



    if (this.state.sortby == 'price-dsc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    if (this.state.sortby == 'price-asc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if (this.state.search != '') {
      newData = newData.filter((item) => {
        var city = item.city.toLowerCase()
        var searchText = this.state.search.toLowerCase()
        var n = city.match(searchText)

        if (n != null) {
          return true
        }
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForms() {
    //city
    var allCities = this.state.listingsData.map((item) => {
      return item.city
    })
    allCities = new Set(allCities)
    allCities = [...allCities]

    allCities = allCities.sort()

    //homeType
    var allHomeTypes = this.state.listingsData.map((item) => {
      return item.homeType
    })
    allHomeTypes = new Set(allHomeTypes)
    allHomeTypes = [...allHomeTypes]

    allHomeTypes = allHomeTypes.sort()

    //bedrooms
    var allBedrooms = this.state.listingsData.map((item) => {
      return item.bedrooms
    })
    allBedrooms = new Set(allBedrooms)
    allBedrooms = [...allBedrooms]

    allBedrooms = allBedrooms.sort()

    this.setState({
      populateFormsData: {
        allHomeTypes,
        allBedrooms,
        allCities
      }
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state}
          populateAction={this.populateForms} />
        <Listings listingsData={this.state.filteredData}
          change={this.change}
          globalState={this.state} changeView={this.changeView} />
      </section>
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
