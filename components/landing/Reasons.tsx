import { Atom, Earth, Orbit, Trophy, Zap } from 'lucide-react'
import { AnimatedTitle } from '@/components/motion/AnimatedTitle'
import { ReasonsItem } from '@/components/landing/ReasonsItem'

export function Reasons() {
  return (
    <section className="space-y-28 px-1 pb-1">
      <AnimatedTitle>
        <h2 className="heading-section">
          The <span className="text-highlight-depth">future</span> of{' '}
          <span className="relative inline-block before:absolute before:-bottom-0 before:-right-[0.6em] before:-z-1 before:size-[1.375em] before:rounded-full before:bg-primary-light/60">
            learning
          </span>
        </h2>
      </AnimatedTitle>
      <ul className="space-y-1 text-2xl sm:text-3xl md:text-4xl">
        <li>
          <ReasonsItem
            className="text-primary-dark bg-primary/80 hover:bg-primary/65 dark:hover:bg-primary"
            reason="User-Friendly Interface: Intuitive design for seamless navigation"
          >
            <Zap />
          </ReasonsItem>
        </li>
        <li>
          <ReasonsItem
            className="bg-secondary/60 text-secondary-depth hover:bg-secondary/40 dark:bg-secondary/85 dark:hover:bg-secondary"
            reason="Engagement: Interactive features keep users captivated"
            delay={0.2}
          >
            <Atom />
          </ReasonsItem>
        </li>
        <li>
          <ReasonsItem
            reason="Learning Progress Tracking: Monitor progress effortlessly 
            with built-in tools"
            className="bg-highlight/60 text-highlight-depth hover:bg-highlight/40 dark:bg-highlight/85 dark:hover:bg-highlight"
            delay={0.3}
          >
            <Trophy />
          </ReasonsItem>
        </li>
        <li>
          <ReasonsItem
            reason="Feedback Mechanism: Share thoughts for continuous 
            improvement"
            className="bg-primary-light/60 text-primary-depth hover:bg-primary-light/40 dark:hover:bg-primary-light"
            delay={0.4}
          >
            <Earth />
          </ReasonsItem>
        </li>
      </ul>
    </section>
  )
}
