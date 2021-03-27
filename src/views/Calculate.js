import {useState, useEffect} from 'react'

import packagist from '../services/packagist'

import Releases from '../components/releases/Releases'

const Calculate = ({packageName}) => {
  const [releases, setReleases] = useState([])

  useEffect(() => {
    packagist.getReleases(packageName).then(data => setReleases(data))
  }, [packageName])


  return (
    <>
      <h1>{packageName}</h1>
      <input type="text" />
      <Releases releases={releases} />
    </>
  )
}

export default Calculate;