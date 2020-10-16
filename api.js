//
let schedule;
fetch("https://frc-api.firstinspires.org/v2.0/2019/schedule/MNDU?tournamentLevel=qual")
  .then(response => response.json())
  .then(data => {
    schedule = data.Schedule;
  })

// schedule[matchNum - 1].teams
