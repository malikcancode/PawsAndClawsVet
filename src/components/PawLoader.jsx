const PawLoader = () => {
  return (
    <div className="h-screen bg-zinc-200 flex items-center justify-center">
      <div className="ajax-loader">
        <svg id="svg-sprite" className="hidden">
          <symbol id="paw" viewBox="0 0 249 209.32">
            <ellipse cx="27.917" cy="106.333" rx="27.917" ry="35.833" />
            <ellipse cx="84.75" cy="47.749" rx="34.75" ry="47.751" />
            <ellipse cx="162" cy="47.749" rx="34.75" ry="47.751" />
            <ellipse cx="221.083" cy="106.333" rx="27.917" ry="35.833" />
            <path d="M43.98 165.39s9.76-63.072 76.838-64.574c0 0 71.082-6.758 83.096 70.33 0 0 2.586 19.855-12.54 31.855 0 0-15.75 17.75-43.75-6.25 0 0-7.124-8.374-24.624-7.874 0 0-12.75-.125-21.5 6.625 0 0-16.375 18.376-37.75 12.75 0 0-28.29-7.72-19.77-42.86z" />
          </symbol>
        </svg>

        {[...Array(6)].map((_, index) => (
          <div key={index} className="paw">
            <svg className="icon">
              <use xlinkHref="#paw" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PawLoader;
