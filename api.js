let matches;
fetch("https://frc-api.firstinspires.org/v2.0/2019/matches/MNDU?tournamentLevel=qual&teamNumber=93")
  .then(response => response.json())
  .then(data => {
    matches = data.Matches;
  })
