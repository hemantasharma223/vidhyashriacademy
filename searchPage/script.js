window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const content = document.getElementById("content");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > content.offsetTop) {
      navbar.classList.add("fixed-nav");
  } else {
      navbar.classList.remove("fixed-nav");
  }
  });
  


document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    var searchQuery = document.getElementById('searchInput').value;
    var nameQuery = localStorage.getItem('name')

    const searchQueryLwr = searchQuery.toLowerCase();
    const nameQueryLwr = nameQuery.toLowerCase();

    if (nameQueryLwr == searchQueryLwr){
      // You can replace the below code with your own logic to fetch and display search results
    var searchResults = [
      {
        url: "../output/outputBill.html"
      }
    ];
  
    var searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';
  
    for (var i = 0; i < searchResults.length; i++) {
      var result = searchResults[i];
      var resultElement = document.createElement('div');
      resultElement.innerHTML = '<h3>' + nameQuery + '</h3>' +
                                '<p><a href="' + result.url + '">Generate Bill</a></p>';
      searchResultsContainer.appendChild(resultElement);
    }
    }
    else{
      alert(" Student Details not found")
    }
    
  });
  