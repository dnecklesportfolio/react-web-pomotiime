import React, { Component } from "react";

class ActualTime extends Component {
  state = {
    configOpen: false
  };
  handleClick = () => {
    this.setState({
      configOpen: !this.state.configOpen
    });
  };
  render() {
    return (
      <div>
       
      </div>
    );
  }
}

export default ActualTime;
/*
 <Card onClick={this.handleClick}>
          Actual Time
          <Image src="http://fakeimg.pl/350x200/?text=ActualTime" />
          {this.state.configOpen &&
            <Card.Content>
              <Card>
                <Image src="http://fakeimg.pl/350x200/?text=ActualTimeConfig" />
              </Card>
            </Card.Content>}
        </Card>
*/