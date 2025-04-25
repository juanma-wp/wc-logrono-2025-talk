/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants/authors.js":
/*!**********************************!*\
  !*** ./src/constants/authors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authors: () => (/* binding */ authors)
/* harmony export */ });
const authors = [{
  name: "Charles Bukowski",
  author_id: "Charles+Bukowski",
  link: "https://en.wikipedia.org/wiki/Charles_Bukowski"
}, {
  name: "Marcus Aurelius",
  author_id: "Marcus+Aurelius",
  link: "https://en.wikipedia.org/wiki/Marcus_Aurelius"
}, {
  name: "English proverb",
  author_id: "English+proverb",
  link: "https://en.wikipedia.org/wiki/Proverb"
}, {
  name: "Winston Churchill",
  author_id: "Winston+Churchill",
  link: "https://en.wikipedia.org/wiki/Winston_Churchill"
}, {
  name: "Abraham Lincoln",
  author_id: "Abraham+Lincoln",
  link: "https://en.wikipedia.org/wiki/Abraham_Lincoln"
}, {
  name: "Richard Bach",
  author_id: "Richard+Bach",
  link: "https://en.wikipedia.org/wiki/Richard_Bach"
}, {
  name: "Napoleon Hill",
  author_id: "Napoleon+Hill",
  link: "https://en.wikipedia.org/wiki/Napoleon_Hill"
}, {
  name: "Thomas Edison",
  author_id: "Thomas+Edison",
  link: "https://en.wikipedia.org/wiki/Thomas_Edison"
}, {
  name: "Dalai Lama",
  author_id: "Dalai+Lama",
  link: "https://en.wikipedia.org/wiki/Dalai_Lama"
}, {
  name: "Wayne Dyer",
  author_id: "Wayne+Dyer",
  link: "https://en.wikipedia.org/wiki/Wayne_Dyer"
}, {
  name: "Epictetus",
  author_id: "Epictetus",
  link: "https://en.wikipedia.org/wiki/Epictetus"
}, {
  name: "Johann Wolfgang von Goethe",
  author_id: "Johann+Wolfgang+von+Goethe",
  link: "https://en.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe"
}, {
  name: "Alan Watts",
  author_id: "Alan+Watts",
  link: "https://en.wikipedia.org/wiki/Alan_Watts"
}, {
  name: "Aristotle",
  author_id: "Aristotle",
  link: "https://en.wikipedia.org/wiki/Aristotle"
}, {
  name: "Tony Robbins",
  author_id: "Tony+Robbins",
  link: "https://en.wikipedia.org/wiki/Tony_Robbins"
}, {
  name: "Henry David Thoreau",
  author_id: "Henry+David+Thoreau",
  link: "https://en.wikipedia.org/wiki/Henry_David_Thoreau"
}, {
  name: "Benjamin Franklin",
  author_id: "Benjamin+Franklin",
  link: "https://en.wikipedia.org/wiki/Benjamin_Franklin"
}, {
  name: "Bruce Lee",
  author_id: "Bruce+Lee",
  link: "https://en.wikipedia.org/wiki/Bruce_Lee"
}, {
  name: "Kahlil Gibran",
  author_id: "Kahlil+Gibran",
  link: "https://en.wikipedia.org/wiki/Kahlil_Gibran"
}, {
  name: "William Shakespeare",
  author_id: "William+Shakespeare",
  link: "https://en.wikipedia.org/wiki/William_Shakespeare"
}, {
  name: "Woody Allen",
  author_id: "Woody+Allen",
  link: "https://en.wikipedia.org/wiki/Woody_Allen"
}, {
  name: "Eleanor Roosevelt",
  author_id: "Eleanor+Roosevelt",
  link: "https://en.wikipedia.org/wiki/Eleanor_Roosevelt"
}, {
  name: "Carl Jung",
  author_id: "Carl+Jung",
  link: "https://en.wikipedia.org/wiki/Carl_Jung"
}, {
  name: "Mark Twain",
  author_id: "Mark+Twain",
  link: "https://en.wikipedia.org/wiki/Mark_Twain"
}, {
  name: "Elbert Hubbard",
  author_id: "Elbert+Hubbard",
  link: "https://en.wikipedia.org/wiki/Elbert_Hubbard"
}, {
  name: "Mahatma Gandhi",
  author_id: "Mahatma+Gandhi",
  link: "https://en.wikipedia.org/wiki/Mahatma_Gandhi"
}];

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_ENDPOINTS: () => (/* binding */ API_ENDPOINTS),
/* harmony export */   authors: () => (/* reexport safe */ _authors__WEBPACK_IMPORTED_MODULE_0__.authors),
/* harmony export */   tags: () => (/* reexport safe */ _tags__WEBPACK_IMPORTED_MODULE_1__.tags)
/* harmony export */ });
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authors */ "./src/constants/authors.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags */ "./src/constants/tags.js");
const THEQUOTESHUB_API_URL = "https://thequoteshub.com/api";
const URL_RANDOM_QUOTE = THEQUOTESHUB_API_URL;
const URL_RANDOM_BY_AUTHOR = `${THEQUOTESHUB_API_URL}/authors/<%AUTHOR%>`; // Endpoint for fetching by author needs verification from API docs

const AUTHOR_TAG = "<%AUTHOR%>";
const API_ENDPOINTS = {
  THEQUOTESHUB_API_URL,
  URL_RANDOM_QUOTE,
  URL_RANDOM_BY_AUTHOR,
  AUTHOR_TAG
};




/***/ }),

/***/ "./src/constants/tags.js":
/*!*******************************!*\
  !*** ./src/constants/tags.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tags: () => (/* binding */ tags)
/* harmony export */ });
const tags = [{
  name: "Famous Quotes",
  tag_id: "famous-quotes"
}, {
  name: "Wisdom",
  tag_id: "wisdom"
}, {
  name: "Friendship",
  tag_id: "friendship"
}, {
  name: "Inspirational",
  tag_id: "inspirational"
}, {
  name: "Success",
  tag_id: "success"
}, {
  name: "Technology",
  tag_id: "technology"
}, {
  name: "Sports",
  tag_id: "sports"
}, {
  name: "Life",
  tag_id: "life"
}, {
  name: "Competition",
  tag_id: "competition"
}, {
  name: "Change",
  tag_id: "change"
}, {
  name: "Motivational",
  tag_id: "motivational"
}, {
  name: "Business",
  tag_id: "business"
}, {
  name: "Future",
  tag_id: "future"
}, {
  name: "Love",
  tag_id: "love"
}, {
  name: "Happiness",
  tag_id: "happiness"
}, {
  name: "History",
  tag_id: "history"
}, {
  name: "Character",
  tag_id: "character"
}, {
  name: "Humorous",
  tag_id: "humorous"
}, {
  name: "Philosophy",
  tag_id: "philosophy"
}, {
  name: "Politics",
  tag_id: "politics"
}, {
  name: "Science",
  tag_id: "science"
}, {
  name: "Film",
  tag_id: "film"
}, {
  name: "Virtue",
  tag_id: "virtue"
}, {
  name: "Freedom",
  tag_id: "freedom"
}, {
  name: "Education",
  tag_id: "education"
}, {
  name: "Truth",
  tag_id: "truth"
}, {
  name: "Religion",
  tag_id: "religion"
}, {
  name: "Self",
  tag_id: "self"
}, {
  name: "Honor",
  tag_id: "honor"
}, {
  name: "Self Help",
  tag_id: "self-help"
}, {
  name: "Faith",
  tag_id: "faith"
}, {
  name: "Spirituality",
  tag_id: "spirituality"
}, {
  name: "Social Justice",
  tag_id: "social-justice"
}, {
  name: "War",
  tag_id: "war"
}, {
  name: "Knowledge",
  tag_id: "knowledge"
}, {
  name: "Work",
  tag_id: "work"
}, {
  name: "Nature",
  tag_id: "nature"
}, {
  name: "Courage",
  tag_id: "courage"
}, {
  name: "Family",
  tag_id: "family"
}, {
  name: "Power Quotes",
  tag_id: "power-quotes"
}, {
  name: "Imagination",
  tag_id: "imagination"
}, {
  name: "Perseverance",
  tag_id: "perseverance"
}, {
  name: "Literature",
  tag_id: "literature"
}, {
  name: "Conservative",
  tag_id: "conservative"
}, {
  name: "Time",
  tag_id: "time"
}, {
  name: "Pain",
  tag_id: "pain"
}, {
  name: "Leadership",
  tag_id: "leadership"
}, {
  name: "Mathematics",
  tag_id: "mathematics"
}, {
  name: "Ethics",
  tag_id: "ethics"
}, {
  name: "Society",
  tag_id: "society"
}, {
  name: "Tolerance",
  tag_id: "tolerance"
}, {
  name: "Stupidity",
  tag_id: "stupidity"
}, {
  name: "Weakness",
  tag_id: "weakness"
}, {
  name: "Generosity",
  tag_id: "generosity"
}, {
  name: "Gratitude",
  tag_id: "gratitude"
}, {
  name: "Age",
  tag_id: "age"
}, {
  name: "Sadness",
  tag_id: "sadness"
}, {
  name: "Opportunity",
  tag_id: "opportunity"
}, {
  name: "Failure",
  tag_id: "failure"
}, {
  name: "Health",
  tag_id: "health"
}, {
  name: "Wellness",
  tag_id: "wellness"
}, {
  name: "Creativity",
  tag_id: "creativity"
}, {
  name: "Genius",
  tag_id: "genius"
}, {
  name: "Proverb",
  tag_id: "proverb"
}, {
  name: "Humor",
  tag_id: "humor"
}, {
  name: "Athletics",
  tag_id: "athletics"
}, {
  name: "god",
  tag_id: "god"
}, {
  name: "people",
  tag_id: "people"
}, {
  name: "hope",
  tag_id: "hope"
}, {
  name: "quotes",
  tag_id: "quotes"
}, {
  name: "writing",
  tag_id: "writing"
}, {
  name: "death",
  tag_id: "death"
}, {
  name: "romance",
  tag_id: "romance"
}, {
  name: "inspiration",
  tag_id: "inspiration"
}, {
  name: "change",
  tag_id: "change"
}, {
  name: "funny",
  tag_id: "funny"
}, {
  name: "world",
  tag_id: "world"
}, {
  name: "relationships",
  tag_id: "relationships"
}, {
  name: "fear",
  tag_id: "fear"
}, {
  name: "dreams",
  tag_id: "dreams"
}, {
  name: "purpose",
  tag_id: "purpose"
}, {
  name: "books",
  tag_id: "books"
}, {
  name: "art",
  tag_id: "art"
}, {
  name: "women",
  tag_id: "women"
}, {
  name: "peace",
  tag_id: "peace"
}, {
  name: "me",
  tag_id: "me"
}];

/***/ }),

/***/ "./src/variations/quote-api-editor/index.js":
/*!**************************************************!*\
  !*** ./src/variations/quote-api-editor/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerQuoteAPIEditorVariation: () => (/* binding */ registerQuoteAPIEditorVariation)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspectorControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspectorControls.js */ "./src/variations/quote-api-editor/inspectorControls.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const quoteApiEditorVariationSettings = {
  name: "quote-api-editor",
  description: 'A "core/quote" block variation that displays a random quote from the Quotable API',
  title: "Quote API Editor",
  scope: ["block", "inserter", "transform"],
  keywords: ["quote"],
  icon: "universal-access",
  attributes: {
    namespace: "quote-api-editor"
  },
  isActive: ["namespace"]
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)("core/quote", quoteApiEditorVariationSettings);

/**
 * Check if the block is the "quote-api" variation
 * @param {Object} props
 */
const isQuoteAPIEditorVariation = props => {
  const {
    attributes: {
      namespace
    }
  } = props;
  return namespace && namespace === "quote-api-editor";
};

/**
 * Adds inspector controls to the BlockEdit component.
 *
 * @param {Function} BlockEdit - The BlockEdit component.
 * @return {Function} - A modified version of the BlockEdit component with added inspector controls.
 */
function addInspectorControls(BlockEdit) {
  return props => {
    if (!isQuoteAPIEditorVariation(props)) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockEdit, {
        ...props
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inspectorControls_js__WEBPACK_IMPORTED_MODULE_2__.QuoteAPIEditorInspectorControls, {
        ...props
      })]
    });
  };
}

/**
 * Register the "quote-api" block variation
 */
const registerQuoteAPIEditorVariation = () => {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)("core/quote", quoteApiEditorVariationSettings);
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)("editor.BlockEdit", "quote-api-editor/add-inspector-controls", addInspectorControls);
};

/***/ }),

/***/ "./src/variations/quote-api-editor/inspectorControls.js":
/*!**************************************************************!*\
  !*** ./src/variations/quote-api-editor/inspectorControls.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuoteAPIEditorInspectorControls: () => (/* binding */ QuoteAPIEditorInspectorControls)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/index.js */ "./src/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const {
  URL_RANDOM_QUOTE,
  URL_RANDOM_BY_AUTHOR,
  AUTHOR_TAG
} = _constants_index_js__WEBPACK_IMPORTED_MODULE_6__.API_ENDPOINTS;

/**
 * Renders the inspector controls for the QuoteAPIEditor block.
 *
 * @param {Object}   props               - The component props.
 * @param {string}   props.clientId      - The unique identifier of the block.
 * @param {Function} props.setAttributes - The function to set block attributes.
 * @return {JSX.Element} The rendered inspector controls.
 */

const QuoteAPIEditorInspectorControls = props => {
  const {
    clientId,
    setAttributes
  } = props;
  const [selectedAuthor, setSelectedAuthor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)("");
  const DEFAULT_OPTION = {
    value: "",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Any Author", "quote-api")
  };
  const onClickUpdateData = () => {
    fetch(selectedAuthor ? URL_RANDOM_BY_AUTHOR.replace(AUTHOR_TAG, selectedAuthor) : URL_RANDOM_QUOTE).then(response => {
      // Check for ok status first
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    }).then(data => {
      let quoteText, quoteAuthor; // Use consistent variable names

      if (selectedAuthor) {
        // Handle response from /api/authors/{author_id}
        if (data && data.quotes && data.quotes.length > 0) {
          // Select a random quote from the 'quotes' array
          const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
          quoteText = randomQuote.text; // Use 'text' field from the quote object
          quoteAuthor = data.author; // Use the main author name from the response
        } else {
          // Handle case where author is found but has no quotes, or error
          console.error("No quotes found for selected author or invalid response:", data);
          quoteText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("No quote found for this author.", "quote-api");
          quoteAuthor = selectedAuthor.replace(/\+/g, " "); // Display selected author name nicely
        }
      } else {
        // Handle response from /api (random quote)
        if (data && data.text && data.author) {
          quoteText = data.text; // Use 'text' field from the response
          quoteAuthor = data.author; // Use 'author' field from the response
        } else {
          // Handle error in random quote response
          console.error("Invalid response for random quote:", data);
          quoteText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Could not fetch quote.", "quote-api");
          quoteAuthor = "";
        }
      }

      // Update block attributes
      setAttributes({
        citation: quoteAuthor // Set the citation attribute
      });

      // Update the inner block (paragraph) content
      const newInnerParagraphWithQuote = [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)("core/paragraph", {
        content: quoteText // Set the paragraph content
      })];
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store).replaceInnerBlocks(clientId, newInnerParagraphWithQuote);
    }).catch(error => {
      // Add basic error handling for the fetch itself
      console.error("Error fetching quote data:", error);
      setAttributes({
        citation: ""
      }); // Clear citation on error
      const errorParagraph = [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)("core/paragraph", {
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Error fetching quote.", "quote-api")
      })];
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store).replaceInnerBlocks(clientId, errorParagraph);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Quote settings", "quote-api"),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Filter by Author", "quote-api"),
          __next40pxDefaultSize: true,
          options: [DEFAULT_OPTION, ..._constants_index_js__WEBPACK_IMPORTED_MODULE_6__.authors.map(({
            author_id,
            name
          }) => ({
            value: author_id,
            label: name
          }))],
          value: DEFAULT_OPTION.key,
          onChange: value => {
            setSelectedAuthor(value);
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "primary",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Update data", "quote-api"),
          onClick: onClickUpdateData,
          icon: "update",
          iconPosition: "left",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Get random quote", "")
        })
      })]
    })
  });
};

/***/ }),

/***/ "./src/variations/quote-api-frontend/index.js":
/*!****************************************************!*\
  !*** ./src/variations/quote-api-frontend/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerQuoteAPIFrontendVariation: () => (/* binding */ registerQuoteAPIFrontendVariation)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspectorControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspectorControls.js */ "./src/variations/quote-api-frontend/inspectorControls.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const quoteApiFrontendVariationSettings = {
  name: 'quote-api-frontend',
  description: 'A "core/quote" block variation that displays a random quote from the Quotable API in the Frontend',
  title: 'Quote API Frontend',
  scope: ['block', 'inserter', 'transform'],
  icon: 'universal-access-alt',
  keywords: ['quote'],
  innerBlocks: [{
    name: 'core/paragraph',
    attributes: {
      content: 'This content will be replaced in the frontend with a random quote'
    }
  }],
  attributes: {
    namespace: 'quote-api-frontend'
  },
  isActive: ['namespace']
};

/**
 * Check if the block is the "quote-api" variation
 * @param {Object} props
 */
const isQuoteAPIFrontendVariation = props => {
  const {
    attributes: {
      namespace
    }
  } = props;
  return namespace && namespace === 'quote-api-frontend';
};

/**
 * Adds inspector controls to the BlockEdit component.
 *
 * @param {Function} BlockEdit - The BlockEdit component.
 * @return {Function} - A modified version of the BlockEdit component with added inspector controls.
 */
function addInspectorControls(BlockEdit) {
  return props => {
    if (!isQuoteAPIFrontendVariation(props)) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockEdit, {
        ...props
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inspectorControls_js__WEBPACK_IMPORTED_MODULE_2__.QuoteAPIFrontendInspectorControls, {
        ...props
      })]
    });
  };
}

/**
 * Register the "quote-api" block variation
 */
const registerQuoteAPIFrontendVariation = () => {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/quote', quoteApiFrontendVariationSettings);
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'quote-api-editor/add-inspector-controls', addInspectorControls);
};

/***/ }),

/***/ "./src/variations/quote-api-frontend/inspectorControls.js":
/*!****************************************************************!*\
  !*** ./src/variations/quote-api-frontend/inspectorControls.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuoteAPIFrontendInspectorControls: () => (/* binding */ QuoteAPIFrontendInspectorControls)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/index.js */ "./src/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








/**
 * Renders the inspector controls for the QuoteAPIFrontend block.
 *
 * @param {Object} props          - The component props.
 * @param {string} props.clientId - The unique identifier of the block.
 * @return {JSX.Element} The rendered inspector controls.
 */

const QuoteAPIFrontendInspectorControls = props => {
  const {
    clientId,
    setAttributes,
    attributes: {
      tags: initialTags
    }
  } = props;
  const {
    replaceInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)("core/block-editor");
  const [selectedTags, setSelectedTags] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(initialTags ? initialTags.split("|") : []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Quote settings", "quote-api"),
      initialOpen: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.FormTokenField, {
          __nextHasNoMarginBottom: true,
          label: "Type a Tag",
          onChange: selectedNames => {
            setSelectedTags(selectedNames);
            const selectedTagIds = selectedNames.map(name => {
              const foundTag = _constants_index_js__WEBPACK_IMPORTED_MODULE_6__.tags.find(tag => tag.name === name);
              return foundTag ? foundTag.tag_id : null;
            }).filter(id => id !== null);
            const tagIdsString = selectedTagIds.join("|");
            const newInnerParagraphWithQuote = [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)("core/paragraph", {
              metadata: {
                bindings: {
                  content: {
                    source: "qa/random-quote-tags",
                    args: {
                      tags: tagIdsString
                    }
                  }
                }
              },
              content: "This content will be replaced in the frontend with a random quote from either of the tags: " + selectedNames.join(", ")
            })];
            replaceInnerBlocks(clientId, newInnerParagraphWithQuote);
            setAttributes({
              tags: tagIdsString
            });
          },
          suggestions: _constants_index_js__WEBPACK_IMPORTED_MODULE_6__.tags.map(tag => tag.name),
          value: selectedTags
        })
      })
    })
  });
};

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variations_quote_api_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variations/quote-api-editor */ "./src/variations/quote-api-editor/index.js");
/* harmony import */ var _variations_quote_api_frontend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations/quote-api-frontend */ "./src/variations/quote-api-frontend/index.js");




/**
 * Add the "namespace" attribute to "core/quote" block
 * @param {Object} settings
 */
function addAttributes(settings) {
  if ('core/quote' !== settings.name) {
    return settings;
  }
  const extraAttributes = {
    namespace: {
      type: 'string'
    },
    tags: {
      type: 'string'
    }
  };
  const __experimentalBorder = {
    color: true,
    radius: true,
    style: true,
    width: true,
    __experimentalDefaultControls: {
      color: true,
      radius: true,
      style: true,
      width: true
    }
  };
  const newSettings = {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...extraAttributes
    },
    supports: {
      ...settings.supports,
      __experimentalBorder,
      shadow: true
    }
  };
  return newSettings;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'quote-api/add-attributes', addAttributes);
(0,_variations_quote_api_editor__WEBPACK_IMPORTED_MODULE_1__.registerQuoteAPIEditorVariation)();
(0,_variations_quote_api_frontend__WEBPACK_IMPORTED_MODULE_2__.registerQuoteAPIFrontendVariation)();
/******/ })()
;
//# sourceMappingURL=index.js.map