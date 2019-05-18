import React from 'react'
import { Button as antButton, Col, Row, notification } from 'antd'
import styled from 'styled-components'

const Button = styled(antButton)`
  width: 100%;
`

const FindLocationButton = props => {
  return (
    <Row type="flex">
      <Col xs={24}>
        <Button
          className="location-button"
          data-testid="findlocationbutton"
          loading={props.resultData.loading}
          shape="round"
          icon="plus-circle"
          size="default"
          onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                position =>
                  props.handelGetCurrentLocation(
                    { lat: position.coords.latitude, lon: position.coords.longitude, endpoint: 'nearest_city' },
                    props.setResultData,
                  ),
                error => {
                  notification.error({
                    placement: 'bottomRight',
                    message: 'Oops we couldnt manage to get your location!',
                    description: 'Please try again typing your location.',
                  })
                },
              )
            } else {
              notification.error({
                placement: 'bottomRight',
                message: 'Oops your device is not able to retrieve your current location',
                description: 'Please try again typing your location.',
              })
            }
          }}
        >
          {props.resultData.loading && `Fetching...`}
          {!props.resultData.loading && `Find MyLocation`}
        </Button>
      </Col>
    </Row>
  )
}

export default FindLocationButton
