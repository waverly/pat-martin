import React from 'react';
import '../css/IndexPg.css';

class Index extends React.Component {

  constructor(){
    super();
  }

  componentDidMount(){

  }

  render(){
    const images = this.props.images;
    const imgMarkup =
      Object.keys(images)
        .map(
          (key) =>
          {return(
            <div key={key} className="img-wrap">
              <img src={ images[key] } alt=""/>
            </div>
          )
          }
        );

    return(
      <div className="flex-wrap">
        {imgMarkup}
      </div>
    )
  }
}

export default Index;
