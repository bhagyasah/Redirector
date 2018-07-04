import React,{Component} from 'react';
import Login from './login';

class index extends Component {

  render(){
    return (
      <div className="home-page">
       <div className="home-image"><h2> image is here</h2></div>
       <div className="home-login"> <Login /></div>
       <div className="home-image"><h2> image is here</h2></div>
       <div className="home-login"> <Login /></div>
      </div>
    )
  }
}
export default index;