import { createBlock } from "@wordpress/blocks";
import { dispatch } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  store as blockEditorStore,
} from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import {
  Button,
  PanelBody,
  PanelRow,
  SelectControl,
} from "@wordpress/components";
import { API_ENDPOINTS, authors } from "../../constants/index.js";

const { URL_RANDOM_QUOTE, URL_RANDOM_BY_AUTHOR, AUTHOR_TAG } = API_ENDPOINTS;

/**
 * Renders the inspector controls for the QuoteAPIEditor block.
 *
 * @param {Object}   props               - The component props.
 * @param {string}   props.clientId      - The unique identifier of the block.
 * @param {Function} props.setAttributes - The function to set block attributes.
 * @return {JSX.Element} The rendered inspector controls.
 */

export const QuoteAPIEditorInspectorControls = (props) => {
  const { clientId, setAttributes } = props;
  const [selectedAuthor, setSelectedAuthor] = useState("");

  const DEFAULT_OPTION = {
    value: "",
    label: __("Any Author", "quote-api"),
  };
  const onClickUpdateData = () => {
    fetch(
      selectedAuthor
        ? URL_RANDOM_BY_AUTHOR.replace(AUTHOR_TAG, selectedAuthor)
        : URL_RANDOM_QUOTE
    )
      .then((response) => {
        // Check for ok status first
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        let quoteText, quoteAuthor; // Use consistent variable names

        if (selectedAuthor) {
          // Handle response from /api/authors/{author_id}
          if (data && data.quotes && data.quotes.length > 0) {
            // Select a random quote from the 'quotes' array
            const randomQuote =
              data.quotes[Math.floor(Math.random() * data.quotes.length)];
            quoteText = randomQuote.text; // Use 'text' field from the quote object
            quoteAuthor = data.author; // Use the main author name from the response
          } else {
            // Handle case where author is found but has no quotes, or error
            console.error(
              "No quotes found for selected author or invalid response:",
              data
            );
            quoteText = __("No quote found for this author.", "quote-api");
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
            quoteText = __("Could not fetch quote.", "quote-api");
            quoteAuthor = "";
          }
        }

        // Update block attributes
        setAttributes({
          citation: quoteAuthor, // Set the citation attribute
        });

        // Update the inner block (paragraph) content
        const newInnerParagraphWithQuote = [
          createBlock("core/paragraph", {
            content: quoteText, // Set the paragraph content
          }),
        ];
        dispatch(blockEditorStore).replaceInnerBlocks(
          clientId,
          newInnerParagraphWithQuote
        );
      })
      .catch((error) => {
        // Add basic error handling for the fetch itself
        console.error("Error fetching quote data:", error);
        setAttributes({ citation: "" }); // Clear citation on error
        const errorParagraph = [
          createBlock("core/paragraph", {
            content: __("Error fetching quote.", "quote-api"),
          }),
        ];
        dispatch(blockEditorStore).replaceInnerBlocks(clientId, errorParagraph);
      });
  };

  return (
    <InspectorControls>
      <PanelBody title={__("Quote settings", "quote-api")} initialOpen={true}>
        <PanelRow>
          <SelectControl
            label={__("Filter by Author", "quote-api")}
            __next40pxDefaultSize
            options={[
              DEFAULT_OPTION,
              ...authors.map(({ author_id, name }) => ({
                value: author_id,
                label: name,
              })),
            ]}
            value={DEFAULT_OPTION.key}
            onChange={(value) => {
              setSelectedAuthor(value);
            }}
          />
        </PanelRow>
        <PanelRow>
          <Button
            variant="primary"
            label={__("Update data", "quote-api")}
            onClick={onClickUpdateData}
            icon="update"
            iconPosition="left"
          >
            {__("Get random quote", "")}
          </Button>
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  );
};
