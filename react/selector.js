import { createSelector } from 'reselect'

const driversSelector = state => state.drivers
const serviceSelector = state => state.service.service

export const driversWithServiceSelector = createSelector(
  [ driversSelector, serviceSelector ],
  (drivers, services) => drivers.map(driver => (
      driver.company = driver.company_id,
      driver.company_id = (services.find(service => service.id === driver.company_id) || {}).name || '---' ,
      driver
    )
  )
) 