import React, { Component } from 'react';

export class BlogComponent extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className="col-12 col-md-3 ps-4 mt-3">
        <div className="position-relative">
          <img src={this.props.data.img} className="w-100" alt="" />
          <div className="shell">
            <div className="ps-3 pb-4">
              <div className="data text-start text-white">{this.props.data.date}</div>
              <div className="comment text-start fw-bold text-white">
                {this.props.data.commit}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogComponent;
