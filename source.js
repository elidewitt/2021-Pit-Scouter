const pitScouter = {
  "Robot Information" : {
    "" : {
      "Team Number" : {
        "element" : "input",
        "type" : "number"
      }
    },
    "Robot Size" : {
      "Height (Inches)" : {
        "element" : "input",
        "type" : "number"
      },
      "Weight (Pounds)" : {
        "element" : "input",
        "type" : "number"
      }
    },
    "Drivetrain" : {
      "Drivetrain Type" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Tank", "Mecanum", "H-Drive", "Butterfly", "Swerve"]
      }
    },
    "Inspection" : {
      "Inspection Pass" : {
        "element" : "input",
        "type" : "checkbox"
      }
    },
    "Vision System" : {
      "Vision System Type" : {
        "element" : "select",
        "type" : "text",
        "options" : ["None", "Webcam", "Limelight", "Vex Color Sensor", "Other (Specify in comments)"]
      },
      "Vision System Use" : {
        "element" : "input",
        "type" : "text"
      }
    }
  },
  "Autonomous" : {
    "Autonomous Strategy" : {
      "Autonomous Prefered Starting Place" : {
        "element" : "select",
        "type" : "text",
        "options" : ["None", "Left", "Right", "Middle"]
      },
      "Autonomous Strategy" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Scoring", "Mobility", "Wait for Tele-op", "Other (Specify in comments)"]
      }
    },
    "Autonomous Shooting" : {
      "Autonomous Prefered Shooting location" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Trench", "Target Zone", "No Preference", "Other (Specify in comments)"]
      },
      "Autonomous Power port(s)" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Upper Port", "Lower Port", "Both Ports", "None"]
      }
    }
  },
  "Tele-Op" : {
    "Tele-Op Shooting" : {
      "Tele-Op Prefered Shooting location" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Trench", "Target Zone", "No Preference", "Other (Specify in comments)"]
      },
      "Tele-Op Power port(s)" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Upper Port", "Lower Port", "Both Ports", "None"]
      }
    },
    "Control Panel" : {
      "Rotate control" : {
        "element" : "input",
        "type" : "checkbox"
      },
      "Position control" : {
        "element" : "input",
        "type" : "checkbox"
      }
    }
  },
  "Other" : {
    "Power Cell Management" : {
      "Max cells at one time" : {
        "element" : "input",
        "type" : "number"
      },
      "Cell Loading Method" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Driver Station", "Pick up off Ground", "Both", "Other (Specify in comments)"]
      }
    },
    "End Game" : {
      "Can they Hang" : {
        "element" : "input",
        "type" : "checkbox"
      },
      "Leveling method" : {
        "element" : "input",
        "type" : "checkbox"
      }
    },
    "" : {
      "Comments" : {
        "element" : "input",
        "type" : "text"
      }
    }
  },
}
