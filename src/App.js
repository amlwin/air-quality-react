import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import FindLocationButton from './components/FindLocationButton';
import ResultLayout from './components/ResultLayout';
import { Layout } from 'antd';
import { async } from 'q';
import SearchBar from './components/SearchBar';
import AqiApi from './api/AqiApi';

const { Header, Content, Footer } = Layout;


class App extends React.Component {
  api_key = "yRKizemTKBb75pLNr";
  constructor(props) {
    super(props)
    this.state = ({
      resultData: {
        city: null,
        state: null,
        country: null,
        pollution: null
      }
    })
  }

  handelGetCurrentLocation = async (postion) => {
    console.log("lat is " + postion.coords.latitude)
    console.log("long is " + postion.coords.longitude)
    const response = await AqiApi.get('nearest_city', {
      params: {
        lat: postion.coords.latitude,
        lon: postion.coords.longitude
      }
    })
    this.setState({
      resultData: {
        city: response.data.city,
        state: response.data.state,
        country: response.data.country,
        pollution: response.data.current.pollution.aqius
      }
    });
  }
  handelFormSubmit = async (city, stateofCity, country) =>{
    const response = await AqiApi.get('city', {
      params: {
        city: city,
        state: stateofCity,
        country: country,
      }
    });
    this.setState({
      resultData: {
        city: response.data.city,
        state: response.data.state,
        country: response.data.country,
        pollution: response.data.current.pollution.aqius
      }
    });

}

  render() {
    return (
      <div className="App">
        <Layout className = "wrapper">
          <Content>
            <SearchBar handleFormSubmit={this.handleFormSubmit} />
            <FindLocationButton handelGetCurrentLocation={this.handelGetCurrentLocation} />
            <ResultLayout result={this.state.resultData} />
          </Content>
        </Layout>
      </div>
    );
  }

  getAirQualityByCity() { }

}
function showPosition(position) {
  console.log("lat is " + position.coords.latitude)
  console.log("long is " + position.coords.longitude)
}

export default App;
