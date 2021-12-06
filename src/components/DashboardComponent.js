import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderUser from "./layouts/HeaderUser";
import image1 from "./../assets/images/1.jfif";
import image2 from "./../assets/images/2.jfif";

export default class DashboardComponent extends Component {
  render() {
    return (
      <div>
        <HeaderUser />
        <div class="container-fluid p-5">
          <div className="row">
            <div class="col-xs-12 col-md-6">
              <div class="prod-info-main prod-wrap clearfix">
                <div class="row">
                  <div class="col-md-5 col-sm-12 col-xs-12">
                    <div class="product-image">
                      <img
                        src={image1}
                        class="img-responsive"
                        width="260"
                        height="250"
                      />
                      <span class="tag2 hot">HOT</span>
                    </div>
                  </div>
                  <div class="col-md-7 col-sm-12 col-xs-12">
                    <div class="product-deatil">
                      <h5 class="name">
                        <a href="#">John Deere Filter Pack</a>
                        <a href="#">
                          <span>Filter</span>
                        </a>
                      </h5>
                      <p class="price-container">
                        <span>$499</span>
                      </p>
                      <span class="tag1"></span>
                    </div>
                    <div class="description">
                      <p>In Stock </p>
                    </div>
                    <div class="product-info smart-form">
                      <div class="row">
                        <div class="col-md-12">
                          <Link to="/verifyPayment" class="btn btn-danger">
                            Buy
                          </Link>
                          <a href="javascript:void(0);" class="btn btn-info">
                            More info
                          </a>
                        </div>
                        <div class="col-md-12">
                          <div class="rating">
                            Rating:
                            <label for="stars-rating-5">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-4">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-3">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-2">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                            <label for="stars-rating-1">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="prod-info-main prod-wrap clearfix">
                <div class="row">
                  <div class="col-md-5 col-sm-12 col-xs-12">
                    <div class="product-image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMKobK2Z0kpiZMA3dIrPghEYTZDMyEeV-dA&usqp=CAU"
                        alt="194x228"
                        width="260"
                        height="250"
                        class="img-responsive"
                      />
                      <span class="tag2 hot">HOT</span>
                    </div>
                  </div>
                  <div class="col-md-7 col-sm-12 col-xs-12">
                    <div class="product-deatil">
                      <h5 class="name">
                        <a href="#">
                          John Deere Filter <span>Filter</span>
                        </a>
                      </h5>
                      <p class="price-container">
                        <span>$149</span>
                      </p>
                      <span class="tag1"></span>
                    </div>
                    <div class="description">
                      <p>16 items left</p>
                    </div>
                    <div class="product-info smart-form">
                      <div class="row">
                        <div class="col-md-12">
                          <Link to="/verifyPayment" class="btn btn-danger">
                            Buy
                          </Link>
                          <a href="javascript:void(0);" class="btn btn-info">
                            More info
                          </a>
                        </div>
                        <div class="col-md-12">
                          <div class="rating">
                            Rating:
                            <label for="stars-rating-5">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-4">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-3">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-2">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                            <label for="stars-rating-1">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="prod-info-main prod-wrap clearfix">
                <div class="row">
                  <div class="col-md-5 col-sm-12 col-xs-12">
                    <div class="product-image">
                      <img
                        src={image2}
                        alt="194x228"
                        width="260"
                        height="250"
                        class="img-responsive"
                      />
                      <span class="tag3 special">Special</span>
                    </div>
                  </div>
                  <div class="col-md-7 col-sm-12 col-xs-12">
                    <div class="product-deatil">
                      <h5 class="name">
                        <a href="#">
                          Mechanical Gauge <span>Gauge</span>
                        </a>
                      </h5>
                      <p class="price-container">
                        <span>$699</span>
                      </p>
                      <span class="tag1"></span>
                    </div>
                    <div class="description">
                      <p>12 items left </p>
                    </div>
                    <div class="product-info smart-form">
                      <div class="row">
                        <div class="col-md-12">
                          <Link to="/verifyPayment" class="btn btn-danger">
                            Buy
                          </Link>
                          <a href="javascript:void(0);" class="btn btn-info">
                            More info
                          </a>
                        </div>
                        <div class="col-md-12">
                          <div class="rating">
                            Rating:
                            <label for="stars-rating-5">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-4">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-3">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-2">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                            <label for="stars-rating-1">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="prod-info-main prod-wrap clearfix">
                <div class="row">
                  <div class="col-md-5 col-sm-12 col-xs-12">
                    <div class="product-image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgVVIGMfUvXlzw7IqOIzRi4HEPwQHhS3-JA&usqp=CAU"
                        alt="194x228"
                        width="260"
                        height="250"
                        class="img-responsive"
                      />
                      <span class="tag2 sale">SALE</span>
                    </div>
                  </div>
                  <div class="col-md-7 col-sm-12 col-xs-12">
                    <div class="product-deatil">
                      <h5 class="name">
                        <a href="#">
                          Grease-Gard <span>Grease</span>
                        </a>
                      </h5>
                      <p class="price-container">
                        <span>$449</span>
                      </p>
                      <span class="tag1"></span>
                    </div>
                    <div class="description">
                      <p>3 items left </p>
                    </div>
                    <div class="product-info smart-form">
                      <div class="row">
                        <div class="col-md-12">
                          <Link to="/verifyPayment" class="btn btn-danger">
                            Buy
                          </Link>
                          <a href="javascript:void(0);" class="btn btn-info">
                            More info
                          </a>
                        </div>
                        <div class="col-md-12">
                          <div class="rating">
                            Rating:
                            <label for="stars-rating-5">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-4">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-3">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-2">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                            <label for="stars-rating-1">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-md-6">
              <div class="prod-info-main prod-wrap clearfix">
                <div class="row">
                  <div class="col-md-5 col-sm-12 col-xs-12">
                    <div class="product-image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTcTncoQ4j3kRzlRQL29tzCQkvfU7BY1ykw&usqp=CAU"
                        alt="194x228"
                        width="260"
                        height="250"
                        class="img-responsive"
                      />
                      <span class="tag2 sale">SALE</span>
                    </div>
                  </div>
                  <div class="col-md-7 col-sm-12 col-xs-12">
                    <div class="product-deatil">
                      <h5 class="name">
                        <a href="#">
                          Lithium Grease Gaurd <span>Grease</span>
                        </a>
                      </h5>
                      <p class="price-container">
                        <span>$449</span>
                      </p>
                      <span class="tag1"></span>
                    </div>
                    <div class="description">
                      <p>In Stock</p>
                    </div>
                    <div class="product-info smart-form">
                      <div class="row">
                        <div class="col-md-12">
                          <Link to="/verifyPayment" class="btn btn-danger">
                            Buy
                          </Link>
                          <a href="javascript:void(0);" class="btn btn-info">
                            More info
                          </a>
                        </div>
                        <div class="col-md-12">
                          <div class="rating">
                            Rating:
                            <label for="stars-rating-5">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-4">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-3">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-2">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                            <label for="stars-rating-1">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-md-6">
              <div class="prod-info-main prod-wrap clearfix">
                <div class="row">
                  <div class="col-md-5 col-sm-12 col-xs-12">
                    <div class="product-image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0R1J7PcafpHi-rxhjcNRxo-Y6iCqfK6AbhA&usqp=CAU"
                        alt="194x228"
                        width="260"
                        height="250"
                        class="img-responsive"
                      />
                      <span class="tag2 sale">SALE</span>
                    </div>
                  </div>
                  <div class="col-md-7 col-sm-12 col-xs-12">
                    <div class="product-deatil">
                      <h5 class="name">
                        <a href="#">
                          John Deere Filter Oil and Grease Combo Pack{" "}
                          <span>Filter & Grease</span>
                        </a>
                      </h5>
                      <p class="price-container">
                        <span>$1999</span>
                      </p>
                      <span class="tag1"></span>
                    </div>
                    <div class="description">
                      <p>19 items left </p>
                    </div>
                    <div class="product-info smart-form">
                      <div class="row">
                        <div class="col-md-12">
                          <Link to="/verifyPayment" class="btn btn-danger">
                            Buy
                          </Link>
                          <a href="javascript:void(0);" class="btn btn-info">
                            More info
                          </a>
                        </div>
                        <div class="col-md-12">
                          <div class="rating">
                            Rating:
                            <label for="stars-rating-5">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-4">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-3">
                              <i class="fa fa-star text-danger"></i>
                            </label>
                            <label for="stars-rating-2">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                            <label for="stars-rating-1">
                              <i class="fa fa-star text-warning"></i>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
