import ClickCounter from '../ClickCounter/ClickCounter';
// import styles from './App.module.css';
// import FeedbackButtons from '../FeedbackButtons/FeedbackButtons';
// import Statistic from '../Statistic/Statistic';

export default function App() {
    return (
        <>
            <ClickCounter value='good' />
            <ClickCounter value='neutral' />
            <ClickCounter value='bad' />
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