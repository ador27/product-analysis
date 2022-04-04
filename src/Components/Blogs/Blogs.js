import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h2 className='blogs'>Blogs Page</h2>
            <div className='blog'>
                <h4>Question: What is context API?</h4>
                <p>Answer: The context API is a react structure that enables to exchange unique details from all levels of a application. The React Context API is a way for a React app to effectively produce global variables that can be passed around. Redux is great and came perfectly to answer the need for state management.  Context is also touted as an easier, lighter approach to state management using Redux.</p>

            </div>
            <div className='blog'>
                <h4>Question: What is semantic tag?</h4>
                <p>Answer: Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. The benefit of writing semantic HTML stems from what should be the driving goal of any web page: the desire to communicate. By adding semantic tags to your document, you provide additional information about that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meaning of a page and its content is. </p>

            </div>

            <div className='blog'>
                <h4>Question: Inline block or Inline block elements.</h4>
                <p>Answer: The inline-block value for display is a classic! It’s not new and browser support is certainly not something you need to worry about. I’m sure many of us reach for it intuitively. But let’s put a point on it. A block-level element always starts on a new line, and the browsers automatically add some space a margin before and after the element.</p>

            </div>
        </div>
    );
};

export default Blogs;