import React from 'react';

const VoicePicker = () => {
    const voices = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];
    return (
        <div data-testid="voice-picker">
            <select data-testid="voice-select">
                {voices.map((voice, index) => (
                    <option key={index} value={voice}>{voice}</option>
                ))}
            </select>
        </div>
    );
};

export default VoicePicker;