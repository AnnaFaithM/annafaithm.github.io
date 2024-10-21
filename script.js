function filterData() {
event.preventDefault();
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  console.log(startdate);
  console.log(enddate);
}
<script>
    async function fetchData() {
        try {
            const response = await fetch('https://compute.samford.edu/zohauth/clients/datajson/1');
            const data = await response.json();

            const table = document.getElementById('pitchTable');

            data.forEach(pitch => {
                const row = table.insertRow();
                const pitchLink = document.createElement('a');
                pitchLink.href = `details.html?id=${pitch.PitchNo}`;
                pitchLink.textContent = `Pitch ${pitch.PitchNo}`;

                row.insertCell(0).appendChild(pitchLink);
                row.insertCell(1).textContent = pitch.Date;
                row.insertCell(2).textContent = pitch.Time;
                row.insertCell(3).textContent = pitch.Batter;
                row.insertCell(4).textContent = pitch.Balls;
                row.insertCell(5).textContent = pitch.Strikes;
                row.insertCell(6).textContent = pitch.Outs;
                row.insertCell(7).textContent = pitch.PitchCall;
                row.insertCell(8).textContent = pitch.KorBB || '';
                row.insertCell(9).textContent = pitch.ReleaseSpeed || '';
                row.insertCell(10).textContent = pitch.Rotation || '';
                row.insertCell(11).textContent = pitch.SpinRate || '';
                row.insertCell(12).textContent = pitch.SpinAxis || '';
            });
        } catch (error) {
            console.error('Error fetching data:', error);
                  }
    }

    // Fetch the data when the page loads
    window.onload = fetchData;
</script>
