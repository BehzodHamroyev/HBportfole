import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import ToDoComponet from '../../components/ToDoComponet/ToDoComponet';
import img1 from '../../img/icon1.svg';
import img2 from '../../img/icon2.svg';
import img3 from '../../img/icon3.svg';
import Fade from 'react-reveal/Fade';
const data = [
  {
    icon: img1,
    title: 'UX Research',
    commentCard:
      "New demos are continually added and buying a single license for Mak gives you access to all ofwhat's shown below, plus everything that will be added in the future.",
  },
  {
    icon: img2,
    title: 'Brand Design',
    commentCard:
      "New demos are continually added and buying a single license for Mak gives you access to all ofwhat's shown below, plus everything that will be added in the future.",
  },
  {
    icon: img3,
    title: 'Web Development',
    commentCard:
      "New demos are continually added and buying a single license for Mak gives you access to all ofwhat's shown below, plus everything that will be added in the future.",
  },
];
export class ToDo extends Component {
  render() {
    return (
      <div className="container py-5">
            <Fade bottom>
        <Title
          title={`What  actually 
          I love to do`}
          subTitle="Services"
        />
        </Fade>
       <Fade bottom>
       <div className="row">
          {data.map((v, i) => {
            return (
              <div className="col-md-4 col-12">
                <ToDoComponet title={`${v.title}`} img={`${v.icon}`} commentCard={`${v.commentCard}`} />
              </div>
            );
          })}
        </div>
       </Fade>
      </div>
    );
  }
}

export default ToDo;
