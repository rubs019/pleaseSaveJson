const JSONFormatter = require('json-formatter-js').default

const myJSON = {
    "currentPage": {
        "displayTemplate": "contentGrid",
        "displayName": "",
        "path": "//h/null",
        "adult": true
    },
    "tracking": {
        "omniture": {
            "prop4": "Usage - Liste",
            "prop5": "Usage - Liste",
            "pageName": "Usage - Liste",
            "channel": "Usage",
            "prop10": "Contenu",
            "prop11": "Autres",
            "prop12": "Consumer"
        }
    },
    "paging": {
        "iterationType": "id",
        "nbContents": 1,
        "hasNextPage": false,
        "hasPreviousPage": false,
        "URLPage": "http://localhost:3000/api/v1/mycanal/contentGrid/585728d24358ae95845c8083e143314e/cplusald_them_versailles;QGK.json?params%5BdetailType%5D=contentGrid&objectType=list&params%5Bdsp%5D=player&params%5Bsdm%5D=show&params%5Bhighlight%5D=false&adult=true&after="
    },
    "contents": [
        {
            "type": "VoD",
            "contentID": "8519753_50001",
            "onClick": {
                "displayTemplate": "quicktime",
                "URLPage": "http://localhost:3000/api/v1/mycanal/detail/585728d24358ae95845c8083e143314e/okapi/8519753_50001.json?params%5BdetailType%5D=detailPage&objectType=unit&params%5Bdsp%5D=player&params%5Bsdm%5D=show&params%5Bhighlight%5D=false&adult=true",
                "URLMedias": "http://localhost:3000/api/v1/mycanal/getMediaUrl/585728d24358ae95845c8083e143314e/okapi/undefined.json?cache=780000&objectType=unit&operator={operator}",
                "path": "///h/8519753_50001",
                "adult": true
            }
        }
    ],
    "displayParameters": {
        "imageRatio": "169"
    },
    "context": {
        "contextType": "catalog",
        "contextDetail": "Usage-cplusald_them_versailles;QGK"
    }
};

const formatter = new JSONFormatter(myJSON);

console.log(document.body)

document.body.appendChild(formatter.render());
