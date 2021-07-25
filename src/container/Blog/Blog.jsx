import React, { Component } from 'react';
import BlogComponent from '../../components/BlogComponent/BlogComponent';
import Title from '../../components/Title/Title';
import Blog1 from '../../img/Blog1.svg';
import Blog2 from '../../img/Blog2.svg';
import Blog3 from '../../img/Blog3.svg';
import './Blog.css';
import Fade from 'react-reveal/Fade';
const data = [
  {
    img: Blog2,
    date: '20 June/2020',
    commit: 'New devices and applications come to the market.',
  },
  {
    img: Blog1,
    date: '20 June/2020',
    commit: 'New devices and applications come to the market.',
  },
];
export class Blog extends Component {
  render() {
    return (
      <div id="Blog" className="container py-5">
    <Fade bottom>
    <div className="row m-0">
            <div className="col-12 col-md-2 mt-3">
              <div>
                <Title title="Get NewsFeeds" subTitle="Blog" />
              </div>
            </div>
            <div className="col-12 col-md-4 mt-3">
              <div className="ps-3">
                <img src={Blog3} className="w-100" alt="" />
                <div className="content">
                  <div className="date text-start my-3 subTitle">
                    20 June/2020
                  </div>
                  <div className="comment text-start fw-bold ">
                    Technology is evolving rapidly. New devices and
                    applications.
                  </div>
                </div>
              </div>
            </div>
          {data.map((v, i) => {
            return <BlogComponent data={v} />;
          })}
        </div>
     
    </Fade>
      </div>
    );
  }
}

export default Blog;
