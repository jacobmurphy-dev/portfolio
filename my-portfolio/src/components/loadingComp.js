import React from 'react';

const LoadingScreen = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <svg width="300" height="100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#3498db", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#2ecc71", stopOpacity: 1 }} />
        </linearGradient>
        <style>
          {`
            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            @keyframes fadeOut {
              0% { opacity: 1; }
              100% { opacity: 0; }
            }
            .fade {
              animation: fadeIn 1.5s ease-in forwards, fadeOut 1.5s ease-in forwards 1.5s; /* Delay fade out until fade in completes */
            }
          `}
        </style>
      </defs>

      <text
        x="50%"
        y="50%"
        fontSize="36"
        fill="url(#grad)"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fade"
      >
        Jacob Murphy
      </text>
    </svg>
  </div>
);

export default LoadingScreen;
