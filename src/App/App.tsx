import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import { VoteStats } from '../VoteStats/VoteStats';
import { Notification } from '../Notification/Notification';
import { VotesType,Votes } from '../types/votes';

export default function App() {
    const [votes, setVotes] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });
    const handleVote = (type: VotesType) => { 
        setVotes((prevVotes) => ({
            ...prevVotes,
            [type]: prevVotes[type] + 1,
        }))
    }

    const resetVotes = () => {
        setVotes({ good: 0, neutral: 0, bad: 0 })
    };

    const totalVotes = votes.good + votes.neutral + votes.bad;
    const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0

    return (
        <>
            <div className={css.app}>
                <CafeInfo />
                <VoteOptions
                onVote={handleVote} 
                onReset={resetVotes} 
                canReset={true}
                />
                <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />
            </div>
        </>
    );
}





//     const [good, setGood] = useState(0);
//     const [neutral, setNeutral] = useState(0);
//     const [bad, setBad] = useState(0);

//     const handleFeedback = (type: 'good' | 'neutral' | 'bad') => {
//         switch (type) {
//             case 'good':
//                 setGood(count + 1);
//                 break;
//             case 'neutral':
//                 setNeutral(count + 1);
//                 break;
//             case 'bad':
//                 setBad(count + 1);
            
//         }
//     };

//     const total = good + neutral + bad;
//     const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

//   return (
//     <div>
//       <h1>Leave your feedback</h1>
//       <FeedbackButtons onLeaveFeedback={handleFeedback} />
//       <Statistic
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         total={total}
//         positivePercentage={positivePercentage}
//       />
//     </div>
//   );