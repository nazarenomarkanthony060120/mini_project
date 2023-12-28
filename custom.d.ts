// Update your IntrinsicElements declaration

declare namespace JSX {
  interface IntrinsicElements {
    marquee: React.HTMLAttributes<HTMLMarqueeElement> & {
      direction?: string;
      scrollamount?: string;
      bgcolor?: string;
    };
  }
}
