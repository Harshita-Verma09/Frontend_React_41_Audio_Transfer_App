import React, { useState, useRef } from "react";
import { MicrophoneIcon, StopIcon, PlayIcon, DownloadIcon } from "@heroicons/react/solid";


const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/mp3" });
      const url = URL.createObjectURL(audioBlob);
      setAudioURL(url);
      audioChunks.current = [];
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-4">🎙 Audio Transfer App</h2>

      <div className="flex space-x-4">
        {!recording ? (
          <button
            onClick={startRecording}
            className="p-3 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all"
          >
            <MicrophoneIcon className="h-6 w-6 text-white" />
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="p-3 bg-red-500 hover:bg-red-600 rounded-full shadow-lg transition-all"
          >
            <StopIcon className="h-6 w-6 text-white" />
          </button>
        )}
      </div>

      {audioURL && (
        <div className="mt-6 flex flex-col items-center space-y-3">
          <audio controls src={audioURL} className="w-64"></audio>
          <a
            href={audioURL}
            download="recording.mp3"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white flex items-center space-x-2"
          >
            <DownloadIcon className="h-5 w-5" />
            <span>Download</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
