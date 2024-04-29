'use client';
import type { ClassAttributes, HTMLAttributes } from 'react';
import { useState } from 'react';
import type { ExtraProps } from 'react-markdown';
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm';

const CreateBlog = () => {
  const [text, setText] = useState('');

  return (
    <div className='grid grid-cols-2'>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className=''
      />
      <div className='markdown'>
        <Markdown remarkPlugins={[remarkGfm]} components={{ pre: Pre }}>
          {text}
        </Markdown>
      </div>
    </div>
  );
};
export default CreateBlog;

const Pre = ({ children, ...props }: ClassAttributes<HTMLPreElement> & HTMLAttributes<HTMLPreElement> & ExtraProps) => {
  if (!children || typeof children !== 'object') {
    return <code {...props}>{children}</code>;
  }
  const childType = 'type' in children ? children.type : '';
  if (childType !== 'code') {
    return <code {...props}>{children}</code>;
  }

  const childProps = 'props' in children ? children.props : {};
  const { children: code } = childProps;

  return <SyntaxHighlighter style={darcula}>{String(code).replace(/\n$/, '')}</SyntaxHighlighter>;
};
