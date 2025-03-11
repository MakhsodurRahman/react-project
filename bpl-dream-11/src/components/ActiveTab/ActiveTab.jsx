

const ActiveTab = ({activeTab,playearLength,setActiveTab}) => {
    return (
        <div className="tab-buttons">
          <button
            className={`${
              activeTab === 'Available' ? 'bg-yellow-300' : 'bg-blue-300'
            } ${activeTab === 'Available' ? 'active' : ''} rounded-l-md p-2` }
            onClick={() => setActiveTab('Available')}
          >
            Available
          </button>
          <button
            className={`${
              activeTab === 'Selected' ? 'bg-yellow-300' : 'bg-blue-300'
            } ${activeTab === 'Selected' ? 'active' : ''} rounded-r-md p-2`}
            onClick={() => setActiveTab('Selected')}
          >
            Selected ({playearLength})
          </button>
        </div>
      );
      
};

export default ActiveTab;