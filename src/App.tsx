import React from 'react';
import {FeedbackWordsCloud} from "./charts/world-cloud/FeedbackWordsCloud";
import {FR_1_2_3_100, FR_1_2_3_50, FR_4_5_50, FR_all_200, FR_all_50} from "./charts/world-cloud/FeedbackWordsCount";

function App() {
  return (
  <>
    <h1>FR all 200</h1>
    <div>
    <FeedbackWordsCloud data={FR_all_200}/>
    </div>
    <h1>FR all 50</h1>
    <div>
    <FeedbackWordsCloud data={FR_all_50}/>
    </div>
    <h1>FR 1,2,3 100</h1>
    <div>
      <FeedbackWordsCloud data={FR_1_2_3_100}/>
    </div>
    <h1>FR 1,2,3 50</h1>
    <div>
      <FeedbackWordsCloud data={FR_1_2_3_50}/>
    </div>
    <h1>FR 4,5 50</h1>
    <div>
      <FeedbackWordsCloud data={FR_4_5_50}/>
    </div>
  </>
  );
}

export default App;
