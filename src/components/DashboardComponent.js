import React, { Component } from "react";
import HeaderUser from "./layouts/HeaderUser";

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
                        src="data:image/jpeg;base64,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"
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
                          <a href="javascript:void(0);" class="btn btn-danger">
                            Add to cart
                          </a>
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
                          <a href="javascript:void(0);" class="btn btn-danger">
                            Add to cart
                          </a>
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
                        src="data:image/jpeg;base64,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"
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
                          <a href="javascript:void(0);" class="btn btn-danger">
                            Add to cart
                          </a>
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
                          <a href="javascript:void(0);" class="btn btn-danger">
                            Add to cart
                          </a>
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
                          <a href="javascript:void(0);" class="btn btn-danger">
                            Add to cart
                          </a>
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
                          <a href="javascript:void(0);" class="btn btn-danger">
                            Add to cart
                          </a>
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
