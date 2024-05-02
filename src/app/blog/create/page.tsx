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
    <div className='grid h-screen grid-cols-2 divide-x-2 overflow-scroll'>
      <textarea
        value={text}
        spellCheck={false}
        className='p-4 outline-none'
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className='markdown overflow-scroll bg-white p-4'>
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
  const { className, children: code } = childProps;
  const classList = className ? className.split(':') : [];
  const language = classList[0]?.replace('language', '');
  const fileName = classList[1];

  return (
    <section>
      {fileName && (
        <div className=' bg-zinc-950 px-2 text-sm italic text-white'>
          <span>{fileName}</span>
        </div>
      )}
      <SyntaxHighlighter language={language} style={darcula}>
        {code === null || code === undefined ? '' : String(code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </section>
  );
};
