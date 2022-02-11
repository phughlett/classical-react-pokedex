export default function RightSideBar({ showTeam, myTeam, searchHistory }) {
  let properHtml = showTeam ? (
    <div>MY TEAM:</div>
  ) : (
    <div>RECENTLY SEARCHED POKÉMON</div>
  );

  return <div className="right-bar">{properHtml}</div>;
}
