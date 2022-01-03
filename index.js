function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return "This one is on me!";
  }
  else if (feet > 2500){
    return "No can do."
  } 
  else {
    return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  let farewell;

  switch (tip) {
    case "generous":
      farewell = "Thank you so much.";
      break;
    case "not as generous":
      farewell = "Thank you.";
      break;
    default:
      farewell = "Bye.";
  }
  return farewell;
}