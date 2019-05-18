import React from 'react'
import styled from 'styled-components'
import { Row, Col, Card, Collapse, Icon as AntIcon, Typography, Statistic } from 'antd'
import { ReactComponent as locationLogo } from '../assets/ic_location.svg'
import { ReactComponent as humidityLogo } from '../assets/ic_humid.svg'
import { ReactComponent as pressureLogo } from '../assets/ic_pressure.svg'
import { ReactComponent as temperatureLogo } from '../assets/ic_temperature.svg'
import { ReactComponent as windLogo } from '../assets/ic_wind.svg'

const Panel = Collapse.Panel

const ContentRow = styled(Row)`
  height: auto;
`

const Icon = styled(AntIcon)`
  &&&& {
    font-size: ${props => (props.fontSize ? props.fontSize : '2rem')};
    text-align: right;
  }
`
const RightAlignCol = styled(Col)`
  &&&& {
    text-align: right;
  }
`
const CenterAignCol = styled(Col)`
  &&&& {
    text-align: center;
  }
`
const DescriptionCol = styled(Col)`
  &&&& {
    text-align: right;
  }
`
const WeatherRow = styled(Row)`
  &&&& {
    margin: 1rem 0rem;
  }
`

export const isGoodAQI = (current, key) => current.pollution[key] <= 50 && current.pollution[key] >= 0

const ResultLayout = ({ result }) => {
  const { state, current } = result.data || { state: null, current: null }

  return (
    <React.Fragment>
      <ContentRow type="flex">
        <Col xs={24}>
          <Card loading={result.loading} style={{ width: '100%', minHeight: `10.5rem;` }}>
            {current && (
              <Row justify="center">
                <Col span={12}>
                  {' '}
                  <Typography.Title level={2}>{state}</Typography.Title>
                </Col>
                <Col span={12}>
                  <Icon component={locationLogo} />
                </Col>
              </Row>
            )}

            {current && (
              <Collapse bordered={false} defaultActiveKey={['1', '2']} expandIconPosition={'right'}>
                {current.weather && (
                  <Panel
                  
                    header={
                      <React.Fragment>
                        Weather{' '}
                        <img
                          src={`http://openweathermap.org/img/w/${current.weather.ic}.png`}
                          alt={current.weather.ic}
                          width={40}
                          height={40}
                        />
                      </React.Fragment>
                    }
                    key="1"
                  >
                    <WeatherRow  data-testid="weatherpanel" gutter={4}>
                      <Col xs={3}>
                        <Icon component={humidityLogo} />
                      </Col>
                      <DescriptionCol xs={9}>Humidity</DescriptionCol>
                      <RightAlignCol xs={12}>{current.weather.hu}%</RightAlignCol>
                    </WeatherRow>
                    <WeatherRow gutter={4}>
                      <Col xs={3}>
                        <Icon component={pressureLogo} />
                      </Col>
                      <DescriptionCol xs={9}>Pressure</DescriptionCol>
                      <RightAlignCol xs={12}>{current.weather.pr} Pa</RightAlignCol>
                    </WeatherRow>
                    <WeatherRow gutter={4}>
                      <Col xs={3}>
                        <Icon component={temperatureLogo} />
                      </Col>
                      <DescriptionCol xs={9}>Temperature</DescriptionCol>
                      <RightAlignCol xs={12}>{current.weather.tp} &#8451;</RightAlignCol>
                    </WeatherRow>
                    <WeatherRow gutter={4}>
                      <Col xs={3}>
                        <Icon component={windLogo} />
                      </Col>
                      <DescriptionCol xs={9}>Wind</DescriptionCol>
                      <RightAlignCol xs={12}>{current.weather.ws} mph</RightAlignCol>
                    </WeatherRow>
                  </Panel>
                )}
                {current.pollution && (
                  <Panel header="Air pollution index" key="2" >
                    <Row data-testid="pollutionpanel">
                      <Col xs={12}>
                        <Statistic
                          title={isGoodAQI(current, 'aqicn') ? 'Normal' : 'High'}
                          value={current.pollution.aqicn || 0}
                          precision={2}
                          valueStyle={{ color: isGoodAQI(current, 'aqicn') ? '#3f8600' : '#cf1322' }}
                          prefix={isGoodAQI(current, 'aqicn') ? <Icon type="arrow-down" /> : <Icon type="arrow-up" />}
                          suffix="%"
                        />
                      </Col>
                      <Col xs={12}>
                        <Statistic
                          title={isGoodAQI(current, 'aqius') ? 'Normal' : 'High'}
                          value={current.pollution.aqius}
                          precision={2}
                          valueStyle={{ color: isGoodAQI(current, 'aqius') ? '#3f8600' : '#cf1322' }}
                          prefix={isGoodAQI(current, 'aqius') ? <Icon type="arrow-down" /> : <Icon type="arrow-up" />}
                          suffix="%"
                        />
                      </Col>
                    </Row>
                  </Panel>
                )}
              </Collapse>
            )}

            {result.init && !result.data && (
              <React.Fragment>
                <Row type="flex" align="middle" justify="center">
                  <CenterAignCol xs={3}>
                    <Icon type="search" />
                  </CenterAignCol>
                </Row>
                <Row type="flex" justify="center">
                  <CenterAignCol xs={24}>
                    <Typography.Title level={4}>{result.message}</Typography.Title>
                  </CenterAignCol>
                </Row>
              </React.Fragment>
            )}
            {!result.init && !result.data && (
              <React.Fragment>
                <Row type="flex" justify="center">
                  <CenterAignCol xs={3}>
                    <Icon type="frown" />
                  </CenterAignCol>
                </Row>
                <Row type="flex" justify="center">
                  <CenterAignCol xs={24}>
                    <Typography.Title level={4}>{result.message}</Typography.Title>
                  </CenterAignCol>
                </Row>
              </React.Fragment>
            )}
          </Card>
        </Col>
      </ContentRow>
    </React.Fragment>
  )
}
export default ResultLayout
