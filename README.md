# MindGym Pub Quiz

## Getting started

The frontend and backend are found in the client and server folders, respectively.

First, install the packages in each folder with `npm install` (or just `yarn` if using yarn)

Then, use `npm run dev` in each folder to run both front and backend

## The backend

I kept my Node/express backend as simple as possible, with one endpoint that simply checks the answer of each question against the player choice. It then returns the score to the frontend as json. The endpoint will validate as many questions as it is given.

## The frontend

I opted to use React on the frontend as I'm most familiar with it.

The quiz data is set in state, and is used to dynamically populate the question text and buttons. After you answer each question, your answer is stored inside the relevant question object in the quiz data array, and the quiz moves onto the next question using a simple counter iterating through the question data. When the user reaches the end of the array, the data is sent to the backend to be marked and the score is returned.

The quiz will last for as many questions as there are in the data.
