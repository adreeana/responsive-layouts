import React from "react";
import WordCloud from 'react-d3-cloud';

type Props = {
    data: {text: string; value: number}[];
}
export const FeedbackWordsCloud = ({ data }: Props) => <WordCloud data={data} />