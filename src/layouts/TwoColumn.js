import React from 'react'
import glamorous from 'glamorous'
import _variables from '../styles/_variables'

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
  padding: '0 10px',
  width: 180
})

const Main = glamorous.main({
  alignSelf: 'start',
  gridColumn: 2,
  gridRow: 2
})

const TwoColumn = props => (
  <Wrapper>
    <Aside>sidebar</Aside>
    <Main>{props.children}</Main>
  </Wrapper>
)

export default TwoColumn
