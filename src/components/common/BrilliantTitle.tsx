export const BrilliantTitle = ({ title }: { title: string }) => {
  return (
    <>
      <style>
        {`
          @keyframes shine {
            0% {
              background-position: -200%;
            }
            100% {
              background-position: 200%;
            }
          }
        `}
      </style>
      <span
        style={{
          background: "linear-gradient(90deg, #8e44ad, #c084fc, #8e44ad)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          animation: "shine 2s linear infinite",
        }}
      >
        {title}
      </span>
    </>
  );
};
