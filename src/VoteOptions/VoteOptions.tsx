import css from './VoteOptions.module.css';

export interface VoteOptionsProps { 
    onVote: (type: 'good' | 'neutral' | 'bad') => void;
    onReset: () => void;
    canReset: boolean;
}

export default function VoteOptions({onVote, onReset, canReset} : VoteOptionsProps) { 
    return (
        <div className={css.container}>
      <button className={css.button} onClick={() => onVote('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote('bad')}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>

        // <div className={css.container}>
        //     <button className={css.button}>Good</button>
        //     <button className={css.button}>Neutral</button>
        //     <button className={css.button}>Bad</button>
        //     <button className={`${css.button} ${css.reset}`}>Reset</button>
        // </div>
    );
}