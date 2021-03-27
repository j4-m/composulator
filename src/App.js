import {useState, useEffect} from 'react'
import './App.css'

import Search from './views/Search'
import Calculate from './views/Calculate'


function App() {
  const [display, setDisplay] = useState('SEARCH')
  const [packageName, setPackageName] = useState('')

  const goTo = (path, byHistory = false) => {
    const goToUrl = new URL(path, 'http://www.example.com')
    if (!byHistory) {
      window.history.pushState({path}, null, '#' + path)
    }
    switch (goToUrl.pathname) {
      case '/':
        setDisplay('SEARCH')
        break
      case '/package':
        const name = goToUrl.searchParams.get('name')
        setPackageName(name)
        setDisplay('DETAIL')
        break
      default:
        setDisplay('SEARCH')
    }
  }

  useEffect(() => {
    const hash = window.location.hash
    const path = hash === '' ? '/' : hash.replace('#', '')
    window.history.replaceState({path}, null, '#' + path)
    window.onpopstate = e => goTo(e.state.path, true)
    // window.addEventListener('hashchange', () => console.log, false);
  }, [])
  const handleSelectedPackage = (pkg) => {
    goTo(`/package?name=${pkg}`)
  }
  return (
    <div className="App">
      {display === 'SEARCH' && (
        <Search packageSelectedHandler={handleSelectedPackage} />
      )}
      {display === 'DETAIL' && (
        <Calculate packageName={packageName} />
      )}
    </div>
  );
}

export default App;
