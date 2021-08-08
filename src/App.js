import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import CreatePostScreen from './screens/CreatePostScreen'
import HomeScreen from './screens/HomeScreen'
import PostScreen from './screens/PostScreen'
const App = () => {
  return (
    <Router>
      <main className='grid grid-cols-1 bg-blue-600 flex-col w-full min-h-screen justify-center items-center'>
        <Header />
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/posts/create' exact component={CreatePostScreen} />
          <Route path='/posts/:post' component={PostScreen} />
        </Switch>
        <Footer />
      </main>
    </Router>
  )
}

export default App
