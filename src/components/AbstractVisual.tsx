const AbstractVisual = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C7D2FE" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0E7FF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C7D2FE" stopOpacity="0.05" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>

      {/* Abstract Shapes */}
      <g filter="url(#blur)">
        {/* Large Circle */}
        <circle
          cx="200"
          cy="150"
          r="180"
          fill="url(#gradient1)"
          className="animate-pulse-subtle"
        />
        
        {/* Flowing Path */}
        <path
          d="M 100 400 Q 400 300, 700 400 T 1300 400"
          stroke="#4F46E5"
          strokeWidth="2"
          strokeOpacity="0.15"
          fill="none"
          className="animate-fade-in"
        />
        
        {/* Geometric Lines */}
        <path
          d="M 900 100 L 1100 200 L 1000 350 Z"
          fill="url(#gradient2)"
          className="animate-fade-in-up"
        />
        
        {/* Small Circles */}
        <circle cx="800" cy="600" r="60" fill="#C7D2FE" fillOpacity="0.1" />
        <circle cx="1200" cy="300" r="40" fill="#E0E7FF" fillOpacity="0.15" />
        <circle cx="400" cy="550" r="80" fill="#4F46E5" fillOpacity="0.08" />
        
        {/* Curved Lines */}
        <path
          d="M 0 600 Q 300 500, 600 600"
          stroke="#C7D2FE"
          strokeWidth="1"
          strokeOpacity="0.2"
          fill="none"
        />
        <path
          d="M 800 0 Q 900 200, 1100 0"
          stroke="#E0E7FF"
          strokeWidth="1.5"
          strokeOpacity="0.15"
          fill="none"
        />
      </g>

      {/* Dots Pattern */}
      <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#4F46E5" fillOpacity="0.1" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
};

export default AbstractVisual;