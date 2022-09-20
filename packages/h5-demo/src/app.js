/* eslint-disable react/prop-types */
import { Component, useEffect } from 'react'
import { render } from 'react-dom'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { router } from './router'
import './app.less'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Redirect />} />
        {router.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={<RenderComponent {...item} />}
          />
        ))}
      </Routes>
    </HashRouter>
  )
}

function Redirect() {
  useEffect(() => {
    window.location.hash = '/pages/dashboard/index'
  }, [])
  return ''
}

export class RenderComponent extends Component {
  constructor(args: any) {
    super(args)
    this.state = {
      Com: null,
    }
  }

  async componentDidMount() {
    // @ts-ignore
    const res = await this.props.component()
    this.setState({
      Com: res.default,
    })
  }

  // eslint-disable-next-line react/no-deprecated
  async componentWillReceiveProps(nextProps: any) {
    // @ts-ignore
    if (this.props.component && nextProps.component !== this.props.component) {
      // @ts-ignore
      const res = await nextProps.component()
      this.setState({
        Com: res.default,
      })
    }
  }

  render() {
    // @ts-ignore
    const { Com } = this.state
    const props = this.props
    if (Com) {
      return <Com {...props} />
    } else {
      return 'loading...'
    }
  }
}

const dom = document.getElementById('root')
render(<App />, dom)
