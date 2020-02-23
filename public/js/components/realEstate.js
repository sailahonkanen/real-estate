webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {};
    _this.allCities = _this.allCities.bind(_this);
    _this.allHomeTypes = _this.allHomeTypes.bind(_this);
    _this.allBedrooms = _this.allBedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: "allCities",
    value: function allCities() {
      if (this.props.globalState.populateFormsData.allCities != undefined) {
        var allCities = this.props.globalState.populateFormsData.allCities;


        console.log(allCities);

        return allCities.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "allHomeTypes",
    value: function allHomeTypes() {
      if (this.props.globalState.populateFormsData.allHomeTypes != undefined) {
        var allHomeTypes = this.props.globalState.populateFormsData.allHomeTypes;


        console.log(allHomeTypes);

        return allHomeTypes.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "allBedrooms",
    value: function allBedrooms() {
      if (this.props.globalState.populateFormsData.allBedrooms != undefined) {
        var allBedrooms = this.props.globalState.populateFormsData.allBedrooms;


        console.log(allBedrooms);

        return allBedrooms.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item,
            "+ BR"
          );
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter" },
        _react2.default.createElement(
          "div",
          { className: "inside" },
          _react2.default.createElement(
            "h4",
            null,
            "Filter"
          ),
          _react2.default.createElement(
            "select",
            { name: "city", className: "filters city", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All Locations"
            ),
            this.allCities()
          ),
          _react2.default.createElement(
            "select",
            { name: "homeType", className: "filters homeType", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All Home Types"
            ),
            this.allHomeTypes()
          ),
          _react2.default.createElement(
            "select",
            { name: "bedrooms", className: "filters bedrooms", onChange: this.props.change },
            this.allBedrooms()
          ),
          _react2.default.createElement(
            "div",
            { className: "filters price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Price"
            ),
            _react2.default.createElement("input", { type: "text", name: "min_price", className: "min-price", onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement("input", { type: "text", name: "max_price", className: "max-price", onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Floor Space"
            ),
            _react2.default.createElement("input", { type: "text", name: "min_floor_space", className: "min-floor-space", onChange: this.props.change, value: this.props.globalState.min_floor_space }),
            _react2.default.createElement("input", { type: "text", name: "max_floor_space", className: "max-floor-space", onChange: this.props.change, value: this.props.globalState.max_floor_space })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Elevator"
              ),
              _react2.default.createElement("input", { name: "elevator", value: "elevator", type: "checkbox", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Furnished"
              ),
              _react2.default.createElement("input", { name: "furnished", value: "furnished", type: "checkbox", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Garage"
              ),
              _react2.default.createElement("input", { name: "garage", value: "garage", type: "checkbox", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Gym"
              ),
              _react2.default.createElement("input", { name: "gym", value: "gym", type: "checkbox", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Sauna"
              ),
              _react2.default.createElement("input", { name: "sauna", value: "sauna", type: "checkbox", onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "logo" },
          "Logo"
        ),
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Create ads"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "About us"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Log in"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "register-btn" },
            "Register"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {};
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter did not match any listing";
      }

      return listingsData.map(function (listing, index) {
        if (_this2.props.globalState.view == 'box') {
          // THIS IS BOX VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '06/01/2020'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'far fa-square' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' m\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.bedrooms,
                          ' br'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  listing.price,
                  '\u20AC'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                  ' ',
                  listing.neighbourhood,
                  ', ',
                  listing.city
                )
              )
            )
          );
        } else {
          // THIS IS LONG VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-6', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '06/01/2020'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'far fa-square' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' m\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.bedrooms,
                          ' br'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  listing.price,
                  '\u20AC'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                  ' ',
                  listing.neighbourhood,
                  ', ',
                  listing.city
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.globalState.filteredData.length,
            ' results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fas fa-list', onClick: this.props.changeView.bind(null, "long") }),
              _react2.default.createElement('i', { className: 'fas fa-th', onClick: this.props.changeView.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.loopListings()
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'ul',
              { className: 'pages' },
              _react2.default.createElement(
                'li',
                null,
                'Prev'
              ),
              _react2.default.createElement(
                'li',
                { className: 'active' },
                '1'
              ),
              _react2.default.createElement(
                'li',
                null,
                '2'
              ),
              _react2.default.createElement(
                'li',
                null,
                '3'
              ),
              _react2.default.createElement(
                'li',
                null,
                '4'
              ),
              _react2.default.createElement(
                'li',
                null,
                '5'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Next'
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingsData = [{
    address: 'Rantatie 77',
    neighbourhood: 'Värttö',
    city: 'Oulu',
    bedrooms: 4,
    price: 27000,
    floorSpace: 300,
    homeType: 'Apartment block',
    extras: ['elevator'],
    image: 'https://d2ue5ppt0wsjaa.cloudfront.net/640x427,fit/vuokraovimedia/images/157/866/637/080/157866637080356_original.jpg'

}, {
    address: 'Koulukatu 88',
    neighbourhood: 'Keskusta',
    city: 'Oulu',
    bedrooms: 2,
    price: 700000,
    floorSpace: 1400,
    homeType: 'Apartment block',
    extras: ['elevator', 'gym'],
    image: 'https://r-cf.bstatic.com/images/hotel/max1024x768/195/195217933.jpg'

}, {
    address: 'Hietalahdenkatu 66',
    neighbourhood: 'Keskusta',
    city: 'Helsinki',
    bedrooms: 2,
    price: 50000,
    floorSpace: 300,
    homeType: 'Apartment block',
    extras: ['sauna'],
    image: 'https://r-cf.bstatic.com/images/hotel/max1024x768/763/76395384.jpg'

}, {
    address: 'Vesalankuja 7',
    neighbourhood: 'Oulunsuu',
    city: 'Oulu',
    bedrooms: 3,
    price: 159900,
    floorSpace: 82,
    homeType: 'Row house',
    extras: ['sauna', 'garage'],
    image: 'https://q-cf.bstatic.com/images/hotel/max1024x768/197/197496091.jpg'

}, {
    address: 'Hyljetie 9',
    neighbourhood: 'Metsola',
    city: 'Vantaa',
    bedrooms: 3,
    price: 228000,
    floorSpace: 60,
    homeType: 'Detached house',
    extras: ['sauna', 'furnished'],
    image: 'https://www.researchgate.net/profile/Jarek_Kurnitski/publication/228889067/figure/fig1/AS:300694818050048@1448702639384/The-object-of-the-study-is-a-typical-Finnish-detached-house.png'

}, {
    address: 'Harjalinnuntie 78',
    neighbourhood: 'Korso',
    city: 'Vantaa',
    bedrooms: 3,
    price: 256000,
    floorSpace: 70,
    homeType: 'Semi-detached house',
    extras: ['sauna'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kakaravaara.JPG/1280px-Kakaravaara.JPG'

}, {
    address: 'Linnakatu 88',
    neighbourhood: 'Keskusta',
    city: 'Joensuu',
    bedrooms: 4,
    price: 135000,
    floorSpace: 73,
    homeType: 'Row house',
    extras: ['garage'],
    image: 'https://s3-eu-west-1.amazonaws.com/wwwimages-habita-com/propertyList/616211/5b76a91eae4c9.jpg'

}, {
    address: 'Metsärinteenkatu 9',
    neighbourhood: 'Kivimaa',
    city: 'Lahti',
    bedrooms: 3,
    price: 50000,
    floorSpace: 71,
    homeType: 'Apartment block',
    extras: ['elevator'],
    image: 'https://cdn1.sacostatic.com/media/9121/hellsten-espoo-one-bedroom3.jpg'

}];

exports.default = listingsData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      listingsData: _listingsData2.default,
      city: 'All',
      homeType: 'All',
      bedrooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      furnished: false,
      sauna: false,
      gym: false,
      garage: false,
      filteredData: _listingsData2.default,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''

    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.bedrooms >= _this3.state.bedrooms;
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      if (this.state.elevator != false) {
        newData = newData.filter(function (item) {
          var elevatorSearch = item.extras.includes("elevator");
          console.log(elevatorSearch);

          return elevatorSearch == _this3.state.elevator;
        });
      }

      if (this.state.furnished != false) {
        newData = newData.filter(function (item) {
          var furnishedSearch = item.extras.includes("furnished");
          console.log(furnishedSearch);

          return furnishedSearch == _this3.state.furnished;
        });
      }

      if (this.state.sauna != false) {
        newData = newData.filter(function (item) {
          var saunaSearch = item.extras.includes("sauna");
          console.log(saunaSearch);

          return saunaSearch == _this3.state.sauna;
        });
      }

      if (this.state.gym != false) {
        newData = newData.filter(function (item) {
          var gymSearch = item.extras.includes("gym");
          console.log(gymSearch);

          return gymSearch == _this3.state.gym;
        });
      }

      if (this.state.garage != false) {
        newData = newData.filter(function (item) {
          var garageSearch = item.extras.includes("garage");
          console.log(garageSearch);

          return garageSearch == _this3.state.garage;
        });
      }

      if (this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);

          if (n != null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      //city
      var allCities = this.state.listingsData.map(function (item) {
        return item.city;
      });
      allCities = new Set(allCities);
      allCities = [].concat(_toConsumableArray(allCities));

      allCities = allCities.sort();

      //homeType
      var allHomeTypes = this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      allHomeTypes = new Set(allHomeTypes);
      allHomeTypes = [].concat(_toConsumableArray(allHomeTypes));

      allHomeTypes = allHomeTypes.sort();

      //bedrooms
      var allBedrooms = this.state.listingsData.map(function (item) {
        return item.bedrooms;
      });
      allBedrooms = new Set(allBedrooms);
      allBedrooms = [].concat(_toConsumableArray(allBedrooms));

      allBedrooms = allBedrooms.sort();

      this.setState({
        populateFormsData: {
          allHomeTypes: allHomeTypes,
          allBedrooms: allBedrooms,
          allCities: allCities
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state,
            populateAction: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData,
            change: this.change,
            globalState: this.state, changeView: this.changeView })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);