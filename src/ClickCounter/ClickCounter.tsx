import { useState } from 'react';

type FeedbackType = 'good' | 'neutral' | 'bad';

interface ClickCounterProps {
    value: FeedbackType;
}

export default function ClickCounter({ value }: ClickCounterProps) {
    const [clicks, setClicks] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleClicks = () => {
        setClicks(clicks + 1);
        setIsOpen(!isOpen);
    }
    
    // const toggleNotification = () => setIsOpen(!isOpen);

    return (
        <>
            <button onClick={handleClicks}> {value} {clicks}</button>
            {isOpen && <p>you can see me</p>}
        </>
    );
}