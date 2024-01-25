import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import PlatingAnimation from './views/PlatingAnimation';
import ContentView from './views/ContentView';

function App() {
  const [scrollDown, setScrollDown] = useState<boolean>(false)
  const [viewHeight, setViewHeight] = useState<number>(window.innerHeight)

  const mainRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const scrollToInput = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleclickScrolldown = () => {
    setScrollDown(!scrollDown);
    scrollToInput()
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    setViewHeight(window.innerHeight)
  }, [window.innerHeight])

  return (
    <div className='main-wrapper'>
      <div ref={mainRef} style={{ height: viewHeight }}>
        <PlatingAnimation onClick={handleclickScrolldown} />
      </div>
      <div ref={contentRef} style={{ height: viewHeight }}>
        <ContentView />
      </div>
    </div>
  );
}

export default App;
