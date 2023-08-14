import Link from 'next/link';
import ChoiceButton from './components/ChoiceButton';
import Hello from './components/Hello'

export default function Homepage() {

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href='/hello'
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Rock{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Rip their heads off and suck their guts out
            </p>
          </Link>
          <ChoiceButton choice="Paper"/>
          <ChoiceButton choice="Scissors"/>
          <Hello/>
        </div>
      </main>
    </div>
    
  )
}

export function startPlay() {
  console.log("Weed lol")

  setPlayerChoice(choice);
}
