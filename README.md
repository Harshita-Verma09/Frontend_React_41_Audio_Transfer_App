# Audio Transfer App

A simple web application built with React that allows users to record audio using their microphone and then download the recorded audio as an MP3 file.

## Features

- **Record Audio:** Easily record audio directly from your browser using the microphone.
- **Stop Recording:** Stop the recording at any time.
- **Play Audio:** Listen to the recorded audio within the application.
- **Download Audio:** Download the recorded audio as an MP3 file to your local device.
- **Clean and Intuitive UI:** A user-friendly interface built with Tailwind CSS.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Heroicons:** Beautifully crafted SVG icons for UI elements.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd <project-directory>
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn add
    ```
4.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    This will run the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1.  **Grant Microphone Access:** When you first run the application, your browser will likely ask for permission to access your microphone. Please grant the necessary permission to proceed.
2.  **Start Recording:** Click the microphone icon (<0xE2><0x9F><0x8E><0x90>) to begin recording audio. The icon will change to a stop icon (⏹️) to indicate that recording is in progress.
3.  **Stop Recording:** Click the stop icon (⏹️) to finish recording.
4.  **Play Audio:** Once the recording is stopped, an audio player will appear. Click the play button to listen to your recording.
5.  **Download Audio:** To save the recording to your device, click the "Download" button below the audio player. The audio will be downloaded as `recording.mp3`.
