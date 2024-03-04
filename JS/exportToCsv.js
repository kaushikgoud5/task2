  define( function() {
    const tableToCSV = () => {
      alert("csv")
        let csvData = [];
        let rows = document.getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
          let cols = rows[i].querySelectorAll('td,th')
          let csvRow = [];
          for (let j = 1; j < cols.length; j++) {
            csvRow.push(cols[j].innerText);
          }
          csvData.push(csvRow.join(","));  
        }
      
        csvData=csvData.join("\n");
        console.log(csvData)
        csvFile = new Blob([csvData], { type: "text/csv" });
        let tmp = document.createElement("a");
        tmp.download = "Data.csv";
        let url = window.URL.createObjectURL(csvFile);
        tmp.href = url;
        tmp.style.display = "none";
        document.body.appendChild(tmp);
        tmp.click();
        document.body.removeChild(tmp);
      };
      return tableToCSV;
    
  });