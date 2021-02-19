let rowLen = [1, 2, 1, 1];
const pitScouter = {
  "Robot Information" : {
    "" : {
      "Team Number" : {
        "element" : "select",
        "type" : "number",
        "options" : [
          "0093 : NEW Apple Corps",
          "0167 : Children of the Corn"
        ]
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
    "Auto Strategy" : {
      "Auto Prefered Starting Place" : {
        "element" : "select",
        "type" : "text",
        "options" : ["None", "Left", "Right", "Middle"]
      },
      "Auto Strategy" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Scoring", "Mobility", "Wait for Tele-op", "Other (Specify in comments)"]
      }
    },
    "Auto Shooting" : {
      "Auto Prefered Shooting Place" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Trench", "Target Zone", "No Preference", "Other (Specify in comments)"]
      },
      "Auto Power port(s)" : {
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
      "Max Cells At One Time" : {
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
      "Can They Hang" : {
        "element" : "input",
        "type" : "checkbox"
      },
      "Leveling Method" : {
        "element" : "input",
        "type" : "checkbox"
      }
    },
    "" : {
      "Comments" : {
        "element" : "textarea",
        "type" : "text"
      }
    }
  },
  "" : {
    "" : {
      "" : {
        "element" : "button",
        "type" : "submit"
      }
    }
  }

}
