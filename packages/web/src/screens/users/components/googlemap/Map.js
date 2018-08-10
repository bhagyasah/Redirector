
import React, { Component } from 'react';
import {Icon, Intent, Dialog} from '@blueprintjs/core';
import GoogleMapReact from 'google-map-react';
import { ICON_LARGE } from '@blueprintjs/core/lib/esm/common/classes';

const AnyReactComponent = ({ text }) => <div><Icon icon='map-marker' intent={Intent.DANGER } iconSize={30}/>{text}</div>;

class Map extends Component {

  constructor(props) {
    super(props);
    const { isOpen } = props;
    this.state={
      isOpen
    }
  }
  static defaultProps = {
    center: {
      lat: 122.084,
      lng: 37.42199833
    },
    zoom: 20
  };

  closeHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <Dialog
      usePortal
      icon="globe"
      isCloseButtonShown
      transitionDuration={1000}
      lazy={false}
      canEscapeKeyClose
      isOpen={this.state.isOpen}
      onClose={this.closeHandler}
      title="Google Map"
      isOpen={this.state.isOpen}
      style={{width:'600px', height:'600px'}}
        >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAYOlmw2pezHoNw4fUZnlm12VbHFHegajE'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={122.084}
            lng={37.42199833}
            text={'Bhagya'}
          />

        </GoogleMapReact>
      </Dialog>
    );
  }
}

export default Map;