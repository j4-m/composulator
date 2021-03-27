import './releases.css'

const Releases = ({releases}) => {
  return (
    <ul className="releases">
      {releases.map(r => (
        <li className="release-item" key={r.version}>{r.version}</li>
      ))}
    </ul>
  )
}

export default Releases