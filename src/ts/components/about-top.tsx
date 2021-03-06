import * as React from 'react';
import * as malarkey from 'malarkey';

export default class AboutTop extends React.Component {
  componentDidMount() {
    const elem = document.querySelector('.typed');
    const opts = {
      typeSpeed: 50,
      deleteSpeed: 50,
      pauseDelay: 1500,
      loop: true,
      postfix: '',
    };

    malarkey(elem, opts)
      .type('One single step')
      .pause()
      .delete()
      .type('Upload package.json')
      .pause()
      .delete()
      .type('View detailed results')
      .pause()
      .delete()
      .type('Simple as this')
      .pause()
      .delete();
  }

  render() {
    return (
      <div className="container-fluid welcome-banner">
        <div className="row">
          <div className="col-md-12">
            <h2>Compare your NPM dependencies</h2>
            <h3>
              &nbsp;<span className="typed" />{' '}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
