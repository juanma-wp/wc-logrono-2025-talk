import { createBlock } from "@wordpress/blocks";
import { useDispatch } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { PanelBody, PanelRow, ComboboxControl } from "@wordpress/components";
import { tags } from "../../constants/index.js";

/**
 * Renders the inspector controls for the QuoteAPIFrontend block.
 *
 * @param {Object} props          - The component props.
 * @param {string} props.clientId - The unique identifier of the block.
 * @return {JSX.Element} The rendered inspector controls.
 */

export const QuoteAPIFrontendInspectorControls = (props) => {
  const {
    clientId,
    setAttributes,
    attributes: { tags: initialTags },
  } = props;

  const { replaceInnerBlocks } = useDispatch("core/block-editor");

  // Only allow one tag
  const initialTagName = initialTags
    ? (() => {
        const found = tags.find((t) => t.tag_id === initialTags);
        return found ? found.name : "";
      })()
    : "";

  const [selectedTag, setSelectedTag] = useState(initialTagName);
  const [inputValue, setInputValue] = useState(initialTagName);

  const tagNames = tags.map((tag) => tag.name);

  const onTagChange = (tagName) => {
    setSelectedTag(tagName);

    const foundTag = tags.find((tag) => tag.name === tagName);
    const tagId = foundTag ? foundTag.tag_id : "";

    // Update the placeholder paragraph
    const newInnerParagraphWithQuote = [
      createBlock("core/paragraph", {
        content: tagName
          ? `This content will be replaced in the frontend with a random quote from the tag: ${tagName}`
          : "This content will be replaced in the frontend with a random quote.",
      }),
    ];
    replaceInnerBlocks(clientId, newInnerParagraphWithQuote);

    setAttributes({
      tags: tagId,
    });
    setInputValue(tagName);
  };

  return (
    <InspectorControls>
      <PanelBody title={__("Quote settings", "quote-api")} initialOpen={true}>
        <PanelRow>
          <ComboboxControl
            label={__("Select a Tag", "quote-api")}
            value={inputValue}
            options={tagNames.map((name) => ({ label: name, value: name }))}
            onChange={onTagChange}
            onInputChange={setInputValue}
            placeholder={__("Type or select a tag", "quote-api")}
          />
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  );
};
