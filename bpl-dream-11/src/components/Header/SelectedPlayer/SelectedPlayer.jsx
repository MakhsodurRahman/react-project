import ShowSelectedPlayer from "./ShowSelectedPlayer";

const SelectedPlayer = ({selectedPlayers}) => {
    console.log('select player')
    console.log(selectedPlayers)
    return (
        <div>
            {
                selectedPlayers.map(selPlayer => <ShowSelectedPlayer selPlayer={selPlayer}></ShowSelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayer;