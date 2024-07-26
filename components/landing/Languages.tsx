import NextImage from 'next/image';
import type { Variants } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { AnimatedTitle } from '@/components/motion/AnimatedTitle';
import { AnimatedList, AnimatedListItem } from '@/components/motion/AnimatedList';


const images = [
  { src: '/budget.png', alt: 'Budget Image', title: 'Budget' },
  { src: '/savings.png', alt: 'Savings Image', title: 'Savings' },
  { src: '/investment.png', alt: 'Investment Image', title: 'Investment' },
  { src: '/retirement-plan.png', alt: 'Retirement Plan Image', title: 'Planning' },
];


const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
  hidden: { opacity: 0 },
};


const item = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  hidden: { opacity: 0, scale: 0.4 },
};

export function Languages() {
  return (
    <section className="space-y-10 px-4 py-8 sm:px-[10%] md:py-20">
      <AnimatedTitle>
        <h2 className="heading-section">
          Dive into our <span className="text-highlight-depth">Modules</span>
        </h2>
      </AnimatedTitle>
      <div className="mx-auto max-w-screen-lg">
        <AnimatedList className="flex flex-wrap justify-center gap-2 text-center lg:gap-4" variants={list}>
          {images.map(({ src, alt, title }, index) => (
            <AnimatedListItem key={title} className={`basis-28 md:basis-40 ${index > 0 ? 'ml-10' : ''}`} variants={item}>
              <Button
                variant="ghost"
                size="lg"
                className="size-full flex-wrap bg-secondary/10 px-1 pb-9 transition active:scale-95 lg:text-base"
              >
                <AspectRatio ratio={1} className="aspect-w-1 aspect-h-1 bg-pink-300 rounded-md overflow-hidden">
                  <NextImage src={src} alt={alt} layout="fill" objectFit="cover" className="rounded-md" />
                </AspectRatio>
                <span>{title}</span>
              </Button>
            </AnimatedListItem>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
}
