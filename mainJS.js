function initial(){
    fetchPromise = fetch('https://whiskyhunter.net/api/distilleries_info/');
    fetchPromise
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            const countries = []
            for (item in data){
                if (!(countries.includes(data[item].country))){
                    countries.push(data[item].country)
                }
            }
            for (item in countries){
                var x = document.getElementById("country-list");
                var option = document.createElement("option");
                option.text = countries[item];
                option.value = countries[item]
                x.add(option);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

function loadChart(){
    var countryFind = document.getElementById("country-list").value;
    var dataArray = [];
    fetchPromise = fetch('https://whiskyhunter.net/api/distilleries_info/');
    fetchPromise
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            for (item in data){
                if (data[item].country == countryFind){
                    var temp = {x: data[item].whiskybase_whiskies, y: data[item].whiskybase_rating}
                    dataArray.push(temp)
                }
            }
            console.log(dataArray)
        })
        .catch((error) => {
            console.log(error);
        })
        
        new Chart("myChart", {
            type: "scatter",
            data: {
                datasets: [{
                    label:"Rating by Number of Whiskey Varieties",
                    backgroundColor:"rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: dataArray,
                }],
                
            },
            
            });

            document.getElementById("chart-container").render()
}

//api second end-point and pass to front-end.
//purpose of it is to display an auction name and it's winning bid in a tbale format.

function fetchRandomAuctions() {
    const apiUrl = 'https://whiskyhunter.net/api/auctions_data/';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const randomAuctions = getRandomItems(data, 10);

        populateAuctionMaxBidTable(randomAuctions);
      })
      .catch(error => console.error('Error fetching auction data:', error));
  }

function getRandomItems(array, count) {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  }

function populateAuctionMaxBidTable(data) {
    const tableBody = document.getElementById('tableBody');

    tableBody.innerHTML = '';

    data.forEach(item => {
      const row = document.createElement('tr');

      const auctionNameCell = document.createElement('td');
      auctionNameCell.textContent = item.auction_name || 'N/A';
      row.appendChild(auctionNameCell);

      // Winning Bid column
      const winningBidCell = document.createElement('td');
      winningBidCell.textContent = item.winning_bid_max || 'N/A';
      row.appendChild(winningBidCell);

      tableBody.appendChild(row);
    });
  }

//call both functions here to display
window.onload = function() {
    fetchRandomAuctions();
    initial();
};