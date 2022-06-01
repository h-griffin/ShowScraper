import React from 'react';
import { Columns, Box } from 'react-bulma-components';
const { Column } = Columns;
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='Nav'>
          <Columns>
            <Column className='is-full'>
              <Columns className='is-centered'>
                <Column className='is-narrow'>
                  <div className='site-title mybox'>Bay Area Shows</div>
                </Column>
                <Column className="is-narrow">
                  <Link to='/ListView'>
                    <div className={`mybox ${this.props.route === "ListView" ? "selected" : ""}`}>List View</div>
                  </Link>
                </Column>
    {/*            <Column className="is-narrow">
                  <Box className={this.props.route === "Test" ? "selected" : ""}>Map View</Box>
                </Column>*/}
                <Column className="is-narrow">
                  <Link to='/VenuesListView'>
                    <div className={`mybox ${this.props.route === "VenuesListView" ? "selected" : ""}`}>Venues</div>
                  </Link>
                </Column>
               </Columns>
              </Column>
{/*            <Column className="is-narrow">
              <Box className={this.props.route === "todo" ? "selected" : ""}>Submit Event</Box>
            </Column>*/}
{/*            <Column className="is-narrow">
              <Box className={this.props.route === "todo" ? "selected" : ""}>About</Box>
            </Column>*/}
          </Columns>
      </div>
    )
  }
}
