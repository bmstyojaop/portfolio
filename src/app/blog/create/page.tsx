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
    <div className='grid h-screen grid-cols-2'>
      <textarea
        value={text}
        spellCheck={false}
        className='outline-none'
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className='markdown bg-slate-800 text-white'>
        <Markdown remarkPlugins={[remarkGfm]} components={{ pre: Pre }} className='text-white'>
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
  const { className, children: code } = childProps;
  const language = className?.replace('language-', '');

  return (
    <SyntaxHighlighter language={language} style={darcula}>
      {String(code).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
};
