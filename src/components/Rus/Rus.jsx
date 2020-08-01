import React from 'react';

import './Rus.css';

class Rus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div classNameName="Rus">
        <head>
          <title> Organization Search </title>
          <meta charset="UTF-8" />
          <link rel="stylesheet" href="format.css" />
          {/* <script src="script.js"></script> */}
          <link
            rel="stylesheet"
            href="https://www.w3schools.com/w3css/4/w3.css"
          />
          <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          {/* <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"
          />
        </head>
        {/* 
        
         */}
        <div>
          <h1 element className="content">
            {' '}
            About{' '}
          </h1>

          <p
          //   style="font-size: 25px; color: black; padding: 20px;"
          >
            {' '}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            sit hic, officiis nam laudantium molestiae omnis magnam,
            exercitationem odio ducimus, possimus ea mollitia dolorem velit!
            Quasi explicabo maiores fugit at! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Optio distinctio eaque fugit quisquam
            tempore, atque illum esse facilis repellendus deserunt, quos
            excepturi tempora voluptate debitis doloribus, quaerat nam a eos!
          </p>
        </div>
        {/* 
        
        */}
        <div className="row">
          <div className="column">
            <h1 element className="content">
              {' '}
              Toy Drive{' '}
            </h1>
            <p
            // style="font-size: 25px; color: black"
            >
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt itaque commodi sit quasi voluptatum adipisci ipsa ad
              fugiat iste, porro vel officia neque natus distinctio labore
              accusantium soluta sequi?
            </p>
            <img
              // style="padding: 20px 20px;"
              src="toyDrive.jpg"
              alt="Toy IMG"
            />
            <div>
              <button className="button"> Donate </button>
              <button className="button"> Finanical Info </button>
            </div>

            <br />

            <h1 element className="content">
              {' '}
              Food Drive{' '}
            </h1>
            <p
            // style="font-size: 25px; color: black"
            >
              {' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
              doloribus et cum asperiores at magni laudantium vitae blanditiis
              in deserunt aliquid, itaque veniam quam quae quidem! Error rerum
              eveniet recusandae.
            </p>
            <img src="food.jpg" alt="food" element id="rotate" />
            <br />
            <div>
              <button className="button"> Donate </button>
              <button className="button"> Finanical Info </button>
            </div>
          </div>

          <div element className="column">
            <h1 element className="content">
              Renovation
            </h1>
            <p
            // style="font-size: 25px; color: black"
            >
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              id, perferendis recusandae amet eligendi facilis assumenda
              consequuntur quae doloribus beatae non! Ex vitae vel sint id
              porro. Repellendus, nobis maiores!
            </p>
            <img src="reno.jpg" alt="Picture" element id="rotate" />
            <br />
            <div>
              <button className="button"> Donate </button>
              <button className="button"> Finanical Info </button>
            </div>

            <br />

            <h1 element className="content">
              Community Service
            </h1>
            <p
            // style="font-size: 25px; color: black"
            >
              {' '}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              reprehenderit vitae velit. Facilis eos repudiandae iste, atque
              assumenda porro veniam, consequatur deserunt saepe quam,
              voluptatibus sit aut culpa magni ipsam?{' '}
            </p>
            <img src="serve.jpg" alt="IMG" element id="rotate" />
            <br />
            <div>
              <button className="button"> Donate </button>
              <button className="button"> Finanical Info </button>
            </div>
          </div>

          <div element className="column">
            <h1 element className="content">
              Foundation
            </h1>
            <p
            // style="font-size: 25px; color: black"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              eligendi nesciunt laborum iure voluptatibus veritatis, eos magni
              omnis iusto corporis rerum culpa quod itaque aperiam dicta.
              Dignissimos dolores quisquam veritatis!
            </p>
            <img src="money.jpg" alt="IMG" element id="rotate" />
            <br />
            <div>
              <button className="button"> Donate </button>
              <button className="button"> Finanical Info </button>
            </div>

            <br />

            <h1 element className="content">
              Bail Fund
            </h1>
            <p
            // style="font-size: 25px; color: black"
            >
              {' '}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
              voluptas quisquam debitis aspernatur consectetur, quaerat modi
              atque quod officiis et temporibus dolorem a impedit totam
              voluptate. A praesentium illo beatae!{' '}
            </p>
            <img src="bail.png" alt="IMG" element id="rotate" />
            <br />
            <div>
              <button className="button"> Donate </button>
              <button className="button"> Finanical Info </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rus;
