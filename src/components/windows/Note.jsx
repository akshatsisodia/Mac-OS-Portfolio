import React, { useState } from 'react'
import "./note.scss";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect } from 'react';
import Markdown from 'react-markdown';
import MacWindow from './MacWindow';

const Note = () => {
    const [markDown, setMarkDown] = useState(null);

    useEffect(()=>{
        fetch('./note.txt')
        .then((res)=> res.text())
        .then((text)=> setMarkDown(text));
    },[])
  return (
    <MacWindow>
        <div className="note">
            {markDown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markDown}</SyntaxHighlighter>: "Loading...."}
        </div>
    </MacWindow>
  )
}

export default Note