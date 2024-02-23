const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center p-30 bg-primaryColor h-823">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 mb-4"></div>
      <h2 className="text-center text-white text-xl">Loading...</h2>
      <style jsx>{`
        .loader {
          border-top-color: #3498db; // Customize the color to fit your design
          -webkit-animation: spinner 1.5s linear infinite;
          animation: spinner 1.5s linear infinite;
        }
        @-webkit-keyframes spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
