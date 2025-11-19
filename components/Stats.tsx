'use client';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

// Counter component
const Counter = ({ target, duration = 2000, startCounting }:{target: number, duration?: number, startCounting?: boolean}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const increment = target / (duration / 16); // ~60fps

    const step = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration, startCounting]);

  return <span>{count}+</span>;
};

// Stats component
const Stats = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // trigger once
        }
      },
      { threshold: 0.5 } // trigger when 50% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10">
      <div>
        <p className="text-2xl font-bold text-center">Pourquoi choisir EBHC ?</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="mt-3 px-5">
          <p className="border-b border-gray-400 text-4xl lg:text-8xl font-bold py-3">
            <Counter target={100} startCounting={visible} />
          </p>
          <p className="mt-3 lg:text-3xl font-semibold">Projets réalisés</p>
        </div>

        <div className="mt-3 px-5">
          <p className="border-b border-gray-400 text-4xl lg:text-8xl font-bold py-3">
            <Counter target={100} startCounting={visible} />
          </p>
          <p className="mt-3 lg:text-3xl font-semibold">Clients satisfaits</p>
        </div>

        <div className="mt-3 px-5">
          <p className="border-b border-gray-400 text-4xl lg:text-8xl font-bold py-3">
            <Counter target={12} startCounting={visible} />
          </p>
          <p className="mt-3 lg:text-3xl font-semibold">Années d&apos;expérience</p>
        </div>
      </div>
      <div className="flex mt-5 lg:mt-8">
        <ul className="navMenu bg-amber-50/30 backdrop-blur-md font-bold contactBtn flex space-x-2 items-center mx-auto mt-3 lg:text-3xl">
            <li><Link className="hover:underline" href="#contact">CONTACT</Link></li>
            <BsArrowUpRightCircleFill />
        </ul>
      </div>
    </section>
  );
};

export default Stats;
