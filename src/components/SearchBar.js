import React from 'react'
import styled from 'styled-components'
import { Form, Button as antButton, Row, Col, AutoComplete as antAutoComplete } from 'antd'
import { Formik } from 'formik'

const COUNTRIES = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua &amp; Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia &amp; Herzegovina',
  'Botswana',
  'Brazil',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Cape Verde',
  'Cayman Islands',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote D Ivoire',
  'Croatia',
  'Cruise Ship',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'French West Indies',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kuwait',
  'Kyrgyz Republic',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Pierre &amp; Miquelon',
  'Samoa',
  'San Marino',
  'Satellite',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'St Kitts &amp; Nevis',
  'St Lucia',
  'St Vincent',
  'St. Lucia',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  "Timor L'Este",
  'Togo',
  'Tonga',
  'Trinidad &amp; Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks &amp; Caicos',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (US)',
  'Yemen',
  'Zambia',
  'Zimbabwe',
]
const Button = styled(antButton)`
  width: 100%;
  margin-bottom: 1rem;
`

const FormItem = styled(Form.Item)`
  &&& {
    width: 100%;
    .ant-form-item-control-wrapper {
      width: 100%;
    }
  }
`

const AutoComplete = styled(antAutoComplete)`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`

const SearchBar = ({ onSearch, fetchInitialLocation }) => {
  return (
    <Formik
      isInitialValid={true}
      initialValues={{ city: '', state: '', country: '', endpoint: 'city' }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSearch(values)
        setSubmitting(false)
        resetForm({ city: '', state: '', country: '', endpoint: 'city' })
      }}
      validate={values => {
        let errors = {}
        if (!values.city) {
          errors.city = 'City is Required'
        }
        if (!values.state) {
          errors.state = 'State is Required'
        }
        if (!values.country) {
          errors.country = 'Country is Required'
        }
        return errors
      }}
    >
      {props => {
        const {
          values,
          errors,
          dirty,
          isValid,
          isSubmitting,
          handleSubmit,
          setFieldValue,
        } = props
        return (
          <Form layout="inline" onSubmit={handleSubmit}>
            <Row>
              <Col xs={24}>
                <FormItem validateStatus={errors.city ? 'error' : ''} help={errors.city}>
                  <AutoComplete
                    dataSource={COUNTRIES}
                    filterOption={(inputValue, option) =>
                      option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    placeholder="Enter city name"
                    name="city"
                    value={values.city}
                    onChange={val => setFieldValue('city', val)}
                    onSelect={val => setFieldValue('city', val)}
                  />
                </FormItem>
              </Col>
            </Row>

            <Row>
              <Col xs={24}>
                <FormItem validateStatus={errors.state ? 'error' : ''} help={errors.state}>
                  <AutoComplete
                    dataSource={COUNTRIES}
                    filterOption={(inputValue, option) =>
                      option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    placeholder="Enter state name"
                    name="state"
                    value={values.state}
                    onChange={val => setFieldValue('state', val)}
                    onSelect={val => setFieldValue('state', val)}
                  />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col xs={24}>
                <FormItem validateStatus={errors.state ? 'error' : ''} help={errors.country}>
                  <AutoComplete
                    dataSource={COUNTRIES}
                    filterOption={(inputValue, option) =>
                      option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    placeholder="Enter country name"
                    name="country"
                    value={values.country}
                    onChange={val => setFieldValue('country', val)}
                    onSelect={val => setFieldValue('country', val)}
                  />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col xs={24}>
                <Button disabled={!(dirty && isValid) || isSubmitting} type="primary" htmlType="submit">
                  Find..
                </Button>
              </Col>
            </Row>
          </Form>
        )
      }}
    </Formik>
  )
}
export default SearchBar
