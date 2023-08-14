'use client';

export default ({ startPlay, choice }) => {

  return (
    <div>
      <button 
        className={`choiceButton`}
        id={`${choice}`}
        onClick={() => startPlay()}
      >
        {choice}
      </button>
    </div>
  )
}