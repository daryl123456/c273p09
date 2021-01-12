 $(document).ready(function () {
                console.log("test");
                $("#idCountry").change(function () {
                    var id = $("#idCountry").val();
                    console.log("test");
                    $.ajax({
                        type: "GET",
                        url: "http://localhost/C273_L09CloudNine/getCountryDetails.php",
                        data: "id=" + id,
                        cache: false,
                        dataType: "JSON",
                        success: function (response) {
                            var message = "<thead><tr><th>Population</th><th>Obese</th></tr></thead>";

                            message += "<tr><td>" + response.population + "</td>"
                                    + "<td>" + response.obese + "</td></tr>";

                            $("#obeseTable").html(message);
                        },
                        error: function (obj, textStatus, errorThrown) {
                            console.log("Error " + textStatus + ": " + errorThrown);
                        }
                    });
                });
            });