import ReactCurvedText from "react-curved-text";

const CircularTextComponent = () => {
  const repeatedText = "paws . claws . paws . claws .";
  return (
    <div className="flex items-center justify-center w-32 h-32 rounded-full animate-spin-slow">
      <ReactCurvedText
        width={100}
        height={100}
        cx={50}
        cy={50}
        rx={40}
        ry={40}
        startOffset={10}
        reversed={false}
        text={repeatedText}
        textProps={{
          style: {
            fontSize: 17,
            fill: "#ffffff",
            fontWeight: "lighter",
          },
        }}
      />
    </div>
  );
};

export default CircularTextComponent;
