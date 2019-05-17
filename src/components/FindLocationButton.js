import React from 'react';
import { Button,Icon } from 'antd';

class FindLocationButton extends React.Component {

    handleFindMyLocation = (event) => {
        console.log("called by onclick")
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position =>
                this.props.handelGetCurrentLocation(position))
        } else {
            console.log("getlocation not support by this broswer")
        }
    }
    render() {
        return (
            <Button className="location-button" shape='round' icon="plus-circle" size ="default" onClick={() => this.handleFindMyLocation()}>
                Find MyLocation
            </Button>
        )
    }
}

export default FindLocationButton