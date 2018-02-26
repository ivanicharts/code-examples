import React from 'react'
import { Link, Route } from 'react-router-dom'
import { compose, lifecycle } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as r from 'shared/constants/routes'
import { fetchServicesHandler } from '../service/actions'

import Header from '../header'
import NotificationBar from '../notifications'
import DriverComponent from '../driver'
import NavComponent from '../nav'
import DriverList from '../driver-list'
import Service from '../service'
import Reports from '../reports'

const Dashboard = ({ match, history }) => (
  <div>
    <Header history={history} />
    <NotificationBar />
    <div className="container">
      <Route exact path={match.url} component={NavComponent} />
      <Route exact path={match.url} component={DriverList} />
      <Route path={r.driver} component={DriverComponent} />
      <Route path={r.service} component={Service} />
      <Route path={r.reports} component={Reports} />
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  fetchServices: bindActionCreators(fetchServicesHandler, dispatch)
})

const enhance = compose(
  connect(null, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchServices()
    }
  })
)(Dashboard)

export default enhance