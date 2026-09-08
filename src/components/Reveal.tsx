import { createElement, type ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export default function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const { ref, isInView } = useInView<HTMLElement>();

  return createElement(
    as,
    {
      ref,
      className: `reveal ${isInView ? 'is-visible' : ''} ${className}`,
      style: { transitionDelay: `${delay}ms` },
    },
    children
  );
}
