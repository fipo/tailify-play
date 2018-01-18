import React, { Component } from 'react'
import TwoColumn from '../layouts/TwoColumn'
import glamorous from 'glamorous'
import _variables from '../styles/_variables'
import LineChart from './charts/LineChart'
import PieChart from './charts/PieChart'
import BarChart from './charts/BarChart'

const Title = glamorous.h1({
  fontSize: 30,
  textTransform: 'uppercase',
  color: _variables.ziggurat,
  fontWeight: 700,
  margin: '20px 0 10px'
})

const SubTitle = glamorous.h2({
  color: _variables.darkGrey,
  fontSize: 16,
  fontStyle: 'italic',
  lineHeight: '22px',
  marginBottom: 30
})

const ChartTitle = glamorous.h3({ fontSize: 16, marginBottom: 20, fontWeight: 600 })
const Report = glamorous.div({ display: 'flex' })
const ReportTotals = glamorous.div({ width: 250 })
const ReportBody = glamorous.div({ marginLeft: 10, width: 750 })

const ReportTotal = glamorous.div({
  backgroundColor: _variables.ziggurat,
  border: `1px solid ${_variables.grey}`,
  borderRadius: 3,
  color: _variables.white,
  fontSize: 28,
  fontWeight: 700,
  marginBottom: 10,
  padding: '20px 10px',
  textAlign: 'center',
  '& span': {
    display: 'block',
    textTransform: 'uppercase',
    fontWeight: 600,
    color: '#609693',
    fontSize: 18,
    marginTop: 15
  }
})

const Row = glamorous.div({ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' })

const RowBox = glamorous.div('RowBox', props => {
  return {
    background: _variables.white,
    border: `1px solid ${_variables.grey}`,
    borderRadius: 3,
    marginBottom: 10,
    padding: 10,
    width: props.auto ? 'auto' : 243,
    '&:last-child': { marginRight: 0 }
  }
})

class CampaignReport extends Component {
  state = {
    total: { reach: 1890091, posts: 6, influencers: 3 },
    dailyActivity: [
      { name: '1st of May', Likes: 235, Comments: 12 },
      { name: '2nd of May', Likes: 890, Comments: 32 },
      { name: '3rd of May', Likes: 1321, Comments: 52 },
      { name: '4th of May', Likes: 1789, Comments: 74 },
      { name: '5th of May', Likes: 2490, Comments: 88 },
      { name: '6th of May', Likes: 3165, Comments: 102 },
      { name: '7th of May', Likes: 4101, Comments: 201 },
      { name: '8th of May', Likes: 5112, Comments: 223 },
      { name: '9th of May', Likes: 6401, Comments: 283 },
      { name: '10th of May', Likes: 7891, Comments: 348 },
      { name: '11th of May', Likes: 10219, Comments: 419 },
      { name: '12th of May', Likes: 12901, Comments: 570 },
      { name: '13th of May', Likes: 14736, Comments: 701 },
      { name: '14th of May', Likes: 16782, Comments: 89 }
    ],
    countries: [
      { name: 'UK', followers: 642630.94, value: 34 },
      { name: 'France', followers: 510324.57, value: 27 },
      { name: 'Germany', followers: 226810.92, value: 12 },
      { name: 'Russia', followers: 302414.56, value: 16 },
      { name: 'Latvia', followers: 37801.82, value: 2 },
      { name: 'Kongo', followers: 170108.19, value: 9 }
    ],
    ageOfFollowers: [
      { name: '<14', value: 14.2 },
      { name: '15-24', value: 22.7 },
      { name: '25-34', value: 41.8 },
      { name: '35-44', value: 19.1 },
      { name: '45+', value: 2.2 }
    ],
    sexOfFollowers: [{ name: 'Male', followers: 29 }, { name: 'Female', followers: 71 }]
  }

  render() {
    const { total, dailyActivity, countries, ageOfFollowers, sexOfFollowers } = this.state
    return (
      <TwoColumn>
        <Title>Kittens Sunglasses</Title>
        <SubTitle>Campaign Report</SubTitle>
        <Report>
          <ReportTotals>
            <ReportTotal>
              {total.reach}
              <span>Total Reach</span>
            </ReportTotal>
            <ReportTotal>
              {total.posts}
              <span>Total Posts</span>
            </ReportTotal>
            <ReportTotal>
              {total.influencers}
              <span>Total Influencers</span>
            </ReportTotal>
          </ReportTotals>
          <ReportBody>
            <RowBox auto>
              <ChartTitle>Daily Likes and Comments</ChartTitle>
              <LineChart data={dailyActivity} />
            </RowBox>
            <Row>
              <RowBox>
                <ChartTitle>Countries of followers</ChartTitle>
                <PieChart data={countries} />
              </RowBox>
              <RowBox>
                <ChartTitle>Age of followers</ChartTitle>
                <BarChart data={ageOfFollowers} />
              </RowBox>
              <RowBox>
                <ChartTitle>Male/Female followers</ChartTitle>
                <PieChart data={sexOfFollowers} />
              </RowBox>
            </Row>
          </ReportBody>
        </Report>
      </TwoColumn>
    )
  }
}
export default CampaignReport
