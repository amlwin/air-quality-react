import React from 'react'; import { Form, Icon, Input, Button } from 'antd';

const Search = Input.Search;

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: null,
            stateOftheCity: null,
            country : null
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit click');
        this.props.handleFormSubmit(this.state.city, this.state.stateOftheCity,this.state.country)
    }
    handleCityChange = (event) => {
        console.log('city change')
        this.setState = ({
            city: event.target.value
        });

    };
    handleStateChange = (event) => {
        console.log('state change')
        this.setState = ({
            stateOftheCity: event.target.value
        });
    };
    handleCountryChange = event => {
        this.setState = ({
            country: event.target.value
        })
    }
    render() {
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item>
                    <Input placeholder="Type city name" value={this.state.city} onChange={this.handleCityChange} />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Type state name" value={this.state.stateOftheCity} onChange={this.handleStateChange} />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Type country name" value={this.state.country} onChange={this.handleCountryChange} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Find..</Button>
                </Form.Item>
            </Form>
        )
    }
}
export default SearchBar;
{/* <form onSubmit="something" className="inputLayout">
            <label for="location-box">Enter Your Location</label>
            <input type="text" name="location-box"/>
        </form> */}