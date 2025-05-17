 //creates a grereting when the firsdt page loads
        function pageLoad(){
            var grereting = "Welcome to ";
            grereting += "learning how to debug code ";
            grereting += "unsing the console with DevTools!";
            window.alert(grereting);
        }

        //Sets Default
        var count = 0;

        function clickCount(){
            count ++;
            document.getElementById("counter").innerHTML = count;
        }

        function resetCount(){
            var count = "";
            documentElementById("counter").innerHTML = count;
        }

        function count_to_Ten() {
            var Digit = "";
            var X = 1;
            while (X<11) {
                Digit += "<br>" + X;
                X++;
            }
            document.getElementById("Counting_to_Ten").innerHTML=Digit;
        }