import React from 'react';

import './Payment.css';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="w3-container w3-padding-32" id="payment">
          <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">
            Payment
          </h3>
          <p>Donate Today! </p>
          <div class="container">
            <br />

            <div class="row">
              <article class="card">
                <div class="card-body p-5">
                  <ul
                    class="nav bg-light nav-pills rounded nav-fill mb-3"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="pill"
                        href="#nav-tab-card"
                      >
                        <i class="fa fa-credit-card" /> Credit Card
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="pill"
                        href="#nav-tab-paypal"
                      >
                        <i class="fab fa-paypal" /> Paypal
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="pill"
                        href="#nav-tab-bank"
                      >
                        <i class="fa fa-university" /> Bank Transfer
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div class="tab-pane fade show active" id="nav-tab-card">
                      <p class="alert alert-success">
                        Some text success or error
                      </p>
                      <form role="form">
                        <div class="form-group">
                          <label for="username">Full name (on the card)</label>
                          <input
                            type="text"
                            class="form-control"
                            name="username"
                            placeholder=""
                            required=""
                          />
                        </div>

                        <div class="form-group">
                          <label for="cardNumber">Card number</label>
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              name="cardNumber"
                              placeholder=""
                            />
                            <div class="input-group-append">
                              <span class="input-group-text text-muted">
                                <i class="fab fa-cc-visa" />
                                <i class="fab fa-cc-amex" />
                                <i class="fab fa-cc-mastercard" />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-sm-8">
                            <div class="form-group">
                              <label>
                                <span class="hidden-xs">Expiration</span>{' '}
                              </label>
                              <div class="form-inline">
                                <select class="form-control" style="width:45%">
                                  <option>MM</option>
                                  <option>01 - Janurary</option>
                                  <option>02 - February</option>
                                  <option>03 - March</option>
                                  <option>04 - April</option>
                                  <option>05 - May</option>
                                  <option>06 - June</option>
                                  <option>07 - July</option>
                                  <option>08 - August</option>
                                  <option>09 - September</option>
                                  <option>10 - October</option>
                                  <option>11 - November</option>
                                  <option>12 - December</option>
                                </select>
                                <span style="width:10%; text-align: center">
                                  {' '}
                                  /{' '}
                                </span>
                                <select class="form-control" style="width:45%">
                                  <option>YY</option>
                                  <option>2017</option>
                                  <option>2018</option>
                                  <option>2019</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label
                                data-toggle="tooltip"
                                title=""
                                data-original-title="3 digits code on back side of the card"
                              >
                                CVV <i class="fa fa-question-circle" />
                              </label>
                              <input
                                class="form-control"
                                required=""
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          class="subscribe btn btn-primary btn-block"
                          type="button"
                        >
                          {' '}
                          Confirm{' '}
                        </button>
                      </form>
                    </div>
                    <div class="tab-pane fade" id="nav-tab-paypal">
                      <p>Paypal is easiest way to pay online</p>
                      <p>
                        <button type="button" class="btn btn-primary">
                          {' '}
                          <i class="fab fa-paypal" /> Log in my Paypal{' '}
                        </button>
                      </p>
                      <p>
                        <strong>Note:</strong> Paypal is not responsible for any
                        third-party payment transactions{' '}
                      </p>
                    </div>
                    <div class="tab-pane fade" id="nav-tab-bank">
                      <p>Bank account details</p>
                      <dl class="param">
                        <dt>BANK: </dt>
                        <dd> THE WORLD BANK</dd>
                      </dl>
                      <dl class="param">
                        <dt>Account number: </dt>
                        <dd> 12345678912345</dd>
                      </dl>
                      <dl class="param">
                        <dt>IBAN: </dt>
                        <dd> 123456789</dd>
                      </dl>
                      <p>
                        <strong>Note:</strong> Your bank is not responsible....{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
