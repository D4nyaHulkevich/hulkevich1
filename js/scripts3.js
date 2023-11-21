const ballDiv = document.createElement("div");
        ballDiv.className = "ball";

        const responseP = document.createElement("p");
        responseP.id = "response";

        ballDiv.appendChild(responseP);
        document.body.appendChild(ballDiv);

        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.id = "clear";
        inputField.placeholder = "Поставте своє питання";
        inputField.addEventListener("focus", clearInput);

        const enterButton = document.createElement("button");
        enterButton.id = "askme";
        enterButton.textContent = "Натисніть";
        enterButton.addEventListener("click", myFunction);

        document.body.appendChild(inputField);
        document.body.appendChild(enterButton);

        function clearInput() {
            inputField.value = "";
        }

        const responses = [
            "Це певно так",
            "Без сумніву",
            "Так",
            "Ні",
            "Можливо так",
            "Напевно ні",
        ];

        function myFunction() {
            responses.sort(function (a, b) {return 0.5 - Math.random() });
            responseP.textContent = responses[0];
            responseP.style.fontSize = "30px";
            setTimeout(timeup, 3000);

            function timeup() {
                responseP.textContent = "Ще питання";
                responseP.style.fontSize = "28px";
                clearInput();
            }
        }
		