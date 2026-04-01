fetch('papers.json')
    .then(response => response.json())
    .then(papers => {
        const list = document.getElementById('paper-list');

        papers.forEach(paper => {
            const li = document.createElement('li');
            const link = document.createElement('a');

            link.href = `references/${paper}`;
            link.textContent = paper;
            link.target = "_blank";

            li.appendChild(link);
            list.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Error loading papers:", error);
    });