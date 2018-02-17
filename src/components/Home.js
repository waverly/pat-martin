import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import ReactCSSTransitionReplace from 'react-css-transition-replace';


import '../css/Home.css';

class Home extends React.Component {

  constructor(){
    super();
    // this.renderSlide = this.renderSlide.bind(this);
    this.renderCurrentImage = this.renderCurrentImage.bind(this);
    this.goInDirection = this.goInDirection.bind(this);
    this.getProps = this.getProps.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      selectedIndex: 0,
      animationDirection: 'previous'
    };
  }

  renderCurrentImage() {
    var selected = this.state.selectedIndex;
    var props = {
      key: selected,
      src: this.props.images[selected]
    };

    return (
      <img {...props} />
    );
  }

  handleKeyDown(event) {
    console.log('key down');
		var left = 37;
		var up = 38;
		var right = 39;
		var down = 40;
		var key = event.which;
    console.log(event);

		if (key === down || key === left) {
			this.goInDirection('previous');
		} else if (key === up || key === right) {
			this.goInDirection('next');
		}
	}

  goInDirection(direction) {
    var totalImages = Object.keys(this.props.images).length;
    var modifier = (direction === 'next') ? 1 : -1;
    var newIndex = this.state.selectedIndex + modifier;

    if (newIndex === totalImages) {
      newIndex = 0;
    } else if (newIndex === -1) {
      newIndex = totalImages - 1;
    }
    console.log(newIndex, totalImages);

    this.setState({
      animationDirection: direction,
      selectedIndex: newIndex
    });
  }

  getProps() {
		var props = {
			className:'carousel',
			// onKeyDown: this.handleKeyDown,
			tabIndex:'0'
		};

		return props;
	}

  componentWillMount(){
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render(){
    const imgIds = Object.keys(this.props.images);

    return(
      <ReactCSSTransitionGroup
      transitionName="load"
      transitionAppear={true}
      transitionEnterTimeout={700}
      transitionAppearTimeout={700}
      transitionLeaveTimeout={700}
      >
        <div className="main">
          <div {...this.getProps()} >
            <div  className="button prev" onClick={()=>this.goInDirection('previous')}></div>
              <div className="carousel--image" onClick={()=>this.goInDirection('next')}>
                    <ReactCSSTransitionReplace transitionName="fade-wait"
                             transitionEnterTimeout={1000} transitionLeaveTimeout={400}>
                        {this.renderCurrentImage()}
                    </ReactCSSTransitionReplace>
              </div>
            <div className="button next" onClick={()=>this.goInDirection('next')}></div>
          </div>
          <div className="counter">
            <p>
              {this.state.selectedIndex}
            </p>
          </div>
    </div>

  </ReactCSSTransitionGroup>


    )
  }
}

export default Home;
