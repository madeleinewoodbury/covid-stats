import React from 'react'

const Country = ({ country }) => {
  const levelClass =
    country.level === 'green'
      ? 'badge bg-success rounded-pill'
      : country.level === 'yellow'
      ? 'badge bg-warning rounded-pill'
      : 'badge bg-danger rounded-pill'
  return country.name != null ? (
    <div className='card my-3 row'>
      <div className='card-header'>
        {country.name}
        <img
          className='flag-icon'
          src={`https://www.countryflags.io/${country.code}/shiny/24.png`}
          alt='flag icon'
        />
      </div>
      <ul className='list-group'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          New cases past 14 days
          <span className='badge bg-primary rounded-pill'>
            {country.last14Days}
          </span>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Cases per 100k
          <span className='badge bg-primary rounded-pill'>
            {country.per100k}
          </span>
        </li>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
          Status level
          <span className={levelClass}>{country.level}</span>
        </li>
      </ul>
    </div>
  ) : null
}

export default Country
