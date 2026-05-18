import React, { useState, useEffect, useRef } from 'react';


// Custom hook to handle scroll-based animation
export default function useScrollAnimation (){
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        refs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            refs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return refs;
};

