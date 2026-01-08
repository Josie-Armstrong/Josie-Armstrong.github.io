const event1 = document.querySelector(".event1");
        let color_changed = false;

        function changeBgCol(event) {
            console.log("triggered");
            if (event.key == "c") {

                if (color_changed == false) {
                    event1.style.backgroundColor = "#000000";
                    color_changed = true;
                }
                else {
                    event1.style.backgroundColor = "#fff8da";
                    color_changed = false;
                }

            }
        }

        addEventListener("keydown", (event) => {changeBgCol(event)})