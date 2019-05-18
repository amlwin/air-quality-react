import React, { useState } from 'react'
import { Row, Col, notification, Typography } from 'antd'
import styled from 'styled-components'
import './App.css'
import FindLocationButton from './components/FindLocationButton'
import ResultLayout from './components/ResultLayout'
import maskManLogo from './assets/ic_mask_man.svg'

import SearchBar from './components/SearchBar'
import AqiApi from './api/AqiApi'

const ResultLayoutCol = styled(Col)`
  margin-top: 0.5rem;
`
const TitleCol = styled(Col)`
  text-align: center;
`

const initialState = {
  data: null,
  loading: false,
  message: 'Please Enter your city and click find!',
  init: true,
}
const openErrNotification = (title, description) => {
  if (title && description) {
    notification.error({
      placement: 'bottomRight',
      message: title,
      description: description,
    })
  }
}

const handelFormSubmit = async (formVal, setResultData) => {
  try {
    let temp = Object.assign({}, initialState)
    temp.loading = true
    setResultData(temp)
    const response = await AqiApi.get(formVal.endpoint, {
      params: {
        ...formVal,
      },
    })
    temp = {
      data: response.data.data,
      loading: false,
      message: 'Please Enter your city and click find!',
      init: false,
    }

    setResultData(temp)
  } catch (error) {
    let temp = Object.assign({}, initialState)
    temp = {
      data: null,
      loading: false,
      message: 'The requested area is not available at the moment',
      init: false,
    }

    temp.loading = false
    openErrNotification('Oops', 'The requested area is not available at the moment')
    setResultData(temp)
    // console.error(error);
  }
}

const App = props => {
  const [resultData, setResultData] = useState(initialState)

  return (
    <React.Fragment>
      <Row gutter={4} type="flex" justify="center" align="middle">
        <TitleCol xs={4} sm={4} md={24}>
          <img src={maskManLogo} alt="maskman" width="40" height="40" />
        </TitleCol>
        <TitleCol xs={20} sm={20} md={24}>
          <Typography.Title level={4}>Air Pollution Checker</Typography.Title>
        </TitleCol>
      </Row>
      <Row gutter={16} type="flex">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <SearchBar
            onSearch={values => {
              handelFormSubmit(values, setResultData)
            }}
          />
          <FindLocationButton
            setResultData={setResultData}
            resultData={resultData}
            handelGetCurrentLocation={handelFormSubmit}
          />
        </Col>
        <ResultLayoutCol xs={24} sm={24} md={12} lg={12} xl={12}>
          <ResultLayout result={resultData} />
        </ResultLayoutCol>
      </Row>
    </React.Fragment>
  )
}

export default App
