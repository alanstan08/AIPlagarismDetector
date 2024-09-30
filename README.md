AI Plagiarism Detector
An AI-powered plagiarism detection tool built with React. This web application allows users to upload documents and check for plagiarism using a machine learning-based API. The application leverages Axios for making HTTP requests and handles plagiarism report generation with a modern, user-friendly interface.

Features
1. File Upload: Upload files in various formats (e.g., PDF, DOCX) for plagiarism checks.
2. Real-time Status Updates: After uploading a document, the app polls for the scan status and retrieves plagiarism results in real-time.
3. Responsive Design: A mobile-friendly interface ensures the application works well on all devices.
Technologies Used
1. frontend : react.js, html , tailwind css, javascript
2. api : PlagarismScanner API


Getting Started
Follow these instructions to get a copy of the project running on your local machine.

Prerequisites
Make sure you have the following installed:

1. Node.js (version >= 12.x)
2. npm (version >= 6.x)
3. Have a plagarism search account at https://plagiarismsearch.com/ (you can use the free trial when you sign in for the first time  ) 

Installing
1. Clone the repository:
### `git clone https://github.com/alanstan08/AIPlagarismDetector.git`
2. In the main repo run :
### `npm i`
3. Set up your .env file with the API token received from the plagarism search
### `REACT_APP_TOKEN={your token name}`
4. Run the development server
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


Usage
Once the app is running:

Upload a document by clicking on the "Upload" button.
The app will send the document to the plagiarism detection API.
The status of the scan will be polled every 10 seconds, and you’ll receive the result once the scan is completed.
The plagiarism report will show the percentage of copied text and other relevant details.

Runs the app in the development mode.

API Integration
The app interacts with a third-party API to check for plagiarism. The API token (stored in environment variables) is passed as part of the Authorization header for all requests. The API response includes the status of the scan and the result details.




