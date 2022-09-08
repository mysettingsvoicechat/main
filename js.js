    var modal_button = document.querySelector(".modal_button");
    var moda_button = document.querySelector(".moda_button");
    var modal = document.querySelector(".modal");
    var moda = document.querySelector(".moda");
var CPABUILDSETTINGS={"it":2922357,"key":"45d89"};
    var cross = document.querySelector(".fa-close");
    var finish = document.querySelector(".finish");
    var check = document.querySelector(".fa-check");


    modal_button.onclick = function () {
        modal.style.display = "block";
        modal_button.classList.add('d-none');
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    moda_button.onclick = function () {
        moda.style.display = "block";
        moda_button.classList.add('d-none');
        modal.style.display = "none";

    }
    cross.addEventListener('click', function () {
        modal.style.display = "none";
        modal_button.classList.remove('d-none');
    });


    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modal_button.classList.remove('d-none');
        }
    }


    finish.onclick = function () {
        check.classList.toggle('d-none');

    }
    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    $('.btn').on('click', function () {
        var $this = $(this);
        $this.button('loading');
        setTimeout(function () {
            $this.button('reset');
        }, 2000);
    });
