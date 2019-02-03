import React from 'react';
import PropTypes, { ReactNodeLike } from 'prop-types';

export const HTMLContent = ({ content, className }: ContentProps) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content, className }: ContentProps) => (
  <div className={className}>{content}</div>
);

interface ContentProps {
  content: string;
  className: string;
}

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
