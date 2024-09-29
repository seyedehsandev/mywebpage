"use client";
import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const Typing = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = new Typewriter(typewriterRef.current, {
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      });

      typewriter
        .typeString('Creating dynamic web experiences')
        .pauseFor(1500)
        .deleteAll()
        .typeString('Turning complex designs into interactive interfaces')
        .pauseFor(1500)
        .deleteAll()
        .typeString('Building the web, one line of code at a time')
        .pauseFor(1500)
        .start();
    }
  }, []);

  return (
    <div className="flex items-center h-11 pb-2">
      <h1 ref={typewriterRef} className="text-2xl md:text-3xl font-semibold"></h1>
    </div>
  );
};

export default Typing;
