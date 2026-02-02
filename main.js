const date = new Date(); 

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const formattedDate =
    days[date.getDay()] + ", " +
    months[date.getMonth()] + " " +
    String(date.getDate()).padStart(2, "0") + ", " +
    date.getFullYear();

  document.getElementById("date").innerText = formattedDate;