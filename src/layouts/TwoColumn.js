import React from 'react'
import glamorous from 'glamorous'
import _variables from '../styles/_variables'
import NavigationContainer from '../containers/NavigationContainer'
import Logo from '../components/Logo'

const Wrapper = glamorous.div({
  display: 'grid',
  gridTemplateColumns: 'auto minmax(min-content, 1fr)',
  gridTemplateRows: 'auto minmax(min-content, 1fr) auto',
  minHeight: '100%'
})

const Aside = glamorous.aside({
  backgroundColor: _variables.black,
  color: _variables.lightGrey,
  gridColumn: 1,
  gridRow: 2,
  padding: '20px 10px 0',
  width: 180
})

const Main = glamorous.main({
  alignSelf: 'start',
  gridColumn: 2,
  gridRow: 2
})

const TwoColumn = props => (
  <Wrapper>
    <Aside>
      <Logo />
      <NavigationContainer />
    </Aside>
    <Main>{props.children}</Main>
  </Wrapper>
)

export default TwoColumn
