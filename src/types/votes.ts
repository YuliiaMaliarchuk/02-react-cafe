export type VotesType  = 'good' | 'neutral' | 'bad';

export interface Votes {
    good: number;
    neutral: number;
    bad: number;
}