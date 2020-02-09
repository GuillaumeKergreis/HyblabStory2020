let frontMapColor = getComputedStyle(document.documentElement).getPropertyValue("--map-fg-color");
let frontDotColor = getComputedStyle(document.documentElement).getPropertyValue("--map-dot-color");

// Création automatique des zones de plot
async function getPlotsFromData() {

    function getContent(datum) {
        return "<span class=\"city\">" + datum.ville + "</span><br />" +
            "<span class=\"date\">" + datum.date + "</span><br />" +
            "<span class=\"description\">" + datum.description + "</span>";
    }

    function getContent_France(datum) {
        let HTML_res = "";
        const splitted_description = datum.description.split('|');

        HTML_res += "<span class=\"city\">" + datum.ville + "</span><br />";
        HTML_res += "<span class=\"date\">" + datum.date + "</span><br />";

        HTML_res += "<span class=\"description\">";
        for (let i = 0; i < splitted_description.length; i++) {
            HTML_res += splitted_description[i] + "<br />";
        }
        HTML_res += "</span>";

        return HTML_res;
    }

    let plots = {};
    await $.getJSON("data/map.json", function (data) {
        for (let i = 0; i < data.length; i++) {

            let city = data[i].ville;

            plots[city] = {
                latitude: data[i].coordonnees.latitude,
                longitude: data[i].coordonnees.longitude
            };

            if (data[i].pays === "France") {
                plots[city]["tooltip"] = {
                    content: getContent_France(data[i])
                };
            } else {
                plots[city]["tooltip"] = {
                    content: getContent(data[i])
                };
            }

            plots[city]["type"] = "image";
            switch (data[i].type) {
                case "Campus":
                    plots[city]["url"] = "img/map/picto_diplome.png";
                    // Ratio : 1.32
                    plots[city]["height"] = 10;
                    plots[city]["width"] = 13;
                    plots[city]["value"] = "diplome";
                    break;
                case "Partenariat":
                    plots[city]["url"] = "img/map/picto_mains.png";
                    // Ratio : 1.34
                    plots[city]["height"] = 9;
                    plots[city]["width"] = 12;
                    plots[city]["value"] = "mains";
                    break;
                case "Accreditation":
                    plots[city]["url"] = "img/map/picto_medaille.png";
                    // Ratio : 0.64
                    plots[city]["height"] = 12;
                    plots[city]["width"] = 8;
                    plots[city]["value"] = "medaille";
                    break;
            }
        }
    });

    return plots;
}

$(document).ready(async function () {
    $(".p3-t2-container").mapael({
        map: {
            name: "world_countries_miller",
            defaultArea: {
                attrs: {
                    fill: frontMapColor,
                    stroke: frontMapColor
                },
                attrsHover: {
                    fill: frontMapColor
                }
            },
            defaultPlot: {
                size: 10,
                attrs: {
                    fill: frontDotColor
                },
                attrsHover: {
                    "stroke-width": 10,
                    transform: "s1.5"
                }
            }
        },
        legend: {
            plot: {
                marginLeftLabel: 15,
                labelAttrs: {
                    "font-family": "Avenir",
                    "font-size": 25,
                    fill: frontMapColor
                },
                labelAttrsHover: {
                    transform: "s1.1",
                    fill: frontMapColor
                },
                slices: [
                    {
                        label: "Campus",
                        sliceValue: "diplome",
                        type: "image",
                        url: "img/map/picto_diplome.png",
                        height: 10,
                        width: 13
                    },
                    {
                        label: "Partenariat",
                        sliceValue: "mains",
                        type: "image",
                        url: "img/map/picto_mains.png",
                        height: 9,
                        width: 12
                    },
                    {
                        label: "Accréditation",
                        sliceValue: "medaille",
                        type: "image",
                        url: "img/map/picto_medaille.png",
                        height: 12,
                        width: 8
                    }
                ]
            }
        },
        plots: await getPlotsFromData()
    });
});