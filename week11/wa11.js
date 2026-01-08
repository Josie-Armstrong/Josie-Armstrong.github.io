const titleField = document.querySelector("#title-search");
const searchButton = document.querySelector("#search-button");

const endpoint = "https://openlibrary.org/search.json?";

async function searchBooks() {
    let title = titleField.value;
    console.log("worked");

    let search_title = "";

    for (i = 0; i < title.length; i++) {
        if (title[i] == " ") {
            search_title = search_title + "+"
            console.log("switched to +");
        }
        else {
            search_title = search_title + title[i];
        }
    }

    console.log(search_title);

    let curr_end = String(endpoint + "title=" + search_title);
    console.log(curr_end);

    try {
        const response = await fetch(curr_end);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json);

        displayBooks(json);

    } catch (err) {
        console.log(err)
        alert('Failed to search for books');
     }
}

function displayBooks(json) {
    for (i = 0; i < 5; i++) {
        let title_id = String("book" + (i + 1));
        let cover_id = String("img" + (i + 1));
        let olid = String(json["docs"][i]["cover_edition_key"]);
        console.log(olid);
        // olid = olid.slice(7);
        let cover_src = "https://covers.openlibrary.org/a/olid/" + olid + ".jpg";
        console.log(cover_src);

        document.getElementById(title_id).textContent = json["docs"][i]["title"];
        document.getElementById(cover_id).src = cover_src;
    }
}



searchButton.addEventListener("click", searchBooks);